function main() {
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
