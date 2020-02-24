function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
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
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v29 = v28;
const v30 = v7(v29);
// v30 = .unknown
const v31 = v7(13.37);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
