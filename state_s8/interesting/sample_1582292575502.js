function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v9 = v7;
            const v10 = v9 % 0;
            // v10 = .number
            const v11 = v10 + 1;
            // v11 = .primitive
            v9 = v11;
            const v15 = new Int8Array("wcdOoj6S.H");
            // v15 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
            const v17 = new WeakMap(v15);
            // v17 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "get", "delete", "set"])
            const v18 = v17.set(v15);
            // v18 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "get", "delete", "set"])
            for (const v19 in "boolean") {
            }
            const v20 = v7 + 1;
            // v20 = .primitive
            v7 = v20;
        } while (v7 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
