function main() {
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v40 = v37 % v38;
// v40 = .number
}
%NeverOptimizeFunction(main);
main();
