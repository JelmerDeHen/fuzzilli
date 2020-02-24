function main() {
let v2 = 635647037;
const v4 = new Int8Array(v2);
const v5 = v4.sort(Array);
}
%NeverOptimizeFunction(main);
main();
