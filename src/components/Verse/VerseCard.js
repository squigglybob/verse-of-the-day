import React from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles, CircularProgress } from '@material-ui/core'
import moment from 'moment'
import API from 'api/API'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    title: {
        fontSize: `${7 / 8}rem`,
    }
}))

function VerseCard({ verseOfTheDay = false, bibleVersion, verseRef, passage, title, loading, error = null }) {

    const disabled = loading || error !== null
    
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom data-testid="verseCardTitle">
                    {verseOfTheDay ? moment().format('LL') : verseRef}
                </Typography>
                {verseOfTheDay && <Typography color="textSecondary" gutterBottom>
                    {verseRef}
                </Typography>}
                {loading ?
                    <CircularProgress data-testid="loadingSpinner"/> :
                    <Typography variant="body1" component="p">
                        {passage}
                    </Typography>
                }
                {error &&
                    <Typography variant="body1" component="p" color="error" data-testid="verseCardError">
                        Error: {error}
                    </Typography>
                }
            </CardContent>
            <CardActions>
                <Button href={API.getReadMoreUrl(verseRef, bibleVersion)} disabled={disabled} data-testid="verseCardReadMore">
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}

export default VerseCard