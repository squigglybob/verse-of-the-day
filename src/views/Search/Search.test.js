import React from 'react'
import {
    render,
    cleanup,
    wait,
    waitForElementToBeRemoved,
    waitForElement,
} from '@testing-library/react'
import {
    Router,
    Route,
} from 'react-router-dom'

import '@testing-library/jest-dom'
import nock from 'nock'
import faker from 'faker'
import { createMemoryHistory } from 'history'

import Search from 'views/Search/Search'
import API from 'api/API'

import * as ROUTES from 'constants/routes'

import bibleData from 'data/bibleChaptersVerses.min.js'
import { act } from 'react-dom/test-utils'

function getbookDetails() {
    let bibleDetails = {}
    bibleData.forEach((book) => {
        bibleDetails[book.abbr] = book
    })
    return bibleDetails
}

const bibleDetails = getbookDetails()

const BIBLE_VERSION = 'LEB'

function renderWithRouter(
    ui,
    {
        route = '/',
        path = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {},
) {
    const Wrapper = ({ children }) => (
        <Router history={history}>
            <Route path={path}>
                {children}
            </Route>
        </Router>
    )
    return {
        ...render(ui, { wrapper: Wrapper }),
        history,
    }
}

describe('view search by passage', () => {

    afterEach(cleanup)

    describe('when searchString is malformed', () => {
        it('should present an error', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: false,
                    statusText: 'Not found'
                })
            );
            const malformedSearchString = faker.lorem.word()
            const malformedRoute = `/search/passage/${malformedSearchString}`
            const errorString = /Error/i

            const history = createMemoryHistory()

            history.push(malformedRoute)

            const { getByText, getByTestId } = renderWithRouter(
                <Search
                    bibleVersion={BIBLE_VERSION}
                    bibleDetails={bibleDetails}
                />,
                {
                    route: malformedRoute,
                    path: ROUTES.SEARCH_WITH_PARAMS,
                    history
                })
            expect(getByText('Search result')).toBeInTheDocument()
            expect(getByTestId('verseCardTitle')).toHaveTextContent(malformedSearchString)
            expect(getByText(errorString)).toBeInTheDocument()
            expect(getByTestId('verseCardReadMore')).toHaveClass('Mui-disabled')
        })
    })

    describe('when searchString is good', () => {
        it('should display text', async () => {

            const fakeText = faker.lorem.paragraph(3)
            const book = '1Cor'
            const chapterVerse = '1:1'
            const goodRoute = `/search/passage/${book}${chapterVerse}`
            const fullTitle = `${bibleDetails[book].book} ${chapterVerse}`

            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ text: fakeText })
                })
            );

            const history = createMemoryHistory()
            history.push(goodRoute)

            const { getByText, getByTestId } = renderWithRouter(
                <Search
                    bibleVersion={BIBLE_VERSION}
                    bibleDetails={bibleDetails}
                />,
                {
                    route: goodRoute,
                    path: ROUTES.SEARCH_WITH_PARAMS,
                    history
                })
            expect(getByText('Search result')).toBeInTheDocument()
            expect(getByTestId('verseCardTitle')).toHaveTextContent(fullTitle)
            await waitForElementToBeRemoved(() => getByTestId('loadingSpinner'))
            expect(await waitForElement(() => getByText(fakeText))).toBeInTheDocument()
            expect(getByTestId('verseCardReadMore')).not.toHaveClass('Mui-disabled')

        })

    })


})
