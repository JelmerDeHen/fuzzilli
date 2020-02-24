function main() {
for (const v2 in "POSITIVE_INFINITY") {
    const v3 = Math.tanh(v2);
    // v3 = .number
}
}
%NeverOptimizeFunction(main);
main();
