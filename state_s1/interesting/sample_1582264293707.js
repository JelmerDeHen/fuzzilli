function main() {
const v7 = RegExp("boolean");
// v7 = .object()
v7.constructor = Uint8Array;
}
%NeverOptimizeFunction(main);
main();
