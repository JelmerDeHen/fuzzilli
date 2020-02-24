function main() {
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = {__proto__:"hasInstance",d:v9};
// v11 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
