function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = new Int8Array("arguments");
// v4 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v6 = new Map(v4);
// v6 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "entries", "keys", "values", "get", "clear", "delete", "set", "forEach"])
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
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
