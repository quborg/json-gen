/*
 * Demo React component
 */
export default class Sample extends React.Component {

  state = {
    show: false
  }

  render = () => <div>
    <span
      id='btn'
      className='f5 moon-gray hover-white ba b--moon-gray hover-b--white br4 ph3 pointer'
      onClick={() => this.setState({show: true})}>
      sample
    </span>
    <span
      id="show"
      className={this.state.show}>
      <span id="close" role='button' onClick={() => this.setState({show: false})}>&#10006;</span>
      <textarea data-sample defaultValue={Fixtures.initialState} disabled/>
    </span>
  </div>

}
