function main() {
let v6 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
let v23 = 0;
const v24 = v17 << 0;
// v24 = .integer
const v25 = v23 + 1;
// v25 = .primitive
v23 = v25;
}
%NeverOptimizeFunction(main);
main();
