function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {a:1337,e:v2,valueOf:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "valueOf"])
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
