import React, { useEffect, useState } from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles } from '@material-ui/core'

const BIBLE_VERSION = 'LEB'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: `${7 / 8}rem`,
    }
}))

console.log(process.env)

function VerseCard({ verseRef }) {

    const [passage, setPassage] = useState("")
    const classes = useStyles()

    const verseToPassageParam = (verseRef) => {
        return verseRef.replace(/\s/g, '')
    }

    useEffect(() => {
        const passageParam = verseToPassageParam(verseRef)
        const apiCall = `https://api.biblia.com/v1/bible/content/${BIBLE_VERSION}.json?passage=${passageParam}&key=${process.env.REACT_APP_BIBLIA_API_KEY}`

        fetch(apiCall)
            .then(res => res.json())
            .then(res => {
                setPassage(res.text)
            })

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
                <Typography variant="body1" component="p">
                    {passage}
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