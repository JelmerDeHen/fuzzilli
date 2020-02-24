function main() {
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
let v71 = 0;
const v72 = v71 + 1;
// v72 = .primitive
v71 = v72;
const v76 = 4294967297 & 6;
// v76 = .integer
}
%NeverOptimizeFunction(main);
main();
