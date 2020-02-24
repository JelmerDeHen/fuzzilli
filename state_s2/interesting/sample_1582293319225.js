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
            const v12 = v3 - 1;
            // v12 = .primitive
            const v13 = v12 << v5;
            // v13 = .integer
        }
    }
    const v16 = v2(0);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
