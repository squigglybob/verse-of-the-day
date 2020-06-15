import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        height: '100vh',
    },
    center: {
        alignItems: 'center'
    }
}))

export default function Flex({ children, position }) {

    const classes = useStyles()
    
    return (
        <Container>
            <div className={classNames(classes.flex, {[classes.center]: position === 'center'})}>
                {children}
            </div>
        </Container>
    )
}
