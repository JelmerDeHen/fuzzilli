function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "delete", "keys", "set", "entries", "forEach", "values", "clear", "get"])
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
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = v7(13.37);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
