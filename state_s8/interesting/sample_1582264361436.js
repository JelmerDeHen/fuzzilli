function main() {
function v0(v1,v2) {
    const v5 = new Int16Array(19873);
    // v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    for (const v6 of v5) {
    }
    function v7(v8,v9) {
        const v12 = new Int16Array(19873);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
        return v7;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v15 = v14;
    const v16 = v7(v15);
    // v16 = .unknown
    const v17 = v7(1337,v16);
    // v17 = .unknown
    const v18 = new v17();
    // v18 = .object()
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
const v34 = gc();
// v34 = .undefined
const v38 = v0(1337,v22);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
