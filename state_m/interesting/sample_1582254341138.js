function main() {
let v38 = 0;
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
const v61 = 4294967297 >> 4294967297;
// v61 = .integer
}
%NeverOptimizeFunction(main);
main();
