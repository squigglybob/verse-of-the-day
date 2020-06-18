import React from 'react'
import { useParams } from 'react-router-dom'
import Flex from 'components/common/Flex'

function SearchPhrase() {

    const { searchString } = useParams()

    // perform search for searchString using API

    return (
        <Flex>
            <div>
                {searchString}
            </div>
        </Flex>
    )
}

export default SearchPhrase
