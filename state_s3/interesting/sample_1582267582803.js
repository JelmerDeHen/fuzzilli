function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    const v13 = Function(3);
    // v13 = .unknown
    const v15 = gc();
    // v15 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
