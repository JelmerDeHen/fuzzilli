function main() {
const v1 = Uint16Array + 1;
// v1 = .primitive
const v3 = Math.hypot(v1);
// v3 = .number
}
%NeverOptimizeFunction(main);
main();
