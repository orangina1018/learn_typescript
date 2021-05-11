function main(input) {
    // ここに処理を書く
    var A = input.split('\n')[0];
    var A_number = +A;
    console.log(A);
    var B = input.split('\n')[1];
    var B_number = +B;
    console.log(B);
    var C = input.split('\n')[2];
    var C_number = +C;
    console.log(C);
    var X = input.split('\n')[3];
    var X_number = +X;
    console.log(X);
    var count = 0;
    for (var a = 0; a <= A_number; ++a) {
        for (var b = 0; b <= B_number; ++b) {
            for (var c = 0; c <= C_number; ++c) {
                if (500 * a + 100 * b + 50 * c == X_number) {
                    count += 1;
                }
            }
        }
    }
    console.log(count);
}
main(require('fs').readFileSync('test4.txt', 'utf8'));
