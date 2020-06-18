import React from 'react'
import classNames from 'classnames'
import { FormControl, FormLabel, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    fullWidth: {
        width: '100%'
    }
}))

function InputText({
    label,
    placeholder,
    value,
    onChange,
}) {

    const classes = useStyles()

    return (
        <FormControl
            className={classNames(classes.root, classes.fullWidth)}
        >
            <FormLabel>
                {label}
            </FormLabel>
            <TextField
                className={classes.root}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </FormControl>
    )
}

export default InputText
