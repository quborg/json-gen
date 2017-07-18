/* Clean Textarea value from empty lines and comments
 * Return an {Array} of {String} lines
 *
 * @editor {String} textarea value
 */
export const TextCleaner = (editor) => {
  let queue = [];
  editor
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => {
      !/^\/\//.test(line) &&
      line !== '' && (
        queue.push(line.split('//')[0])
      )
    });
  return queue;
}

/*
 * Check LocalStorage Support
 */
export const testLS = () => {
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

/* Convert an {Array} of "=" based pair (key = value) to JSON String '{"key":"value"}'
 *
 * @array {Array} of OneOf [key, (key=value)}
 */
export const StringJson_Builder = (array) => {
  const step     = '  '
      , quoting  = line => `"${line.trim().replace(' ','_')}"`
      , plusStep = tree => tree + step
      , flipCut  = (str, n=2) => str.substring(0, str.length - n)
      , getTree  = line => line.match(/^\s*/)[0].length
  ;

  let T
    , root    = ''
    , tree    = step
    , string  = '{\n'
    , child   = false
    , mono    = false
  ;

  function lineFormat() {
    mono && child && (
      string += ' {\n',
      mono = false
    );
    T.length === 1 ?
      (
        string += `${tree}${quoting(T[0])}:`,
        mono = true
      )
    :
      (
        string += `${tree}${quoting(T[0])}: ${quoting(T[1])},\n`
      )
    ;
  }

  array.map(line => {
    T = line.split('=');
    child = getTree(line) > flipCut(tree).length;
    child && (tree = plusStep(tree));
    lineFormat();
    mono && (
      child ?
        string += `\n${tree}${quoting(T[0])}:,\n`
      :
        (
          tree = flipCut(tree),
          string += ' "",\n'
        )
    );

  })
  string += '}';
  return string;
}

/* Convert J-G Human simple syntax to a generic JSON
 *
 * @editor {String} textarea value
 */
export const JG_converter = editor => StringJson_Builder( TextCleaner(editor) )
