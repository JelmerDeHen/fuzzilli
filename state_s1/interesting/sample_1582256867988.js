function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {__proto__:"hasInstance",d:v4};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
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
