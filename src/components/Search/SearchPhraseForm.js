import React, { useState, useEffect } from 'react'
import { DialogContent, DialogActions, Button } from '@material-ui/core'
import InputText from 'components/elements/InputText'
import { useHistory } from 'react-router-dom'

import * as ROUTES from 'constants/routes'

const INITIAL_FORM_DATA = {
    phrase: '',
    books: []
}

function SearchPhraseForm({
    bibleDetails,
    handleClose,
}) {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const history = useHistory()

    const onChangePhrase = (value) => {
        setFormData({
            ...formData,
            phrase: value,
        })
    }

    const handleSubmit = () => {
        setFormData(INITIAL_FORM_DATA)
        history.push(ROUTES.SEARCH)    
    }

    const handleCancel = () => {
        setFormData(INITIAL_FORM_DATA)
        handleClose()
    }

    const formValidated = false

    return (
        <>
            <form>
                <DialogContent>
                    <InputText
                        label='Search words'
                        placeholder='e.g. Bread of life'
                        value={formData.phrase}
                        onChange={onChangePhrase}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        disabled={!formValidated}
                    >OK</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </form>
        </>
    )
}

export default SearchPhraseForm
