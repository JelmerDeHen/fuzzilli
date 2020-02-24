function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v9 = -2340774650;
            const v11 = v9 - 1;
            // v11 = .primitive
            const v12 = v11 - v5;
            // v12 = .number
            "object".__proto__ = v12;
            for (const v14 in "boolean") {
            }
        }
    }
    const v16 = v2(0);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
