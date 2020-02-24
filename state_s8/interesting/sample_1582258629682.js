function main() {
let v18 = undefined;
const v22 = v18 || v18;
// v22 = .boolean
}
%NeverOptimizeFunction(main);
main();
