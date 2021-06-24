import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BookShelves from './Components/BookShelves'
import SearchBooks from './Components/BookSearch'
// This component renders all the app components and handles the routing between main page and search page
class BooksApp extends React.Component {
  state = {
    books: [],
  }
// This function gets all the books from the server and setstate of  "books" with the recieved data
  async componentDidMount(){
    try{ 
      const books = await BooksAPI.getAll()
      this.setState({ books: books })
    }catch(error){
       console.log(error)
      }
  }
  
// This function handle the update of book shelves given each book and shelf it's currently at then pass it to the "BookShelves" component
// If the book is found at a shelf of the books the user currently have at any shelf then it changes the shelf to the new one
// If the book is not found then it assign shelf to it and then move the book to it's new shelf then set the "books"state with the books alrady in it and the new book added
   handleShelfUpdate= async (book, shelf) => {
    await BooksAPI.update(book, shelf).then (res => {
      let found = false
      for(let i=0; i<this.state.books.length; i++){
        if(this.state.books[i].id === book.id){
          found=true
          break
        }
      }
      if(found){
        this.setState({
          books:this.state.books.map(b => {
            if(b.id === book.id) {
              b.shelf=shelf
            }
            return b
          })
        })
      }else{
        book.shelf=shelf
        this.setState({books : [...this.state.books,book] })
      }
    })
  }
// <Route> is used to handle the transition between the search page and the main page
// "BookShelves" component is rendered at the main page and passed the props of "books" state and "handleShelfUpdate" function
// "Searchbooks" component is rendered at the search page and passed the props of "books" state and "handleShelfUpdate" function
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
           <BookShelves allBooks={this.state.books} handleShelfUpdate={this.handleShelfUpdate}/>
        )} />
        <Route path='/search' render={() => (
           <SearchBooks allBooks={this.state.books} handleShelfUpdate={this.handleShelfUpdate}/>
        )} />
      </div>
    )
  }
}
export default BooksApp