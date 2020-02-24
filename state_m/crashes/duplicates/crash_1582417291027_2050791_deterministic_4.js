function main() {
const v3 = new Int32Array(252908200);
const v4 = v3.sort(eval);
}
%NeverOptimizeFunction(main);
main();
