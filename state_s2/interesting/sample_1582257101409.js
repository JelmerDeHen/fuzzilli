function main() {
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = {__proto__:"hasInstance",d:v9};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v14 = {call:v11};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v16 = new Proxy(Array,v14);
// v16 = .unknown
for (const v17 in v16) {
    const v18 = v17 <= v17;
    // v18 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
