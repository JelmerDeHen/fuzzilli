function main() {
let v7 = 0;
const v8 = 0 | v7;
// v8 = .integer
let v21 = 0;
const v28 = v21 + 1;
// v28 = .primitive
v21 = v28;
}
%NeverOptimizeFunction(main);
main();
