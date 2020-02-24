function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = 0 >> 13.37;
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
