function main() {
let v1 = 6;
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = new Int8Array("arguments");
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
const v8 = new Map(v6);
// v8 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["keys", "delete", "entries", "clear", "has", "get", "forEach", "values", "set"])
const v9 = v8.values(v6);
// v9 = .object()
function v10(v11,v12) {
    let v15 = 0;
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    const v19 = v18 < v15;
    // v19 = .boolean
    v9[v12] = v19;
    for (let v23 = 0; v23 < 9; v23++) {
        let v26 = 0;
        do {
            for (const v27 of v9) {
            }
            const v28 = v26 + 1;
            // v28 = .primitive
            v26 = v28;
        } while (v26 < 4);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v31 = v30;
const v32 = v10(v31);
// v32 = .unknown
const v35 = [v3,null,v3,1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v38 = new Int32Array(v35);
// v38 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v41 = v38.slice(-2847526874,234126503);
// v41 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["forEach", "some", "lastIndexOf", "values", "join", "subarray", "reduce", "reduceRight", "reverse", "sort", "keys", "indexOf", "entries", "slice", "findIndex", "find", "copyWithin", "includes", "map", "filter", "every", "fill", "set"])
const v42 = v41 > v1;
// v42 = .boolean
const v43 = v10(Uint16Array,v3);
// v43 = .unknown
const v44 = v10();
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
