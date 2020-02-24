function main() {
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
v12 = 13.37;
}
%NeverOptimizeFunction(main);
main();
