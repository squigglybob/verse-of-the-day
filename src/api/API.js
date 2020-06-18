const verseToPassageParam = (verseRef) => {
    if (!verseRef) return null
    return verseRef.replace(/\s/g, '')
}

const parseBibleRef = (string, bibleDetails) => {

    let passageTitle, book = undefined
    const searchParsed = string.match(/([1-9]?\s?[A-Z]\w+)(\d+):?(\d*)-?(\d*)/)

    if (!searchParsed) {
        passageTitle = string
        book = string
    } else {
        const [bookName, chapter, verseFrom, verseTo] = searchParsed.slice(1)
        const bookFullName = bibleDetails[bookName] ? bibleDetails[bookName].book : bookName
        passageTitle = `${bookFullName} ${chapter}${verseFrom !== '' ? ':' + verseFrom : ''}${verseTo !== '' ? '-' + verseTo : ''}`
        book = bookName
    }

    const isValidBook = book ? typeof bibleDetails[book] !== 'undefined' : false

    return { passageTitle, book, isValidBook }
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
    parseBibleRef,
    getPassage,
    getReadMoreUrl,
}