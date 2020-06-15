import React from 'react'

import { FormControl, FormLabel, Select, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}))

function SearchBook({ label, onChange }) {

    const classes = useStyles()

    const onChangeSelect = (e) => {
        onChange(e.target.value)
    }

    return (
        <>
            <FormControl className={classes.root}>
                <FormLabel>
                    {label}
                </FormLabel>
                <Select
                    className={classes.root}
                    fullWidth
                    native
                    onChange={onChangeSelect}
                >
                    <option>Genesis</option>
                    <option>Exodus</option>
                    <option>Leviticus</option>
                </Select>
            </FormControl>
        </>
    )
}

export default SearchBook
