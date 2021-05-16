function main(input: string) {
  // ここに処理を書く
  //console.log(input.split(' '))
  const input_number: string[] = input.split(' ');
  //console.log(input_number);

  const a: number = +input_number[0];
  const b: number = +input_number[1];

  let muluti: number = a * b;

  if (muluti % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
main(require('fs').readFileSync('test.txt', 'utf8'));
