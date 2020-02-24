function main() {
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
const v47 = (1024).toString();
// v47 = .unknown
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
}
%NeverOptimizeFunction(main);
main();
