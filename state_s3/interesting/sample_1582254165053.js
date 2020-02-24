function main() {
let v3 = Reflect;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    v3 = v4;
} while (v3 < 8);
}
%NeverOptimizeFunction(main);
main();
