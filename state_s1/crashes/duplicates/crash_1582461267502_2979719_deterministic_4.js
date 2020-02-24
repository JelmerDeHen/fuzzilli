function main() {
const v3 = new Int8Array(536870912);
const v4 = v3.sort(RegExp);
}
%NeverOptimizeFunction(main);
main();
