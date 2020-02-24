function main() {
for (const v1 of "object") {
    let v4 = 0;
    const v5 = v4 + 1;
    // v5 = .primitive
    v4 = v5;
}
}
%NeverOptimizeFunction(main);
main();
