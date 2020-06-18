import React, { useEffect, useState } from 'react'
import VerseCard from 'components/Verse/VerseCard'
import moment from 'moment'

import verses from 'data/366verses.js'

import API from 'api/API'
import Flex from 'components/common/Flex'
import { Button } from '@material-ui/core'

const DAYS_IN_A_YEAR = 366

export default function VerseOfTheDay({ bibleVersion }) {

    const [passage, setPassage] = useState("")
    const [dayOfYear, setDayOfYear] = useState(moment().dayOfYear())
    const [verseRef, setVerseRef] = useState(verses[dayOfYear - 1])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setVerseRef(verses[dayOfYear - 1])
    }, [dayOfYear])

    useEffect(() => {

        API.getPassage(verseRef, bibleVersion)
            .then(res => {
                setPassage(res.text)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [verseRef, bibleVersion])

    return (
        <Flex position='center'>
            <div>
                <VerseCard
                    verseOfTheDay={true}
                    title="Verse of the Day"
                    verseRef={verseRef}
                    passage={passage}
                    bibleVersion={bibleVersion}
                    loading={loading}
                    error={error}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={() => setDayOfYear(day => day > 1 ? day - 1 : DAYS_IN_A_YEAR)}>
                        Previous
                </Button>
                    <Button onClick={() => { setDayOfYear(day => day < DAYS_IN_A_YEAR ? day + 1 : 1) }}>
                        Next
                </Button>
                </div>
            </div>
        </Flex>
    )
}
