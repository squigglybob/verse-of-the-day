import React from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles, CircularProgress } from '@material-ui/core'
import moment from 'moment'
import API from 'api/API'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: `${7 / 8}rem`,
    }
}))

function VerseCard({ verseOfTheDay, bibleVersion, verseRef, passage, title, loading, error }) {

    const classes = useStyles()

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {verseOfTheDay ? moment().format('LL') : verseRef}
                </Typography>
                {verseOfTheDay && <Typography color="textSecondary" gutterBottom>
                    {verseRef}
                </Typography>}
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
                <Button href={API.getReadMoreUrl(verseRef, bibleVersion)} disabled={loading || typeof error !== 'undefined'}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}

export default VerseCard