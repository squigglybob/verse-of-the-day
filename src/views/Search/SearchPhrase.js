import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Flex from 'components/common/Flex'
import API from 'api/API'
import {
    CircularProgress,
    Typography,
} from '@material-ui/core'
import VerseCard from 'components/Verse/VerseCard'

function SearchPhrase({
    bibleVersion,
    bibleDetails,
}) {

    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState(-1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { searchString } = useParams()

    useEffect(() => {

        API.getSearchResults(searchString, bibleVersion)
            .then((res) => {
                setResults(res.results)
                setTotalResults(res.resultCount)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [searchString, bibleVersion])

    if (loading) return (
        <Flex>
            <div>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    Getting results for {searchString}
                </Typography>
                <CircularProgress />
            </div>
        </Flex>
    )

    if (error) return (
        <Flex>
            <div>
                <VerseCard
                    title='No search results'
                    verseRef={searchString}
                    passage=''
                    bibleVersion={bibleVersion}
                    loading={loading}
                    error='Nothing found'
                />
            </div>
        </Flex>
    )

    return (
        <Flex>
            <div>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {totalResults} Result{totalResults > 1 ? 's' : ''} for {searchString}
                </Typography>
                {results && results.length > 0 && (
                    results.map(({ title, preview }, i) => (
                        <VerseCard
                            key={i}
                            title='Search result'
                            verseRef={title}
                            passage={preview}
                            loading={false}
                            bibleVersion={bibleVersion}
                        />
                    ))
                )}
            </div>
        </Flex>
    )
}

export default SearchPhrase
