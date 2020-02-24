function main() {
for (const v8 in "object") {
    const v9 = v8 - v8;
    // v9 = .number
}
}
%NeverOptimizeFunction(main);
main();
