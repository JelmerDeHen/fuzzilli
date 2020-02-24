function main() {
function v0(v1,v2) {
    const v5 = new Int16Array(19873);
    // v5 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    for (const v6 of v5) {
    }
    function v7(v8,v9) {
        const v12 = new Int16Array(19873);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        return v7;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v15 = v14;
    const v16 = v7(v15);
    // v16 = .unknown
    const v17 = v7(1337,v16);
    // v17 = .unknown
    const v18 = new v17();
    // v18 = .object()
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
