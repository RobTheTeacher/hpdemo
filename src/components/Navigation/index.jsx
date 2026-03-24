import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/books">Books</NavLink>
            <NavLink to ="/about">About</NavLink>
        </nav>
    )
}

export default Navigation