function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "b", "length"], withMethods: ["__proto__"])
let v7 = RegExp;
let v8 = v7;
const v11 = new Proxy(v8,Object);
// v11 = .unknown
const v12 = Object.freeze(v11);
// v12 = .undefined
const v13 = v12.bind(v5,v11,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
