function main() {
for (let v11 = 0; v11 < 7; v11++) {
    const v12 = v11 * 7;
    // v12 = .number
}
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
let v58 = 0;
let v61 = 0;
let v64 = 0;
const v65 = v64 + 1;
// v65 = .primitive
v64 = v65;
const v66 = v61 + 1;
// v66 = .primitive
v61 = v66;
const v67 = v58 + 1;
// v67 = .primitive
v58 = v67;
}
%NeverOptimizeFunction(main);
main();
