function main() {
const v3 = new Uint32Array(19873);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v6 = -268435456;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            const v24 = 1337 == 13.37;
            // v24 = .boolean
            let v25 = v8;
            v25[v21] = v24;
            const v26 = v14 + 1;
            // v26 = .primitive
            v14 = v26;
        } while (v14 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v29 = v28;
const v30 = v7(v29);
// v30 = .unknown
v6 = 19873;
const v31 = v3.slice(v6,1337);
// v31 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "buffer", "constructor", "byteOffset", "__proto__", "length"], withMethods: ["reverse", "find", "values", "some", "findIndex", "every", "reduce", "entries", "set", "forEach", "keys", "fill", "slice", "includes", "map", "reduceRight", "lastIndexOf", "sort", "filter", "subarray", "join", "copyWithin", "indexOf"])
const v32 = v7(v31,v5);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
