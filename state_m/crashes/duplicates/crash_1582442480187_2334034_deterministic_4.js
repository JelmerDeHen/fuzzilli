function main() {
let v1 = gc;
const v4 = new Int8Array(536870912);
const v5 = v4.sort(v1);
}
%NeverOptimizeFunction(main);
main();
