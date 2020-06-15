const verseToPassageParam = (verseRef) => {
    if (!verseRef) return null
    return verseRef.replace(/\s/g, '')
}

const getReadMoreUrl = (verseRef, bibleVersion) =>
    `https://biblia.com/books/${bibleVersion.toLowerCase()}/${verseToPassageParam(verseRef)}`


const getPassage = (verseRef, BIBLE_VERSION) => {
    const passageParam = verseToPassageParam(verseRef)
    const apiCall = `https://api.biblia.com/v1/bible/content/${BIBLE_VERSION}.json?passage=${passageParam}&key=${process.env.REACT_APP_BIBLIA_API_KEY}`
    return fetch(apiCall)
        .then(res => {
            if (!res.ok) throw new Error(res.statusText)
            return res.json()
        })
}

export default {
    verseToPassageParam,
    getPassage,
    getReadMoreUrl,
}