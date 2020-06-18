import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    buttonBar: {
        display: 'flex',
        justifyItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
    }
}))

function ButtonBar({ buttonDetails, defaultValue = '' }) {

    const classes = useStyles()

    const [value, setValue] = useState(defaultValue)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.buttonBar}>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
            >
                {Object.entries(buttonDetails).map(([key, { text, onClick }]) => (
                    <ToggleButton
                        value={text}
                        aria-label={text}
                        onClick={onClick}
                        key={text}
                        color='primary'
                    >
                        {text}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default ButtonBar

ButtonBar.propTypes = {
    buttonDetails: PropTypes.object,
    defaultValue: PropTypes.string,
}