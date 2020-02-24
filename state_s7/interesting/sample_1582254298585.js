function main() {
let v87 = 0;
const v88 = v87 + 1;
// v88 = .primitive
v87 = v88;
const v141 = new Object();
// v141 = .object()
}
%NeverOptimizeFunction(main);
main();
