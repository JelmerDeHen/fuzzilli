function main() {
let v2 = 0;
const v4 = v2 + 1;
// v4 = .primitive
v2 = v4;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
const v9 = Math.log(v7);
// v9 = .number
}
%NeverOptimizeFunction(main);
main();
