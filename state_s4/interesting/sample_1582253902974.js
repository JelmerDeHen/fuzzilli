function main() {
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
}
%NeverOptimizeFunction(main);
main();
