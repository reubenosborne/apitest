import React from 'react'
import { translateText } from '../apis/translate'

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: "",
      choice: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
    this.updateResult = this.updateResult.bind(this)
  }

  handleChange(e) {
    console.log("You're feeding my input!")
    this.setState({
      input: e.target.value,
      result: ''
    })
  }

  handleChoice(e) {
    console.log('You chose: ', e.target.value)
    this.setState({
      choice: e.target.value
    })

  }

  handleSubmit(e) {
    console.log("Nope, you're not submitting this time form!")
    e.preventDefault();

    console.log("Ooh, we're sending ", this.state.input, "and ", this.state.choice, " to the API!")
    translateText(this.state.input, this.state.choice, this.updateResult)

    console.log("Sure! I'll refresh the input for you.")
    this.refreshInput()
  }

  refreshInput() {
    this.setState({
      input: ""
    })
  }

  updateResult(result) {
    console.log("I'm giving ", result, " to the update result function.")
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <div className="container">
            <h1 className="title">Translate App</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="field">
                <label className="field-label">Choose a Character:</label>
                <input className="is-grouped" type="radio" id="yoda" name="voiceChoice" onChange={this.handleChoice} value="yoda" />
                <label htmlFor="yoda">Yoda</label>
                <input className="is-grouped" type="radio" id="pirate" name="voiceChoice" onChange={this.handleChoice} value="pirate" />
                <label htmlFor="pirate">Pirate</label>
                <input className="is-grouped" type="radio" id="groot" name="voiceChoice" onChange={this.handleChoice} value="groot" />
                <label htmlFor="groot">Groot</label>
                <input className="is-grouped" type="radio" id="oldenglish" name="voiceChoice" onChange={this.handleChoice} value="oldenglish" />
                <label htmlFor="oldenglish">Old English</label>
                <input className="is-grouped" type="radio" id="australian" name="voiceChoice" onChange={this.handleChoice} value="australian" />
                <label htmlFor="australian">Australian</label>
              </div>

              <div className="field is-horizontal">
                <input type="text" name="input" className="is-grouped input" onChange={this.handleChange} />
                <input type="submit" value="Submit" className="is-grouped button is-primary" />
              </div>
            </form></div>
        </section>
        <section className="container box" id="padT">
          {this.state.result}
        </section>
      </React.Fragment>
    );
  }

}

export default Input;