import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import boardData from '../../../helpers/data/boardData';
import authData from '../../../helpers/data/authData';
import Board from '../../shared/Board/Board';

class Home extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('error from get boards', err));
  }

  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <FontAwesomeIcon icon={faCoffee} />
        <div className="boards d-flex flex-wrap">
          {this.state.boards.map((board) => <Board key={board.id} board={board} />)}
        </div>
      </div>
    );
  }
}

export default Home;
