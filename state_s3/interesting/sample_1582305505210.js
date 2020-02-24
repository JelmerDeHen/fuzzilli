function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
const v5 = v4.values(v2);
// v5 = .object()
function v8(v9,v10) {
    for (const v12 in "boolean") {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v15 = [v14,v14,v14,v14,v14];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        v9[3729928015] = v5;
        let v20 = 0;
        do {
            let v23 = 0;
            while (v23 < 5) {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
            }
            const v25 = v20 + 1;
            // v25 = .primitive
            v20 = v25;
        } while (v20 <= 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
const v30 = v8(13.37);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
