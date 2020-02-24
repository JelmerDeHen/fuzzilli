function main() {
for (const v2 in "boolean") {
    let v5 = -2147483648;
    let v7 = undefined;
    const v8 = v5 * v5;
    // v8 = .number
    const v9 = Object(undefined);
    // v9 = .object()
    let v12 = 0;
    v9[v8] = v12;
}
}
%NeverOptimizeFunction(main);
main();
