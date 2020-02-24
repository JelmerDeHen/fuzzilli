function main() {
const v4 = [-2];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {__proto__:RegExp,length:v4,b:"toPrimitive",toString:-2,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "b", "valueOf", "length"], withMethods: ["__proto__"])
let v7 = Set;
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
