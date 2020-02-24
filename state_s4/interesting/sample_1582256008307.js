function main() {
function v0(v1,v2) {
    let v13 = 0;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    do {
        const v21 = v13 + 1;
        // v21 = .primitive
        v13 = v21;
    } while (v13 < 3);
    for (const v23 in "object") {
    }
    return v13;
}
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v0();
    // v34 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
