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
            // v15 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
            const v17 = new WeakMap(v15);
            // v17 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "has", "set"])
            const v18 = v17.set(v15);
            // v18 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "has", "set"])
            for (const v19 in "boolean") {
            }
            const v20 = v7 + 1;
            // v20 = .primitive
            v7 = v20;
        } while (v7 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
