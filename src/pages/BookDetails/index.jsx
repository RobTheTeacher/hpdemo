import {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import {useParams} from 'react-router-dom'

const BookDetails = () => {
    const {id} =  useParams()

    const book = useFetch(`books/${id}`)
 
    return (
        <div>
           {book && <h1>{book.attributes.title}</h1>}
        </div>
    )
}

export default BookDetails