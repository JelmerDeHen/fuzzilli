function main() {
const v4 = Math.log2(1);
// v4 = .number
let v7 = 0;
let v11 = 2147483648;
let v14 = 0;
const v15 = v7 + 1;
// v15 = .primitive
v7 = v15;
}
%NeverOptimizeFunction(main);
main();
