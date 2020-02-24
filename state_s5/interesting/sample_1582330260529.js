function main() {
const v2 = [-4294967295,-4294967295,-4294967295,-4294967295,-4294967295];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [908420.1141405522,v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Float64Array(v3);
// v5 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
for (const v7 in "boolean") {
    function v8(v9,v10) {
        const v11 = v9 in v5;
        // v11 = .boolean
        for (const v13 in "boolean") {
            let v15 = 9007199254740991;
            for (const v17 in "object") {
            }
            const v18 = ~v15;
            // v18 = .boolean
            const v19 = v18 - v11;
            // v19 = .number
            const v20 = {a:v9,constructor:v19};
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a"])
        }
    }
    const v22 = v8(0);
    // v22 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
