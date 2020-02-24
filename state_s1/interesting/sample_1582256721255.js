function main() {
for (const v1 in "object") {
    const v4 = Object.seal(Array);
    // v4 = .object()
}
}
%NeverOptimizeFunction(main);
main();
