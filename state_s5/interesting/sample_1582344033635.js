function main() {
let v2 = 0;
do {
    const v4 = Math.sinh(v2);
    // v4 = .number
    const v5 = v2 + 1;
    // v5 = .primitive
    v2 = v5;
} while (v2 < 4096);
}
%NeverOptimizeFunction(main);
main();
