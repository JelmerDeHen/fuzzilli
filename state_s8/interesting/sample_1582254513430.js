function main() {
const v21 = 13.37 * 1337;
// v21 = .number
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
}
%NeverOptimizeFunction(main);
main();
