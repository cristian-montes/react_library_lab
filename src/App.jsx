import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Header from './components/header/Header'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
          <Home />
          <BookList />
        </Switch>
      </Router>
    </main>
  )
}

export default App
