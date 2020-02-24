function main() {
let v1 = gc;
const v2 = new v1();
// v2 = .object()
}
%NeverOptimizeFunction(main);
main();
