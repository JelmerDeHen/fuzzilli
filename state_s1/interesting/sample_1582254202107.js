function main() {
let v3 = 0;
(3).length = 1024;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
}
%NeverOptimizeFunction(main);
main();
