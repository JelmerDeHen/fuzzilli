function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "valueOf", "c"], withMethods: ["__proto__"])
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
