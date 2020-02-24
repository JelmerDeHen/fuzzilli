function main() {
function v0(v1,v2) {
    const v5 = new Int16Array(19873);
    // v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    for (const v6 of v5) {
    }
    function v7(v8,v9) {
        return v7;
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v12 = v11;
    const v13 = v7(v12);
    // v13 = .unknown
    const v14 = v7(1337,v13);
    // v14 = .unknown
    const v15 = v14();
    // v15 = .unknown
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
const v20 = v0(1337,v19);
// v20 = .unknown
let v23 = 0;
const v27 = v23 + 1;
// v27 = .primitive
v23 = v27;
}
%NeverOptimizeFunction(main);
main();
