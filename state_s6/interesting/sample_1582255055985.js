function main() {
const v3 = Math.atanh(13.37);
// v3 = .number
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();
