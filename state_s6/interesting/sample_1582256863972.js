function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {__proto__:"hasInstance",d:v4};
// v7 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v10 = {call:v7};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v12 = new Proxy(Array,v10);
// v12 = .unknown
for (const v13 in v12) {
    const v14 = v13 > v13;
    // v14 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
