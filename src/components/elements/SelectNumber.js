import React from 'react'
import classNames from 'classnames'
import { FormControl, FormLabel, Select, makeStyles, Grow } from '@material-ui/core'

const TRANSITION_TIMEOUT = 500

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    fullWidth: {
        width: '100%'
    }
}))

function* numberGenerator(from = 1, to) {
    let number = from

    while (number <= to) {
        yield number++
    }
}

function SelectNumber({ label, onChange, required = false, from, to }) {

    const classes = useStyles()

    const onChangeNumber = (e) => {
        onChange(e.target.value)
    }

    const numbers = [...numberGenerator(from, to)]

    const options = [
        (<option key="default" value={-1} defaultChecked></option>),
        ...numbers.map((number) => <option key={number}>{number}</option>)
    ]

    return (
        <>
            <Grow in timeout={TRANSITION_TIMEOUT} >
                <FormControl
                    className={classNames(classes.root, classes.fullWidth)}
                    required={required}
                >
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <Select
                        className={classes.fullWidth}
                        options={options}
                        fullWidth
                        native
                        onChange={onChangeNumber}
                    >
                        {options}
                    </Select>
                </FormControl>
            </Grow>
        </>
    )
}

export default SelectNumber
