function main(input: string) {
  // ここに処理を書く
  var N_input: string = input.split('\n')[0];
  var N: number = +N_input;
  //console.log(N);
  var A: string[] = input.split('\n')[1].split(' ');
  var A_number: number[] = A.map(Number);
  //console.log(A);

  for (var i: number = 0; i < N; i++) {
    var count: number = 0;
    while (true) {
      var exist_odd_flg: boolean = false;
      for (var i: number = 0; i < N; i++) {
        if (A_number[i] % 2 != 0) {
          exist_odd_flg = true;
        }
      }

      if (exist_odd_flg == true) {
        break;
      }

      for (var i: number = 0; i < N; i++) {
        A_number[i] /= 2;
      }
      //console.log(A_number);
      count += 1;
    }
    console.log(count);
  }
}
main(require('fs').readFileSync('test3.txt', 'utf8'));
