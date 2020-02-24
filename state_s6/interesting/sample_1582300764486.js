function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "b", "valueOf"], withMethods: ["__proto__"])
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
