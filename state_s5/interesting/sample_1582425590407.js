function main() {
const v3 = Math.pow(13.37,-1);
// v3 = .number
let v5 = v3;
do {
    const v7 = Math.sinh(v5);
    // v7 = .number
    v5 = v7;
} while (v5 < 4096);
}
%NeverOptimizeFunction(main);
main();
