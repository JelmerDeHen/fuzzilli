function main() {
let v32 = 0;
const v33 = "replace" + 1;
// v33 = .primitive
const v34 = v32 + 1;
// v34 = .primitive
v32 = v34;
}
%NeverOptimizeFunction(main);
main();
