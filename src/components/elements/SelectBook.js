import React, { useMemo } from 'react'

import { FormControl, FormLabel, Select, makeStyles } from '@material-ui/core'

import bookDetails from 'data/bibleChaptersVerses.min.js'


const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}))

const getBookOptions = () => {
    const bookOptions = bookDetails.map((detail) => <option value={detail.abbr}>{detail.book}</option>)
    return [(<option value="" defaultChecked ></option>), ...bookOptions]
}

function SearchBook({ onChange }) {

    const classes = useStyles()

    const bookOptions = useMemo(() => getBookOptions(), [])

    const onChangeSelect = (e) => {
        onChange(e.target.value)
    }

    return (
        <>
            <FormControl className={classes.root}>
                <FormLabel>
                    Select Book
                </FormLabel>
                <Select
                    className={classes.root}
                    fullWidth
                    native
                    onChange={onChangeSelect}
                >
                    {bookOptions}
                </Select>
            </FormControl>
        </>
    )
}

export default SearchBook
