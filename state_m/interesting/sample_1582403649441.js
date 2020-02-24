function main() {
let v1 = 0;
const v2 = ~v1;
// v2 = .boolean
let v5 = v2;
const v6 = Math.asin(v5,7);
// v6 = .number
const v7 = Math.cos(v6);
// v7 = .number
}
%NeverOptimizeFunction(main);
main();
