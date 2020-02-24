function main() {
for (const v2 in "boolean") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        const v7 = v6 == v6;
        // v7 = .boolean
        for (const v9 in "boolean") {
            for (const v11 in "object") {
            }
        }
    }
    const v13 = v3(0);
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
