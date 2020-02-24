function main() {
const v2 = Math.cos(-9007199254740993);
// v2 = .number
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
let v10 = 0;
v5 = v6;
}
%NeverOptimizeFunction(main);
main();
