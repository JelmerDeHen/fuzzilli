function main() {
const v3 = new Int8Array(917832321);
const v4 = v3.slice();
const v5 = v4.sort(Promise);
}
%NeverOptimizeFunction(main);
main();
