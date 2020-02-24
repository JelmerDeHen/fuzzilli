function main() {
for (const v2 in "boolean") {
    const v3 = v2 / -65537;
    // v3 = .number
    delete v3[v3];
}
}
%NeverOptimizeFunction(main);
main();
