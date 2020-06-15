import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import API from 'api/API'
import Flex from 'components/common/Flex'
import VerseCard from 'components/Verse/VerseCard'

function Search({ bibleVersion, bibleDetails }) {

    const [passage, setPassage] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const { searchString, searchType } = useParams()
    const history = useHistory()
    const { book, chapter, verseFrom, verseTo } = history.location.state

    const validSearchType = ['passage'].includes(searchType)

    const bookFullName = bibleDetails[book].book
    const passageTitle = `${bookFullName} ${chapter}${verseFrom > 0 ? ':' + verseFrom : ''}${verseTo > -1 ? '-'+ verseTo : ''}`

    useEffect(() => {
        if (validSearchType) {
            API.getPassage(searchString, bibleVersion)
            .then(res => {
                setPassage(res.text)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }, [searchString, validSearchType, bibleVersion])

    if (!validSearchType) return <h1>Invalid url {searchType}</h1>

    return (
        <Flex>
            <div>
                <h1>Search for </h1>
                <VerseCard
                    title={`Search result`}
                    verseRef={passageTitle}
                    passage={passage}
                    bibleVersion={bibleVersion}
                    loading={loading}
                    error={error}
                />
            </div>
        </Flex>
    )
}

export default Search
