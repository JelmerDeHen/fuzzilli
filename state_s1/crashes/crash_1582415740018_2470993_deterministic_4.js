function main() {
const v3 = new Int8Array(536870912);
const v4 = v3.slice();
const v5 = v4.sort(Symbol);
}
%NeverOptimizeFunction(main);
main();
