function main() {
for (const v10 in "object") {
    const v12 = Object();
    // v12 = .object()
}
}
%NeverOptimizeFunction(main);
main();
