function main() {
const v2 = new Int8Array(536870912);
const v4 = v2.sort(parseFloat);
}
%NeverOptimizeFunction(main);
main();
