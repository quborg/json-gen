/*
 * Editor React component
 */
export const Editor = ({editor, onChange}) =>
  <div className='w-100 pt3 pb4 ph4 bg-black-05 mr0 mr3-ns'>
    <header className='f3 light-pink b tc'>Editor</header>
    <textarea data-editor
      className='mt3 pa2 pl5 mid-gray f5 b br2 bw-1 b--dotted ma0 pa0 overflow-auto'
      value={editor}
      onChange={({target}) => onChange(target)}
    />
  </div>
;
