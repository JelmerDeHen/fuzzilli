function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            delete v20["unscopable"];
            const v21 = v17 - v10;
            // v21 = .number
            const v22 = "unscopable".padEnd(1337,v7);
            // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
