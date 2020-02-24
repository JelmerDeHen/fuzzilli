function main() {
try {
    const v2 = Function("arguments",Function);
    // v2 = .unknown
} catch(v3) {
}
}
%NeverOptimizeFunction(main);
main();
