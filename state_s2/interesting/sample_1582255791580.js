function main() {
try {
    const v1 = (1)();
    // v1 = .unknown
} catch(v2) {
}
}
%NeverOptimizeFunction(main);
main();
