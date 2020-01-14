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

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinTitle: pin.title, pinImg: pin.imageUrl });
        })
        .catch((err) => console.error('error with get single pin', err));
    }
  }

  pinNameChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  pinImgChange = (e) => {
    e.preventDefault();
    this.setState({ pinImg: e.target.value });
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId, pinId } = this.props.match.params;
    const editPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImg,
      uid: authData.getUid(),
      boardId,
    };
    pinData.editPin(pinId, editPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from edit pin', err));
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
    const { pinId } = this.props.match.params;
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
          { pinId
            ? <button className="btn btn-danger" onClick={this.editPinEvent}>Edit Pin</button>
            : <button className="btn btn-danger" onClick={this.savePinEvent}>Save Pin</button>
          }
        </form>
    );
  }
}

export default PinForm;
