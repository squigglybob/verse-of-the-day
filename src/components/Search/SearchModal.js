import React from 'react'
import { Dialog, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function SearchModal({ open, handleClose }) {

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                keepMounted
            >
                <IconButton onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </Dialog>
        </div>
    )
}

export default SearchModal
