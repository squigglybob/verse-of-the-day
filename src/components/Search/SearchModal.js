import React from 'react'

import { Dialog, IconButton, DialogTitle, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchPassageForm from './SearchPassageForm'



const useStyles = makeStyles(() => ({
    label: {
        justifyContent: 'flex-end'
    },
}))

function SearchModal({ open, handleClose, bibleDetails }) {

    const classes = useStyles()

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                keepMounted
            >
                <IconButton
                    onClick={handleClose}
                    aria-label="close"
                    className={classes.label}
                >
                    <CloseIcon />
                </IconButton>
                <DialogTitle>
                    Search
                </DialogTitle>
                <SearchPassageForm
                    bibleDetails={bibleDetails}
                    handleClose={handleClose}
                    
                />

            </Dialog>
        </div>
    )
}

export default SearchModal
