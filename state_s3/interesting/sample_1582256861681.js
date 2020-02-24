function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
