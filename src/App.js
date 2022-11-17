import React, { Component} from 'react'


export default class App extends Component {
  // const [counter, setCounter] = useState(0);
  state = {
    count: 0
  }

  increase = () => {
    // setCounter (count => count + 1);
    this.setState({
      count: this.state.count + 1
    })
  };

  decrease = () => {
    // setCounter (count => count - 1);
    this.setState({
      count: this.state.count - 1
    })
  };

  reset = () => {
    this.setState({
      count: 0
    })
  };



  // handleChange = (e) => {
  //   // setNumber(e.target.value);
  //   this.setState({
  //     count: parseInt(e.target.value)
  //   })
  //   // let value = parseInt(e.target.value);
  //   // return value;
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.state(this.state.count + e)
    // this.setState({
    //   count: ''
    // })

    console.log(e.target[0].value, this.state.count);
    // this.setState({
    //   count: this.state.count + value
    // })
    this.setState({
      count: parseInt(e.target[0].value) + this.state.count
    })
    e.target[0].value = '';
  }

  render(){
  return (
    <div className='counter'>
      <h1>Let's Count!</h1>
      <span className='counter_output'>{this.state.count}</span>
      <div className="btn_container">
        <button className='control_btn' onClick={this.increase}>+</button>
        <button className='control_btn' onClick={this.decrease}>-</button>
        <button className='reset' onClick={this.reset}>Reset</button>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="" className='inputarea' >
          <input type="text" name="number" placeholder='Enter Number' onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className='submit'/>
      </form>
      <h2>This simple counter is designed for you to press the (+) and (-) buttons to keep track of whatever you'd like. Enter a custom number if you already have a number and would like to add or subtact from it. Reset it if you mess up or if you're done.</h2>
    </div>
  );
}
}
