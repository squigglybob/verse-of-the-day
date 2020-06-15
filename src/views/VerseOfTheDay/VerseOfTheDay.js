import React, { useEffect, useState } from 'react'
import VerseCard from 'components/Verse/VerseCard'
import moment from 'moment'

import verses from 'data/366verses.js'

import API from 'api/API'
import Flex from 'components/common/Flex'

export default function VerseOfTheDay({ bibleVersion, bibleDetails }) {

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
                <input
                    type="number"
                    min="1"
                    max="366"
                    value={dayOfYear}
                    onChange={(e) => { setDayOfYear(e.target.value) }}
                />
                <VerseCard
                    verseOfTheDay={true}
                    title="Verse of the Day"
                    verseRef={verseRef}
                    passage={passage}
                    bibleVersion={bibleVersion}
                    loading={loading}
                    error={error}
                />
            </div>
        </Flex>
    )
}
