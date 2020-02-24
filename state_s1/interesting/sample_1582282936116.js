function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v9 = -2340774650;
            let v12 = 0;
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
            let v16 = 0;
            while (v16 < 10) {
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            }
            const v19 = v9 - 1;
            // v19 = .primitive
            const v20 = v19 - v5;
            // v20 = .number
            "object".__proto__ = v20;
            for (const v22 in "boolean") {
            }
        }
    }
    const v24 = v2(0);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
