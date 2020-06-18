import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Flex from 'components/common/Flex'
import API from 'api/API'
import {
    CircularProgress,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core'
import VerseCard from 'components/Verse/VerseCard'

const useStyles = makeStyles((theme) => ({
    error: {
        color: 'red',
    },
    readMore: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    }
}))

const RESULTS_PER_PAGE = 10
function SearchPhrase({
    bibleVersion,
}) {

    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState(-1)
    const [loading, setLoading] = useState(true)
    const [loadingMoreResults, setLoadingMoreResults] = useState(false)
    const [error, setError] = useState(null)
    const [moreResultsError, setMoreResultsError] = useState(null)
    const [start, setStart] = useState(0)

    const { searchString } = useParams()
    const classes = useStyles()

    const loadingMore = start > 0

    useEffect(() => {

        if (loadingMore) return
        API.getSearchResults({ phrase: searchString, bibleVersion, start, limit: RESULTS_PER_PAGE })
            .then((res) => {
                setResults(oldResults => (res.results))
                setTotalResults(res.resultCount)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [searchString, bibleVersion, start, loadingMore])

    const getMoreResults = () => {
        setLoadingMoreResults(true)
        const newStart = start + RESULTS_PER_PAGE
        API.getSearchResults({
            phrase: searchString,
            bibleVersion,
            start: newStart,
            limit: RESULTS_PER_PAGE
        })
            .then((res) => {
                setResults([
                    ...results,
                    ...res.results,
                ])
                setStart(newStart)
            })
            .catch((error) => {
                setMoreResultsError(error.message)
            })
            .finally(() => {
                setLoadingMoreResults(false)
            })
    }

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
                    {totalResults > 0 ? totalResults : 'Lots of'} Result{totalResults !== 1 ? 's' : ''} for {searchString}
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
                {moreResultsError && (
                    <p className={classes.error}>
                        {moreResultsError}
                    </p>
                )}

                <div className={classes.readMore}>
                    <Button
                        onClick={getMoreResults}
                        disabled={loadingMoreResults}
                    >
                        Get more Results
                    </Button>
                    {loadingMoreResults && <CircularProgress />}
                </div>
            </div>
        </Flex>
    )
}

export default SearchPhrase
