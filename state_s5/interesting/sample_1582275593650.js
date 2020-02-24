function main() {
let v2 = "boolean";
v2 = v2;
const v3 = !2147483647;
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
