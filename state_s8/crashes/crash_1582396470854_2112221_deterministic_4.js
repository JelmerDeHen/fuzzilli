function main() {
const v3 = new Uint8ClampedArray(536870912);
const v4 = v3.sort(Object);
}
%NeverOptimizeFunction(main);
main();
