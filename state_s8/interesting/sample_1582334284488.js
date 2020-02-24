function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "entries", "keys", "values", "get", "clear", "delete", "set", "forEach"])
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
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = v7(13.37);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
