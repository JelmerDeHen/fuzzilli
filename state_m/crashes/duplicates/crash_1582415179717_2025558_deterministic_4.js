function main() {
const v2 = new Uint8ClampedArray(536870912);
const v4 = v2.sort(isNaN);
}
%NeverOptimizeFunction(main);
main();
