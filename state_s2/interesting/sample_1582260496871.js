function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        delete v1[v6];
        const v8 = {get:v2,set:v2};
        // v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v10 = Object.defineProperty(v1,3888637251,v8);
        // v10 = .undefined
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v16 = v15;
const v17 = v2(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
