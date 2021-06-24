import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookShelf from './BookShelf'

// This component search for books at the search page and show the results to the user
/* "handleChange" function take the query entered by the user then change the state query and pass the query to 
  "search" at "BooksAPI" which returns the books id which matches the search*/
// Then map over the result of search and "allBooks " if they match to assign shelf to each one then sets "books" state with the resulted books from search

class SearchBooks extends Component {
  state = {
     query : '',
     books : []
   } 
  handleChange= async e => {
    try{
      const query = e.target.value
      this.setState({query})
      if(query.trim()){
        const results = await BooksAPI.search(query)
        if(results.error){
          this.setState({books:[]})
        }else{
          console.log(results)
          results.map(book=> {
            this.props.allBooks.map(b=> {
              if(book.id === b.id){
                book.shelf = b.shelf
              }
              return book
            }) 
            return book    
          })
          this.setState({books:results})
        }
      }else{
        this.setState({books:[]})
      } 
    }catch(error){
      console.log(error)
    }
  }
  // <Link> here is placed to go back to the home page from the search page
  // The books state is checked if it has books from the search result to then build the "BookShelf" component 
   render(){
     return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{this.state.books.length > 0 &&  <BookShelf books={this.state.books} handleShelfUpdate={this.props.handleShelfUpdate} /> }
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBooks