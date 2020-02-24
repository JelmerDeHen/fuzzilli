function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = Object.freeze(v1);
// v3 = .undefined
const v4 = {call:Object};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v6 = new Proxy(v3,v4);
// v6 = .unknown
v6[10] = v6;
const v8 = 13.37 != 1337;
// v8 = .boolean
let v9 = v4;
with (v6) {
    valueOf = v9;
}
}
%NeverOptimizeFunction(main);
main();
