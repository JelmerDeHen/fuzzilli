function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "a"], withMethods: ["d"])
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
