//入力を考える関数
function main(input: string) {
  // ここに処理を書く
  let N: string = input.split('\n')[0];
  let N_number: number = +N;
  console.log(N);

  let A: string = input.split('\n')[1];
  let A_number: number = +A;
  console.log(A);

  let B: string = input.split('\n')[2];
  let B_number: number = +B;
  console.log(B);

  //格桁の総和を求める
  function sum_digit_number(X: number): number {
    let remainder: number = 0;
    X = 0;

    while (X > 0) {
      remainder += X % 10;
      X /= 10;
    }
    let sum = remainder;
    return sum;
  }

  function sum_main(
    N_number: number,
    A_number: number,
    B_number: number
  ): void {
    let ans_total_number: number = 0;
    for (let i = 1; i <= N_number; ++i) {
      let sum = sum_digit_number(i);
      if (sum >= A_number && sum <= B_number) {
        ans_total_number += i;
      }
    }
    return console.log(ans_total_number);
  }
}
main(require('fs').readFileSync('input_file/file_5.txt', 'utf8'));
