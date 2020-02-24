function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
