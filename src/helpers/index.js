/* Clean Textarea value from empty lines and comments
 * Return an {Array} of {String} lines
 *
 * @result {String} textarea value
 */
export const TextCleaner = (result) => {
  let queue = [];
  result
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

/* Convert an {Array} of "=" based pair (key = value) to JSON String '{"key":"value"}'
 *
 * @array {Array} of OneOf [key, (key=value)}
 */
export const JsonString_Builder = (array) => {
  const step     = '  '
      , onOfpair = line => `"${line.trim().replace(' ','_')}"`
  ;
  let tree = step
    , string = '{\n'
  ;

  array.map(line => {
    const T = line.split('=');
    if (T.length===1)
      (string += `${tree}${onOfpair(T[0])}: {\n`),
      (tree += step)
    else
      string += `${tree}${onOfpair(T[0])}: ${onOfpair(T[1])},\n`
  })
  string += '}';
  return string;
}

/* Convert J-G Human simple syntax to a generic JSON
 *
 * @result {String} textarea value
 */
export const JG_converter = result => JsonString_Builder( TextCleaner(result) )
