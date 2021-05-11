function main(input) {
    // ここに処理を書く
    var N_input = input.split('\n')[0];
    var N = +N_input;
    console.log(N);
    var A = input.split('\n')[1].split(' ');
    var A_number = A.map(Number);
    console.log(A);
    for (var i = 0; i < N; i++) {
        var count = 0;
        while (true) {
            var exist_odd_flg = false;
            for (var i = 0; i < N; i++) {
                if (A_number[i] % 2 != 0) {
                    exist_odd_flg = true;
                }
            }
            if (exist_odd_flg == true) {
                break;
            }
            for (var i = 0; i < N; i++) {
                A_number[i] /= 2;
            }
            console.log(A_number);
            count += 1;
        }
        console.log(count);
    }
}
main(require('fs').readFileSync('test3.txt', 'utf8'));
