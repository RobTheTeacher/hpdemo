import {NavLink} from 'react-router-dom'

const Book = ({book, fullSummary}) => {
    return (
        <NavLink to ={`/books/${book.id}`}>
            <h2>{book.attributes.title}</h2>
           {fullSummary && <p>{book.attributes.summary}</p> }

        </NavLink>
    )
}

export default Book