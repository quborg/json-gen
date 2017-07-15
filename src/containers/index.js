import { Fixtures, Helpers } from 'jg-src';

/* JsonGenerator React component */
export default class JsonGenerator extends React.Component {

  state = {
    editor: Fixtures.initialState,
    result: '',
  }

  componentWillMount() {
    this.generate()
  }

  componentWillUpdate(nextProps, nextState) {
    (this.state.editor !== nextState.editor) &&
    this.generate(nextState.editor)
  }

  textareaHandler = ({target}) => {
    this.setState({ editor: target.value })
  }

  generate = (editor=this.state.editor) => {
    let result = editor;
    result = Helpers.JG_converter(result);
    this.setState({ result })
  }

  render() {
    const { editor, result } = this.state;
    return (
      <div className='cf'>
        <header className='f2 b white-80 bg-black-50 pv3 ph5 w-100'>JSON Generator</header>
        <main className='flex flex-column flex-row-ns content-around tl pv5 ph5 w-100'>
          <div className='w-100 pt3 pb4 ph4 bg-black-05 mr0 mr3-ns'>
            <header className='f3 light-pink b tc'>Editor</header>
            <textarea
              className='mt3 pa2 bg-white w-100 h-450 f5 b br2 bw-1 b--dotted ma0 pa0 overflow-auto'
              defaultValue={editor}
              onChange={this.textareaHandler}
            />
          </div>
          <div className='w-100 pv3 ph4 bg-black-05 ml0 ml3-ns'>
            <header className='f3 light-blue b tc'>Result</header>
            <div className='mt3 pa2 bg-white blue f6 code courier h-450'>
              <pre className='ma0'><code>{ result }</code></pre>
            </div>
          </div>
        </main>
        <footer className='w-100 pv2 ph3 f7 bg-white tc black-30'>
          { Fixtures.Credits }
        </footer>
      </div>
    );
  }

}
