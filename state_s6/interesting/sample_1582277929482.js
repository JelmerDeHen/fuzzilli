function main() {
let v4 = 0;
const v5 = Math + 1;
// v5 = .primitive
v4 = v5;
const v6 = Math.atan2(v4,13.37);
// v6 = .number
}
%NeverOptimizeFunction(main);
main();
