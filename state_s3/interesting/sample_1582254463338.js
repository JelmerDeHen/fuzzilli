function main() {
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
const v67 = 13.37 || 7;
// v67 = .boolean
}
%NeverOptimizeFunction(main);
main();
