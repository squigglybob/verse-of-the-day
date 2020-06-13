import React from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles, CircularProgress } from '@material-ui/core'
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: `${7 / 8}rem`,
    }
}))

function VerseCard({ bibleVersion, verseRef, passage, title, verseToPassageParam, loading, error }) {

    const classes = useStyles()

    const getReadMoreUrl = (verseRef) =>
        `https://biblia.com/books/${bibleVersion.toLowerCase()}/${verseToPassageParam(verseRef)}`

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {moment().format('LL')}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {verseRef}
                </Typography>
                {loading ?
                    <CircularProgress /> :
                    <Typography variant="body1" component="p">
                        {passage}
                    </Typography>
                }
                {error && 
                <Typography variant="body1" component="p" color="error">
                    Error: {error}
                </Typography>
                }
            </CardContent>
            <CardActions>
                <Button href={getReadMoreUrl(verseRef)} disabled={loading || error}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}

export default VerseCard