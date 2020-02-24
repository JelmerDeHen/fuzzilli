function main() {
let v17 = 0;
do {
    const v23 = (13.37).toString();
    // v23 = .unknown
    const v25 = v17 + 1;
    // v25 = .primitive
    v17 = v25;
} while (v17 <= 3);
}
%NeverOptimizeFunction(main);
main();
