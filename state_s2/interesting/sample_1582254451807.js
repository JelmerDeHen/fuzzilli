function main() {
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = v14 + 1;
// v19 = .primitive
v14 = v19;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
const v24 = 127 / 1;
// v24 = .number
}
%NeverOptimizeFunction(main);
main();
