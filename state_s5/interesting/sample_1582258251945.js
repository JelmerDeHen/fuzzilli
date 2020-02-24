function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    const v4 = {get:isNaN};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v6 = Object.defineProperty(v2,"length",v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
