function main() {
let v1 = 1337;
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v12 = v1 instanceof Object;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
