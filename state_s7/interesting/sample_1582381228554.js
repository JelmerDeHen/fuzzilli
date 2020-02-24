function main() {
try {
    const v1 = true();
    // v1 = .unknown
} catch(v2) {
}
}
%NeverOptimizeFunction(main);
main();
