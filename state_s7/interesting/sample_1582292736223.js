function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {a:1337,e:v2,valueOf:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "e"])
let v5 = 4294967297;
let v9 = this;
let v10 = v9;
this["MIN_VALUE"] = v4;
v9[4294967297] = v5;
has = v5;
const v15 = new Proxy(v10,Object);
// v15 = .unknown
const v16 = Object.freeze(v15);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
