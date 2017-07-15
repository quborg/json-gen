export const TextCleaner = (result) => {
  let queue = '';
  result
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => {
      !/^\/\//.test(line) &&
      line !== '' && (
        (
          (line.indexOf('//') !== -1) &&
          (line = line.split('//')[0])
        ),
        (queue += `${line} \n`)
      )
    })
  ;
  return queue;
}
