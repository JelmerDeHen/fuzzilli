function main() {
let v28 = 0;
const v31 = v28 + 1;
// v31 = .primitive
v28 = v31;
const v39 = ~"object";
// v39 = .boolean
}
%NeverOptimizeFunction(main);
main();
