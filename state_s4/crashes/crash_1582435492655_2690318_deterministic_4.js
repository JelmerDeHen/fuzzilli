function main() {
const v2 = new Int8Array(536870912);
const v4 = v2.slice();
const v5 = v4.sort(Object);
}
%NeverOptimizeFunction(main);
main();
