import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <Link className="btn btn-danger" to="/board/new">Create New Board</Link>
        <Link className="btn btn-primary" to={`/board/${boardId}`}>Single Board Page</Link>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}

export default Home;
