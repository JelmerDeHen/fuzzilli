function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
const v5 = v4.values(v2);
// v5 = .object()
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
        const v19 = v14 + 1;
        // v19 = .primitive
        v14 = v19;
    }
    for (let v23 = 0; v23 < 9; v23++) {
        let v26 = 0;
        do {
            for (const v27 of v5) {
            }
            const v28 = v26 + 1;
            // v28 = .primitive
            v26 = v28;
        } while (v26 < 4);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = v7(13.37);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
