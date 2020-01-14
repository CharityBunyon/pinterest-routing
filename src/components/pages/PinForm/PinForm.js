import React from 'react';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';
// import boardData from '../../../helpers/data/boardData';

import './PinForm.scss';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImg: '',
  }

  pinNameChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  pinImgChange = (e) => {
    e.preventDefault();
    this.setState({ pinImg: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImg,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from save pin', err));
  }

  render() {
    const { pinTitle, pinImg } = this.state;
    return (
        <form className="PinForm">
          <div className="form-group">
            <label htmlFor="pin-title">Pin Name</label>
            <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="Enter pin name"
            value= { pinTitle }
            onChange={ this.pinNameChange }
            />
            </div>
            <div>
            <label htmlFor="pin-description">Pin Url</label>
            <input
            type="text"
            className="form-control"
            id="pin-img"
            placeholder="Enter pin url"
            value= { pinImg }
            onChange={ this.pinImgChange }
            />
          </div>
          <button className="btn btn-danger" onClick={this.savePinEvent}>Save Pin</button>
        </form>
    );
  }
}

export default PinForm;
