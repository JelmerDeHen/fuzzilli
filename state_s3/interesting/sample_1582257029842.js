function main() {
let v78 = 0;
const v79 = v78 + 1;
// v79 = .primitive
v78 = v79;
const v104 = 1337 >> 13.37;
// v104 = .integer
}
%NeverOptimizeFunction(main);
main();
