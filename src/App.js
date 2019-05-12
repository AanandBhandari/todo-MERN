import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom'
import CreateTodo from './components/Create-todo.component'
import EditTodo from './components/Edit-todo.component'
import TodosList from './components/Todos-list.component'
import logo from './logo.png'

function App() {
  return (
    <Router>
      <div className="container">
        
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width='30' heigth = '30' alt='Codingthesmartway'/>
          </a>
          <Link to='/' className='navbar-brand'>MERN Stack Todo App</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>Todos</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/create' className='nav-link'>Create Todo</Link>
              </li>
            </ul>
          </div>
      </nav>

      <Route path='/' exact component = {TodosList}/>
      <Route path ='/edit/:id' component = {EditTodo}/>
      <Route path='/create' component = {CreateTodo}/>
      </div>
    </Router>
  );
}

export default App;
