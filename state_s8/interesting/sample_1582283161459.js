function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v10 = 0;
            while (v10 < 10) {
                const v11 = v10 + 1;
                // v11 = .primitive
                v10 = v11;
            }
            const v13 = v3 - 1;
            // v13 = .primitive
            const v14 = v13 - v5;
            // v14 = .number
            "object".__proto__ = v14;
            for (const v16 in "string") {
            }
        }
    }
    const v18 = v2(0);
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
