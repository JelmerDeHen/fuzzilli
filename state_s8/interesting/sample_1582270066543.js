function main() {
let v3 = 0;
const v4 = Math.atan2(v3,-303776.46538515715);
// v4 = .number
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
}
%NeverOptimizeFunction(main);
main();
