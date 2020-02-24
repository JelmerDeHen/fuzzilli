function main() {
let v2 = gc;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    v2 = v3;
} while (v2 < 3);
}
%NeverOptimizeFunction(main);
main();
