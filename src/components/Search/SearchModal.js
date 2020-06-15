import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Dialog, IconButton, DialogContent, DialogActions, Button, DialogTitle, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import SelectBook from 'components/elements/SelectBook'
import SelectNumber from 'components/elements/SelectNumber'

import * as ROUTES from 'constants/routes'

const useStyles = makeStyles(() => ({
    fullWidth: {
        width: '100%',
    },
}))

const INITIAL_FORM_DATA = {
    book: '',
    chapter: -1,
    verseFrom: -1,
    verseTo: -1,
}

function SearchModal({ open, handleClose, bibleDetails }) {

    const classes = useStyles()
    const history = useHistory()

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const [numberOfChapters, setNumberOfChapters] = useState(-1)
    const [numberOfVerses, setNumberOfVerses] = useState(-1)

    // change number of chapters dependent on the book
    useEffect(() => {
        if (formData.book !== '') {
            const bookLength = bibleDetails[formData.book].chapters.length
            setNumberOfChapters(bookLength)
        }
    }, [formData.book, bibleDetails])

    // change number of verses dependent on the chapter
    useEffect(() => {
        if (formData.book !== '' && formData.chapter > 0) {
            const book = bibleDetails[formData.book]
            const chapter = book.chapters[formData.chapter - 1]
            const chapterLength = parseInt(chapter.verses)
            setNumberOfVerses(chapterLength)
        }
    }, [formData.book, formData.chapter, bibleDetails])

    const onChangeBook = (value) => {
        setFormData({
            ...INITIAL_FORM_DATA,
            'book': value
        })
    }

    const onChangeChapter = (value) => {
        setFormData({
            ...INITIAL_FORM_DATA,
            'book': formData.book,
            'chapter': parseInt(value)
        })
    }

    const onChangeVerseFrom = (value) => {
        setFormData({
            ...INITIAL_FORM_DATA,
            'book': formData.book,
            'chapter': formData.chapter,
            'verseFrom': parseInt(value)
        })
    }

    const onChangeVerseTo = (value) => {
        setFormData({
            ...INITIAL_FORM_DATA,
            'book': formData.book,
            'chapter': formData.chapter,
            'verseFrom': formData.verseFrom,
            'verseTo': parseInt(value)
        })
    }

    const formDataToPassage = ({ book, chapter, verseFrom, verseTo }) => `${book}${chapter}${verseFrom > 0 ? ':' + verseFrom : ''}${verseTo > 0 ? '-' + verseTo : ''}`

    const handleCancel = () => {
        setFormData(INITIAL_FORM_DATA)
        handleClose()
    }

    const handleSubmit = () => {
        handleClose()
        setFormData(INITIAL_FORM_DATA)
        history.push(ROUTES.SEARCH + '/passage/' + formDataToPassage(formData), { ...formData })
    }

    const formValidated = formData.book !== '' && formData.chapter > 0

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

                <form className={classes.fullWidth}>
                    <DialogContent>
                        <SelectBook
                            onChange={onChangeBook}
                            value={formData.book}
                            bibleDetails={bibleDetails}
                        />
                        {formData.book !== '' &&
                            <SelectNumber
                                label="Select Chapter"
                                from={1}
                                to={numberOfChapters}
                                onChange={onChangeChapter}
                                value={formData.chapter}
                                required
                            />
                        }
                        {formData.chapter > 0 &&
                            <SelectNumber
                                label="Select Verse (optional)"
                                from={1}
                                to={numberOfVerses}
                                onChange={onChangeVerseFrom}
                                value={formData.verseFrom}
                            />
                        }
                        {formData.verseFrom > 0 && formData.verseFrom !== numberOfVerses &&
                            <SelectNumber
                                label="Select Verse to finish on (optional)"
                                from={formData.verseFrom + 1}
                                to={numberOfVerses}
                                onChange={onChangeVerseTo}
                                value={formData.verseTo}
                            />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleSubmit}
                            disabled={!formValidated}
                        >OK</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default SearchModal
