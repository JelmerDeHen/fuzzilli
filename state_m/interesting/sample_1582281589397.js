function main() {
for (const v2 in "POSITIVE_INFINITY") {
    const v3 = v2 / 3784386562;
    // v3 = .number
    delete v3[v3];
}
}
%NeverOptimizeFunction(main);
main();
