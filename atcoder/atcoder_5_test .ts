function main(input : string) {
    // ここに処理を書く
let N : string = input.split('\n')[0];
let N_number : number = +N
console.log(N);

let A : string = input.split('\n')[1];
let A_number : number = +A
console.log(A);

let B : string = input.split('\n')[2];
let B_number : number = +B
console.log(B);

let remainder : number = 0
let X : number = 0

while (X > 0){
    remainder += X % 10;
    X /= 10;
} 

for (let i = A; i < B+1; A++){
    
}


}
main(require('fs').readFileSync('test5.txt', 'utf8'));