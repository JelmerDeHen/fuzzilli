function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {__proto__:"hasInstance",d:v4};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v10 = {call:v7};
// v10 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v12 = new Proxy(Array,v10);
// v12 = .unknown
for (const v13 in v12) {
    const v14 = v13 > v13;
    // v14 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
