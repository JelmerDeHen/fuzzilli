function main() {
try {
    const v1 = false();
    // v1 = .unknown
} catch(v2) {
}
}
%NeverOptimizeFunction(main);
main();
