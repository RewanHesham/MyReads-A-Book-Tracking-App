import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// This component builds the books shelves given the component BookShelf 
// The books recieved from the app.js state "allBooks" is filtered and assigned to the appropriate shelf
/* props of the filtered books are passed then to the "BookShelf" component to help assign each book the 
   shelf it's currently at throught "handleShelfUpdate" function*/

class BookShelves extends Component {
    render() {
        const allBooks= this.props.allBooks;
        const currentlyReading= allBooks.filter( book=> book.shelf === "currentlyReading")
        const wantToRead= allBooks.filter( book=> book.shelf === "wantToRead")
        const read= allBooks.filter( book=> book.shelf === "read")

        return(
            <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={currentlyReading} title={"Currently Reading"} handleShelfUpdate={this.props.handleShelfUpdate} />
                    <BookShelf books={wantToRead} title={"Want To Read"} handleShelfUpdate={this.props.handleShelfUpdate} />
                    <BookShelf books={read} title={"Read"} handleShelfUpdate={this.props.handleShelfUpdate} />
                </div>
            </div>
            <div className="open-search">
                <div><Link to="/search">Add Book</Link></div>
            </div>
            </div>
        )
    }
}
BookShelves.propTypes = {
    allBooks: PropTypes.array.isRequired,
}
export default BookShelves