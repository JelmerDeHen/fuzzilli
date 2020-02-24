function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = Math.atan2(v3,-0.0);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
