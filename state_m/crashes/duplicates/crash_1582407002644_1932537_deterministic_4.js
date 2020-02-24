function main() {
const v3 = new Int8Array(414032354);
const v4 = v3.sort(isFinite);
}
%NeverOptimizeFunction(main);
main();
