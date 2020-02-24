function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            for (const v11 in "object") {
                for (const v13 in "boolean") {
                }
            }
        }
    }
    const v15 = v2(0);
    // v15 = .unknown
}
let v19 = 0;
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
