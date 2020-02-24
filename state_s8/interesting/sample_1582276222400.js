function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {__proto__:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
for (const v6 in "boolean") {
    function v7(v8,v9) {
        const v10 = v8 in v7;
        // v10 = .boolean
        for (const v12 in "boolean") {
            let v14 = 0;
            for (const v16 in "object") {
            }
            const v17 = ~v14;
            // v17 = .boolean
            const v20 = [1337];
            // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            delete v20["unscopable"];
            const v21 = v17 - v10;
            // v21 = .number
            const v22 = "unscopable".padEnd(1337,v7);
            // v22 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v23 = typeof v21;
            // v23 = .string
        }
    }
    const v24 = v7(v2);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
