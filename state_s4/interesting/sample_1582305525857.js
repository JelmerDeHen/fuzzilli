function main() {
const v2 = new Int8Array("arguments");
// v2 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v4 = new Map(v2);
// v4 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["has", "keys", "get", "forEach", "entries", "set", "values", "clear", "delete"])
const v5 = v4.values(v2);
// v5 = .object()
function v8(v9,v10) {
    for (const v12 in "boolean") {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v15 = [v14,v14,v14,v14,v14];
        // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
const v30 = v8(13.37);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
