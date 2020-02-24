function main() {
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = {__proto__:"hasInstance",d:v9};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v14 = {call:v11};
// v14 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v16 = new Proxy(Array,v14);
// v16 = .unknown
for (const v17 in v16) {
    const v18 = v17 <= v17;
    // v18 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
