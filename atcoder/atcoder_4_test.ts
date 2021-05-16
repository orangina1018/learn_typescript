function main(input: string) {
  // ここに処理を書く
  var A: string = input.split('\n')[0];
  var A_number: number = +A;
  console.log(A);

  var B: string = input.split('\n')[1];
  var B_number: number = +B;
  console.log(B);

  var C: string = input.split('\n')[2];
  var C_number: number = +C;
  console.log(C);

  var X: string = input.split('\n')[3];
  var X_number: number = +X;
  console.log(X);

  var count: number = 0;

  for (var a: number = 0; a <= A_number; ++a) {
    for (var b: number = 0; b <= B_number; ++b) {
      for (var c: number = 0; c <= C_number; ++c) {
        if (500 * a + 100 * b + 50 * c == X_number) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
}
main(require('fs').readFileSync('test4.txt', 'utf8'));
