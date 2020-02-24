function main() {
let v1 = Number;
const v4 = new Uint8ClampedArray(536870912);
const v5 = v4.sort(v1);
}
%NeverOptimizeFunction(main);
main();
