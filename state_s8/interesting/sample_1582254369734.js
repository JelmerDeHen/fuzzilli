function main() {
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
let v98 = 0;
let v101 = 0;
let v104 = 0;
const v105 = v104 + 1;
// v105 = .primitive
v104 = v105;
let v112 = 0;
const v116 = v101 + 1;
// v116 = .primitive
v101 = v116;
const v117 = v98 + 1;
// v117 = .primitive
v98 = v117;
let v130 = 0;
const v131 = v130 + 1;
// v131 = .primitive
v130 = v131;
const v145 = 13.37 / 13.37;
// v145 = .number
}
%NeverOptimizeFunction(main);
main();
