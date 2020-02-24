function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.constructor = RegExp;
}
%NeverOptimizeFunction(main);
main();
