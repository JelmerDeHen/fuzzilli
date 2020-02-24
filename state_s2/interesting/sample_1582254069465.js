function main() {
const v4 = "number".includes();
// v4 = .boolean
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
