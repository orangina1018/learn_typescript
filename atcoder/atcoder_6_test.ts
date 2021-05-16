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
  a_number.reverse();

  let alice_hand: number = 0;
  let bob_hand: number = 0;

  for (let i: number = 0; i <= a_number.length; i++) {
    if (i % 2 == 0) {
      alice_hand += a_number[i];
    } else {
      bob_hand += a_number[i];
    }
  }
  const left: number = alice_hand - bob_hand;
  console.log(left);
}
main(require('fs').readFileSync('input_file/file_6.txt', 'utf8'));
