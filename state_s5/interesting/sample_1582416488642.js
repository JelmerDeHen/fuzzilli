function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
const v5 = v4.keys(v2);
// v5 = .object()
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v13 = 0;
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        const v17 = v13 + 1;
        // v17 = .primitive
    }
    for (let v21 = 0; v21 < 9; v21++) {
        let v24 = 0;
        do {
            for (const v25 of v5) {
            }
            const v26 = v24 + 1;
            // v26 = .primitive
            v24 = v26;
        } while (v24 < 4);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v29 = v28;
const v30 = v7(v29);
// v30 = .unknown
const v31 = v7(13.37);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
