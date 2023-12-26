// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isSelected: false,
  }

  onClickEmoji = () => {
    this.setState({isSelected: true})
  }

  renderQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <div>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-list">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emoji-name">{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank you!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="container">
        <div className="feedback-container">
          {isSelected ? this.renderThankyou() : this.renderQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
