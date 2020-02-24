function main() {
const v3 = new Int8Array(917832321);
const v4 = v3.sort(Object);
}
%NeverOptimizeFunction(main);
main();
