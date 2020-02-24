function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5) {
    const v10 = {deleteProperty:Symbol,getPrototypeOf:parseFloat,defineProperty:gc};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "deleteProperty", "defineProperty"])
    const v12 = new Proxy(arguments,v10);
    // v12 = .unknown
    for (const v13 of v12) {
    }
    return v3;
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v16 = v15;
const v17 = v3(v16);
// v17 = .unknown
const v21 = v17(v17,v2,Float32Array,1337);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
