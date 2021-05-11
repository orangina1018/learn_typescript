function main(input) {
    // ここに処理を書く
    var i = 0;
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
main(require('fs').readFileSync('test2.txt', 'utf8'));
