function main() {
let v1 = 1337;
for (const v3 in "object") {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    let v14 = 0;
    do {
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
    } while (v14 < 3);
    const v17 = v1.constructor;
    // v17 = .unknown
    for (const v18 in "replace") {
    }
}
}
%NeverOptimizeFunction(main);
main();
