import React from "react"

export default class IndexPage extends React.Component {
  state = {
    name: "",
    company: "",
    phone: "",
    query: "",    
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Thank you ${this.state.name} your query has been submitted!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/></label>
        </div>
        <div>
          <label>Company<input type="text" name="company" value={this.state.company} onChange={this.handleInputChange}/></label>
        </div>
        <div>
          <label>Phone<input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange}/></label>
        </div>
        <div>
          <label>Query<input type="text" name="query" value={this.state.query} onChange={this.handleInputChange}/></label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    )
  }
}