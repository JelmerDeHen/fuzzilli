function main() {
let v3 = 0;
v3 = "search";
let v6 = 0;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v21 = {__proto__:RegExp,length:v20,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v21 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "toString", "b", "__proto__"], withMethods: ["__proto__"])
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
