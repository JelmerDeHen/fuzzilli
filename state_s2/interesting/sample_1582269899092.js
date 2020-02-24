function main() {
let v3 = 0;
const v4 = ~v3;
// v4 = .boolean
v3 = v4;
const v5 = Math.atan2(v3,-303776.46538515715);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
