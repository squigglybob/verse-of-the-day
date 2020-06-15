import React, { useState, useEffect } from 'react'
import { Dialog, IconButton, DialogContent, DialogActions, Button, DialogTitle, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Flex from 'components/common/Flex'
import SelectBook from 'components/elements/SelectBook'
import SelectNumber from 'components/elements/SelectNumber'

import bookDetails from 'data/bibleChaptersVerses.min.js'

function getBookDetailLookup() {
    let bookDetailLookup = {}
    bookDetails.forEach((book) => {
        bookDetailLookup[book.abbr] = book
    })
    return bookDetailLookup
}

const bookDetailLookup = getBookDetailLookup()

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

function SearchModal({ open, handleClose }) {

    const classes = useStyles()

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const [numberOfChapters, setNumberOfChapters] = useState(-1)
    const [numberOfVerses, setNumberOfVerses] = useState(-1)

    // change number of chapters dependent on the book
    useEffect(() => {
        if (formData.book !== '') {
            const bookLength = bookDetailLookup[formData.book].chapters.length
            setNumberOfChapters(bookLength)
        }
    }, [formData.book])

    // change number of verses dependent on the chapter
    useEffect(() => {
        if (formData.book !== '' && formData.chapter > 0) {
            const book = bookDetailLookup[formData.book]
            const chapter = book.chapters[formData.chapter - 1]
            const chapterLength = parseInt(chapter.verses)
            setNumberOfVerses(chapterLength)
        }
    }, [formData.book, formData.chapter])

    const handleCancel = () => {
        setFormData(INITIAL_FORM_DATA)
        handleClose()
    }

    const handleSubmit = () => {
        setFormData(INITIAL_FORM_DATA)
        handleClose()
    }

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
                            bookDetails={bookDetails}
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
