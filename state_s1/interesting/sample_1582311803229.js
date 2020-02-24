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
            // v15 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
            const v17 = new WeakMap(v15);
            // v17 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "set", "delete", "get"])
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
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
