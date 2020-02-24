function main() {
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = {__proto__:"hasInstance",d:v9};
// v11 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
