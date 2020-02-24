function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = v15;
const v17 = v2(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
