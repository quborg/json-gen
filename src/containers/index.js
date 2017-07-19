import { Editor, Generic, Partials } from 'jg-src';

/* JsonGenerator React component */
export default class JsonGenerator extends React.Component {

  state = {
    editor: Fixtures.initialState,
    result: '{}',
    browserUpgrade: true
  }

  componentWillMount() {
    Helpers.testLS() ?
      localStorage.getItem('editor') &&
      this.setState({ editor:localStorage.getItem('editor') })
    : this.setState({ browserUpgrade: true })
    ;
    this.generate()
  }

  componentWillUpdate(nextProps, nextState) {
    (this.state.editor !== nextState.editor) &&
      this.generate(nextState.editor)
  }

  textareaHandler = ({value}) => {
    this.setState({ editor: value });
    Helpers.testLS() && localStorage.setItem('editor', value)
  }

  generate = (editor=this.state.editor) => {
    let result = Helpers.JG_converter(editor);
    this.setState({ result })
  }

  render() {
    const { editor, result, browserUpgrade } = this.state;
    const { Header, Main, Footer }           = Partials;

    return (
      <div className='cf'>
        <Header />
        { browserUpgrade && <Fixtures.BrowserUpgrade close={() => this.setState({browserUpgrade: false})} /> }
        <Main>
          <Editor editor={editor} onChange={this.textareaHandler} />
          <Generic result={result} />
        </Main>
        <Footer />
      </div>
    );
  }

}
