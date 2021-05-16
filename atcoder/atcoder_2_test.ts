function main(input: string) {
  // ここに処理を書く
  let i: number = 0;
  if (input[0] == '1') {
    i += 1;
  }
  if (input[1] == '1') {
    i += 1;
  }
  if (input[2] == '1') {
    i += 1;
  }
  console.log(i);
}
main(require('fs').readFileSync('input_file/file_2.txt', 'utf8'));
