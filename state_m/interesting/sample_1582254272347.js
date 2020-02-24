function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = parseInt("iterator");
// v6 = .integer
let v9 = 0;
}
%NeverOptimizeFunction(main);
main();
