import React, { useEffect } from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: `${7/8}rem`,
    }
}))

function VerseCard({ verseRef }) {

    const classes = useStyles()

    useEffect(() => {

        console.log(verseToPassageParam(verseRef))

    }, [verseRef])

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Verse of the Day
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {verseRef}
                </Typography>
                <Typography variant="body" component="p">
                    For God so loved the world that he gave his only begotten Son, that whoever believes in him will not perish but shall have eternal life.
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}

export default VerseCard

function verseToPassageParam(verseRef) {

    return verseRef.replace(/\s/g, '')
}