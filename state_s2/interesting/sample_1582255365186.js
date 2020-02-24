function main() {
const v2 = RegExp > "a";
// v2 = .boolean
let v5 = 0;
const v9 = v5 + 1;
// v9 = .primitive
v5 = v9;
}
%NeverOptimizeFunction(main);
main();
