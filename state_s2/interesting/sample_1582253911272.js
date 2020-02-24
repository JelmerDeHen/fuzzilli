function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
}
%NeverOptimizeFunction(main);
main();
