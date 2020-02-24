function main() {
const v14 = ~9007199254740993;
// v14 = .boolean
let v26 = 0;
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
const v31 = v26 + 1;
// v31 = .primitive
v26 = v31;
}
%NeverOptimizeFunction(main);
main();
