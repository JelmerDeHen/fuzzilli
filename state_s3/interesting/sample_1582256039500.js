function main() {
let v1 = 0;
let v2 = v1;
const v3 = v2.toLocaleString();
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
