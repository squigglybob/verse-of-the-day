import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        height: '100vh',
    },
}))

export default function Flex({ children }) {

    const classes = useStyles()

    return (
        <Container>
            <div className={classes.flex}>
                {children}
            </div>
        </Container>
    )
}
