function main() {
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
if (-0.0) {
} else {
}
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
}
%NeverOptimizeFunction(main);
main();
