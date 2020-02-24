function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "valueOf", "length"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "valueOf"], withMethods: ["d"])
const v11 = v2 != v9;
// v11 = .boolean
let v13 = v0;
let v19 = 0;
const v21 = Number.__proto__;
// v21 = .unknown
const v23 = {get:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v25 = Object.defineProperty(v21,"constructor",v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
