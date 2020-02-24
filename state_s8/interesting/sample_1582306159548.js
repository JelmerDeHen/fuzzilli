function main() {
for (const v2 in "boolean") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        for (const v8 in "boolean") {
            let v10 = 9007199254740991;
            for (const v12 in "object") {
            }
            const v13 = ~v10;
            // v13 = .boolean
            const v14 = v13 - v6;
            // v14 = .number
            const v15 = {a:v4,constructor:v14};
            // v15 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__"])
        }
    }
    const v17 = v3(0);
    // v17 = .unknown
}
let v20 = 0;
}
%NeverOptimizeFunction(main);
main();
