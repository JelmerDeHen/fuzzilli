function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    function v12(v13,v14) {
        const v15 = v13 in v12;
        // v15 = .boolean
        for (const v17 in "boolean") {
        }
    }
    const v19 = v12("name",-2397065686);
    // v19 = .unknown
    let v26 = 0;
    let v29 = 0;
    const v30 = v29 + 1;
    // v30 = .primitive
    v29 = v30;
    let v33 = 0;
    const v37 = v26 + 1;
    // v37 = .primitive
    v26 = v37;
}
}
%NeverOptimizeFunction(main);
main();
