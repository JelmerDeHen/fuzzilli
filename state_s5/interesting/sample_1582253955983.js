function main() {
let v71 = 0;
const v72 = "undefined" && 1607264097;
// v72 = .boolean
const v73 = v71 + 1;
// v73 = .primitive
v71 = v73;
}
%NeverOptimizeFunction(main);
main();
