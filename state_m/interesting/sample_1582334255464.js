function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["forEach", "entries", "clear", "set", "keys", "delete", "get", "values", "has"])
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
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = v7(13.37);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
