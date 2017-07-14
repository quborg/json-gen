export const TextCleaner = (result) => {
  let queue = '';
  result
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => {
      !/^\/\//.test(line) &&
      line !== '' &&
      (queue += `${line} \n`)
    })
  ;
  return queue;
}
