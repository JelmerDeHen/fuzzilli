function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        delete v1[v6];
        const v8 = {get:v2,set:v2};
        // v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
        const v10 = Object.defineProperty(v1,3888637251,v8);
        // v10 = .undefined
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = v15;
const v17 = v2(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
