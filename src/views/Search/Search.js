import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function Search() {

    const { searchString, searchType } = useParams()
    const history = useHistory()

    if (searchType !== 'passage') return <h1>Invalid url {searchType}</h1>

    console.log(searchString)
    console.log(history.location.state)

    return (
        <div>
            <h1>Search for {searchString}</h1>
        </div>
    )
}

export default Search
