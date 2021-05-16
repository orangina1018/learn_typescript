function main(input: string) {
  // ここに処理を書く
  let N: string = input.split('\n')[0];
  let N_number: number = +N;
  console.log(N);

  let a: string[] = input.split('\n')[1].split(' ');
  let a_number: number[] = a.map(Number);
  console.log(a);

  a_number.sort((x: number, y: number) => x - y);
  console.log(a_number);
}
main(require('fs').readFileSync('input_file/file_6.txt', 'utf8'));
