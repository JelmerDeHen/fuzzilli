function main() {
let v22 = 0;
do {
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
} while (v22 != 3);
}
%NeverOptimizeFunction(main);
main();
