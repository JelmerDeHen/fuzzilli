function main() {
let v41 = 0;
do {
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
} while (v41 != 3);
}
%NeverOptimizeFunction(main);
main();
