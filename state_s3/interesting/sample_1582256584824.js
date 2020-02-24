function main() {
let v7 = 0;
while (v7 < 8) {
    const v17 = v7 + 1;
    // v17 = .primitive
    v7 = v17;
    if (null) {
    } else {
    }
}
}
%NeverOptimizeFunction(main);
main();
