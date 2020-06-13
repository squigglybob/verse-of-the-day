import React from 'react'
import { Typography, Card, CardContent, Button, CardActions, makeStyles } from '@material-ui/core'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: `${7 / 8}rem`,
    }
}))

function VerseCard({ verseRef, passage, title }) {

    const classes = useStyles()

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