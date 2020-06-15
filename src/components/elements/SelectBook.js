import React, { useMemo } from 'react'

import { FormControl, FormLabel, Select, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
}))

const getBookOptions = (bibleDetails) => {
    const bookOptions = Object.entries(bibleDetails).map(([key, detail]) => <option key={detail.abbr} value={detail.abbr}>{detail.book}</option>)
    return [(<option key="default" value="" defaultChecked ></option>), ...bookOptions]
}

function SelectBook({ value, onChange, bibleDetails }) {

    const classes = useStyles()

    const bookOptions = useMemo(() => getBookOptions(bibleDetails), [bibleDetails])

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

export default SelectBook
