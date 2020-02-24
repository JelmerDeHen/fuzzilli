function main() {
const v3 = {toString:Set,c:1337};
// v3 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "toString"])
const v5 = [13.37,v3];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v5];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {b:v7,a:-3005878662,__proto__:1337};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b"])
let v11 = 0;
do {
    function v12(v13,v14) {
        const v16 = Math.sinh(v8);
        // v16 = .number
        const v19 = new Uint8Array(19873);
        // v19 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
        for (const v20 of v19) {
        }
        return v16;
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v23 = v22;
    const v24 = v12(v23);
    // v24 = .unknown
    const v25 = v11 + 1;
    // v25 = .primitive
    v11 = v25;
} while (v11 < 8);
}
%NeverOptimizeFunction(main);
main();
