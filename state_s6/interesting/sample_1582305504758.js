function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "delete", "keys", "set", "entries", "forEach", "values", "clear", "get"])
const v5 = v4.values(v2);
// v5 = .object()
function v8(v9,v10) {
    for (const v12 in "boolean") {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v15 = [v14,v14,v14,v14,v14];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
const v30 = v8(13.37);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
