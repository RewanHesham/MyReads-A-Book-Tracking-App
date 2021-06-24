# MyReads Project

## Description

    * This is a Bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
    * The main page displays a list of "shelves", each of which contains a number of books.
    * The user enter any search string the search input field to find a desired book.
    * Then all books which matches the string are displayed at the search page.
    * User can add the books to shelves on the home page of "Currently Reading", "Want to Read" or "Read".
    * User can move the books between shelves and any change is saved at home page and search results.
    * Any book can be removed from the shelves if the user choose shelf select to be none.
    * Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.
    
## Installation And Start
    * "npm install" to install the dependencies of the project.
    * "npm start" to launch the project.
  
## Table of Contents

   ### package.json file:
   
    *The file includes the main features of the webpage and all the npm scripts Dependencies (dev dependencies & general dependencies) and App 
    information (name, version, license, etc..).
    *It also includes the modes of build ( __test__, build-dev, build-prod, start).
       
   ### src folder:
   
   #### Components folder:
   ##### BookSearch Component:
    *Which search for books which matches the user's i/p at the search page and show the search results to the user.
    *Contains "handleChange" function take the query entered by the user then change the state query and pass the query   to "search" at "BooksAPI" which returns the books id which matches the search.
    *Then supdate the shelf of the book if the user change it. 
   ##### BookShelves Component:
    *This component builds the books shelves given the component BookShelf.
    *The books recieved from the app.js state "allBooks" is filtered and assigned to the appropriate shelf.
    *Props of the filtered books are passed then to the "BookShelf" component to help assign each book the 
    shelf it's currently at throught "handleShelfUpdate" function.
   ##### BookShelf Component:
    *This components is for building each shelf book by taking a list item and populate it with the book info then build the <ol> of all books in the shelf or at the search page to render the books.
    * Every book shelf default value is set to "none" at the search page and when choosing a shelf it's assigned to the "book.shelf".
    *"onChange" at the "select" component run the "handleShelfUpdate" function which updates the shelf value with the current choosen value by the user.

   #### index.js file: 
    *Import all the files needed by the app and renders the "App" componets which includes all the components mentioned before.
    *Import the Browser Router which listen to the URL changes in the app to render the correct route page.
       
   #### icons folder:
    *Contains the icons used in the page.

   #### App.js file:
    *This file has the main component of the page which renders inside all other components.
    *"BooksApp" component handles the routing between home page and search page
    *It inclused "componentDidMount" function which gets all the books from the server and setstate of  "books" with the recieved data
    *It includes "handleShelfUpdate" function which controls the change of books shelves, moving books to new shelves and removing books from the shelves.

   #### App.css & index.css files:
    *Contains the style of the app components for each class.

   #### BookAPI.js:
    *This is Backend Server contains the methods needed to perform necessary operations on the backend.
## Used Languages
    *HTML
    *JavaScript
    *CSS
    *JSX  
