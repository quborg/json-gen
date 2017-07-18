/*
 * Json Generic React component
 */
export const Generic = ({ result }) =>
  <div className='w-100 pv3 ph4 bg-black-05 ml0 ml3-ns'>
    <header className='f3 light-blue b tc'>Result</header>
    <div className='mt3 blue f6 code courier'>
      <textarea
        disabled
        data-result
        className='ma0 pa2 pl3 bn blue'
        value={result}
      />
    </div>
  </div>
;
