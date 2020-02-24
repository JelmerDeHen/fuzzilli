function main() {
let v3 = 0;
v3 = "search";
let v6 = 0;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v21 = {__proto__:RegExp,length:v20,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v21 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "length", "b", "__proto__"], withMethods: ["__proto__"])
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
