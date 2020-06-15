import React, { useMemo } from 'react'

import { FormControl, FormLabel, Select, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}))

const getBookOptions = (bookDetails) => {
    const bookOptions = bookDetails.map((detail) => <option key={detail.abbr} value={detail.abbr}>{detail.book}</option>)
    return [(<option key="default" value="" defaultChecked ></option>), ...bookOptions]
}

function SearchBook({ value, onChange, bookDetails }) {

    const classes = useStyles()

    const bookOptions = useMemo(() => getBookOptions(bookDetails), [bookDetails])

    const onChangeSelect = (e) => {
        onChange(e.target.value)
    }

    return (
        <>
            <FormControl
                className={classes.root}
                required
            >
                <FormLabel>
                    Select Book
                </FormLabel>
                <Select
                    className={classes.root}
                    fullWidth
                    native
                    onChange={onChangeSelect}
                    value={value}
                >
                    {bookOptions}
                </Select>
            </FormControl>
        </>
    )
}

export default SearchBook
