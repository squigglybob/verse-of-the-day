import React from 'react'
import { Dialog, IconButton, DialogContent, DialogActions, Button, DialogTitle, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Flex from 'components/common/Flex'
import SelectBook from 'components/elements/SelectBook'

const useStyles = makeStyles(() => ({
    fullWidth: {
        width: '100%',
    },
}))

function SearchModal({ open, handleClose }) {

    const classes = useStyles()

    const handleCancel = () => {
        // clear form
        handleClose()
    }

    const handleSubmit = () => {
        console.log('submit form data')
        handleClose()
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                keepMounted
            >
                <IconButton onClick={handleCancel} aria-label="close" >
                    <CloseIcon />
                </IconButton>
                <DialogTitle>
                    Search for Passage
                </DialogTitle>

                <Flex>
                    <form className={classes.fullWidth}>
                        <DialogContent>
                            <SelectBook />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSubmit}>OK</Button>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </DialogActions>
                    </form>
                </Flex>
            </Dialog>
        </div>
    )
}

export default SearchModal
