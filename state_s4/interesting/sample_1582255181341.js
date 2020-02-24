function main() {
try {
    const v3 = (1337)();
    // v3 = .unknown
} catch(v4) {
}
}
%NeverOptimizeFunction(main);
main();
