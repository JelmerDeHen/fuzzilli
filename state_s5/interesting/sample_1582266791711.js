function main() {
let v3 = 0;
do {
    const v5 = Math.asinh(v3);
    // v5 = .number
    const v6 = v3 + 1;
    // v6 = .primitive
    v3 = v6;
} while (v3 < 4096);
}
%NeverOptimizeFunction(main);
main();
