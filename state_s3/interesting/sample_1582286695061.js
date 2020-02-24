function main() {
try {
    const v2 = Function(Number);
    // v2 = .unknown
} catch(v3) {
}
}
%NeverOptimizeFunction(main);
main();
