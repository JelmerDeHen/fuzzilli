function main() {
const v3 = new Uint32Array(19873);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v29 = v28;
const v30 = v7(v29);
// v30 = .unknown
v6 = 19873;
const v31 = v3.slice(v6,1337);
// v31 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["find", "copyWithin", "includes", "reverse", "map", "slice", "join", "lastIndexOf", "sort", "findIndex", "indexOf", "set", "keys", "filter", "some", "subarray", "forEach", "fill", "entries", "values", "reduce", "reduceRight", "every"])
const v32 = v7(v31,v5);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
