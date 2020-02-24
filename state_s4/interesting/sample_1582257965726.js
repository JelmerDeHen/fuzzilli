function main() {
let v25 = 0;
let v26 = 0;
const v27 = v26 | v26;
// v27 = .integer
const v28 = v25 + 1;
// v28 = .primitive
v25 = v28;
}
%NeverOptimizeFunction(main);
main();
