function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = Math.atan2(v5,13.37);
// v7 = .number
}
%NeverOptimizeFunction(main);
main();
