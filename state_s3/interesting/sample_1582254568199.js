function main() {
let v63 = 0;
const v64 = v63 + 1;
// v64 = .primitive
v63 = v64;
let v84 = 0;
const v91 = 100 & "symbol";
// v91 = .integer
}
%NeverOptimizeFunction(main);
main();
