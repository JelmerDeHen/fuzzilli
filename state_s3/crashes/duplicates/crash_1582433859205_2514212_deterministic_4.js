function main() {
const v2 = new Uint8ClampedArray(536870912);
const v3 = v2.sort(Uint8ClampedArray);
}
%NeverOptimizeFunction(main);
main();
