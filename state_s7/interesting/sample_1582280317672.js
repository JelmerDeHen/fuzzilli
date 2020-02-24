function main() {
for (const v2 in "boolean") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        for (const v8 in "boolean") {
            let v9 = 13.37;
            for (const v11 in "object") {
            }
            const v12 = v9 + 1;
            // v12 = .primitive
            const v13 = v12 * v6;
            // v13 = .number
        }
    }
    const v15 = v3(2600425381);
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
