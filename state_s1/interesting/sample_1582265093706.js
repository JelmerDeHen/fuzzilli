function main() {
let v33 = 0;
let v36 = 0;
const v62 = ~9007199254740993;
// v62 = .boolean
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
let v133 = 0;
const v135 = v133 + 1;
// v135 = .primitive
v133 = v135;
}
%NeverOptimizeFunction(main);
main();
