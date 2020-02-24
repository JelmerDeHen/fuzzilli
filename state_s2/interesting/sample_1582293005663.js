function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v8 = v5;
            let v11 = 0;
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
            const v14 = v8 - 1;
            // v14 = .primitive
            const v15 = v14 + v5;
            // v15 = .primitive
            "object".__proto__ = v15;
            for (const v17 in "boolean") {
            }
        }
    }
    const v19 = v2(0);
    // v19 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
