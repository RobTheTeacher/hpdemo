import { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useLocation, useMatch, Outlet } from 'react-router-dom'
import Book from '../../components/Book'

const Books = () => {
    const books = useFetch('books')

    const onChildRoute = useMatch(
        '/books',
    ) ? "true" : false;

    // const API_ENDPOINT = "https://api.potterdb.com/v1/books"

    // const getBooks = async () => {
    //     try {
    //         let response = await fetch(API_ENDPOINT)
    //         let data = await response.json()
    //         setBooks(data.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getBooks()
    // }, [])

    return (
        <>
            <h1>Books Page</h1>
            {books && books.map((item, index) => <Book fullSummary={onChildRoute} book={item} />)}
            {<Outlet />}
        </>
    )
}

export default Books