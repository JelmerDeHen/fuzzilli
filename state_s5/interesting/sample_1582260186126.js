function main() {
let v1 = 13.37;
let v3 = undefined;
let v7 = 0;
const v9 = Math.log2("boolean");
// v9 = .number
const v10 = v7 + 1;
// v10 = .primitive
v7 = v10;
}
%NeverOptimizeFunction(main);
main();
