function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            for (const v9 in "object") {
                for (const v10 in "boolean") {
                }
            }
        }
    }
    const v12 = v2(0);
    // v12 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
