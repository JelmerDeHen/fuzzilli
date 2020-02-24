function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v2 in "boolean") {
    function v3(v4,v5) {
        const v6 = v4 in v0;
        // v6 = .boolean
        for (const v8 in "boolean") {
            let v10 = -2340774650;
            const v12 = v10 - 1;
            // v12 = .primitive
            const v13 = v12 - v6;
            // v13 = .number
            "object".__proto__ = v13;
            for (const v15 in "boolean") {
            }
        }
    }
    const v17 = v3(0);
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
