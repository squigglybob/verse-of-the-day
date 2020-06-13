import React, { useEffect, useState } from 'react'
import VerseCard from 'components/Verse/VerseCard'
import moment from 'moment'

import verses from 'data/366verses.js'

const BIBLE_VERSION = 'LEB'

export default function VerseOfTheDay() {

    const [passage, setPassage] = useState("")
    const [dayOfYear, setDayOfYear] = useState(moment().dayOfYear())
    const [verseRef, setVerseRef] = useState(verses[dayOfYear-1])

    const verseToPassageParam = (verseRef) => {
        if (!verseRef) return null
        return verseRef.replace(/\s/g, '')
    }

    useEffect(() => {
        setVerseRef(verses[dayOfYear-1])
    }, [dayOfYear])

    useEffect(() => {
        const passageParam = verseToPassageParam(verseRef)
        const apiCall = `https://api.biblia.com/v1/bible/content/${BIBLE_VERSION}.json?passage=${passageParam}&key=${process.env.REACT_APP_BIBLIA_API_KEY}`

        fetch(apiCall)
            .then(res => res.json())
            .then(res => {
                setPassage(res.text)
            })
            .catch((error) => {
                alert(error)
            })

    }, [verseRef])

    return (
        <div>
            <input
                type="number"
                min="1"
                max="366"
                value={dayOfYear}
                onChange={(e) => { setDayOfYear(e.target.value) }}
            />
            <VerseCard
                title="Verse of the Day"
                verseRef={verseRef}
                passage={passage}
                bibleVersion={BIBLE_VERSION}
                verseToPassageParam={verseToPassageParam}
            />
        </div>
    )
}
