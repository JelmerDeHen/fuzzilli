function main() {
let v3 = 0;
v3 = "search";
let v6 = 0;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v21 = {__proto__:RegExp,length:v20,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v21 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b", "toString"], withMethods: ["__proto__"])
let v23 = RegExp;
let v24 = v23;
const v27 = new Proxy(v24,Object);
// v27 = .unknown
const v28 = Object.freeze(v27);
// v28 = .undefined
const v29 = RegExp.bind(v21,v27,Object);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
