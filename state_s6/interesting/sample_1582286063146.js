function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "b", "valueOf", "length"], withMethods: ["__proto__"])
let v6 = RegExp;
let v8 = RegExp;
let v10 = v8;
v6.c = 1;
const v14 = new Proxy(v10,Object);
// v14 = .unknown
const v15 = Object.freeze(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
