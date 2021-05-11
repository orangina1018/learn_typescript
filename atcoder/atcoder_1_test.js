"use strict";
function main(input) {
    // ここに処理を書く
    console.log(input.split(' '));
    const input_number = input.split(' ');
    console.log(input_number);
    const a = +input_number[0];
    const b = +input_number[1];
    let muluti = a * b;
    if (muluti % 2 == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
main(require('fs').readFileSync('test.txt', 'utf8'));
