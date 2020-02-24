function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = new Int8Array("arguments");
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v6 = new Map(v4);
// v6 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["values", "set", "keys", "delete", "entries", "clear", "get", "has", "forEach"])
const v7 = v6.values(v4);
// v7 = .object()
function v8(v9,v10) {
    const v12 = v6.get();
    // v12 = .unknown
    for (let v15 = 0; v15 < 9; v15++) {
        let v18 = 0;
        do {
            for (const v19 of v7) {
            }
            const v20 = v18 + 1;
            // v20 = .primitive
            v18 = v20;
        } while (v18 < 4);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v8(v23);
// v24 = .unknown
const v26 = v8(Uint16Array,v1);
// v26 = .unknown
const v27 = v8();
// v27 = .unknown
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
