import React, { Component }  from 'react'

// This components is for building each shelf book by taking a list item and populate it with the book info then 
// build the <ol> of all books in the shelf or at the search page to render the books
// At backgroundImage i check for image link if it's not avaliable then it's given empty string "" to show white cover to the book
// At authors name i check for it and if it's not avaliable then it's set to "Author Not Found"
// Every book shelf default value is set to "none" at the search page and when choosing a shelf it's assigned to the book.shelf 

class BookShelf extends Component {
    render() {
        const shelfBooks = this.props.books
        return(           
              <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks.map( book => (
                            <li key={book.id} shelf={book.shelf}>
                             <div className="book">
                               <div className="book-top">
                                 <div className="book-cover" style={{ width: 128, height: 193,
                                   backgroundImage: `url('${ book.imageLinks? book.imageLinks.thumbnail :""}')`}}>
                                 </div> 
                                 <div className="book-shelf-changer">
                                   <select defaultValue={book.shelf ? book.shelf : "none"}  onChange={(e)=>this.props.handleShelfUpdate(book,e.target.value)}>
                                     <option value="move" disabled>Move to...</option>
                                     <option value="currentlyReading">Currently Reading</option>
                                     <option value="wantToRead">Want to Read</option>
                                     <option value="read">Read</option>
                                     <option value="none">None</option>
                                   </select>
                                 </div>

                               </div>
                               <div className="book-title">{book.title}</div>
                               <div className="book-authors">{book.authors ? book.authors : "Author Not Found"}</div>
                             </div>
                           </li>
                          ))}                                          
                    </ol>
                  </div>
                </div>   
            )}}   

export default BookShelf   