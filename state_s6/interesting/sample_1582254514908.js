function main() {
const v67 = 1337 == 13.37;
// v67 = .boolean
let v82 = 0;
const v83 = v82 + 1;
// v83 = .primitive
v82 = v83;
let v91 = 0;
const v93 = v91 + 1;
// v93 = .primitive
v91 = v93;
const v98 = Uint16Array << 7;
// v98 = .integer
}
%NeverOptimizeFunction(main);
main();
