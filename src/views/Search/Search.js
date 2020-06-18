import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from 'api/API'
import Flex from 'components/common/Flex'
import VerseCard from 'components/Verse/VerseCard'

function Search({ bibleVersion, bibleDetails }) {

    const [passage, setPassage] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const { searchString, searchType } = useParams()

    const validSearchType = ['passage'].includes(searchType)

    const { passageTitle, book, isValidBook } = API.parseBibleRef(searchString, bibleDetails)

    useEffect(() => {
        if (!isValidBook) {
            setError(`Invalid Book ${book}`)
            setLoading(false)
            return
        }
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
    }, [searchString, validSearchType, bibleVersion, book, isValidBook])

    if (!validSearchType) return <h1>Invalid url {searchType}</h1>


    return (
        <Flex>
            <div>
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