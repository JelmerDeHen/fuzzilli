function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v15 = new Int8Array("wcdOoj6S.H");
            // v15 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
            const v17 = new WeakMap(v15);
            // v17 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "has", "set"])
            for (const v18 in "boolean") {
            }
            const v19 = v7 + 1;
            // v19 = .primitive
            const v20 = v17.has(v2);
            // v20 = .boolean
            v7 = v19;
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
