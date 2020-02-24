function main() {
let v12 = 0;
do {
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
} while (v12 <= 3);
}
%NeverOptimizeFunction(main);
main();
