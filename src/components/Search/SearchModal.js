import React, { useState } from 'react'

import { Dialog, IconButton, DialogTitle, makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchPassageForm from './SearchPassageForm'
import ButtonBar from 'components/elements/ButtonBar'
import SearchPhraseForm from './SearchPhraseForm'



const useStyles = makeStyles(() => ({
    label: {
        justifyContent: 'flex-end'
    },
}))

const DEFAULT_SEARCHBY = 'passage'

function SearchModal({ open, handleClose, bibleDetails }) {

    const classes = useStyles()

    const [searchBy, setSearchBy] = useState(DEFAULT_SEARCHBY)
    const theme = useTheme()

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const searchByOptions = {
        'passage': {
            'text': 'passage',
            'onClick': () => setSearchBy('passage')
        },
        'phrase': {
            'text': 'phrase',
            'onClick': () => setSearchBy('phrase')
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                keepMounted
                fullScreen={fullScreen}
                maxWidth='sm'
                fullWidth={true}
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

                <ButtonBar
                    buttonDetails={searchByOptions}
                    defaultValue={DEFAULT_SEARCHBY}
                />

                {searchBy === 'passage' &&
                    <SearchPassageForm
                        bibleDetails={bibleDetails}
                        handleClose={handleClose}
                    />
                }
                {searchBy === 'phrase' &&
                    <SearchPhraseForm
                        bibleDetails={bibleDetails}
                        handleClose={handleClose}
                    />
                }
            </Dialog>
        </div>
    )
}

export default SearchModal
