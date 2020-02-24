function main() {
let v4 = "object";
const v5 = v4.lastIndexOf(v4,1);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();
