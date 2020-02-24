function main() {
const v4 = [-2];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {__proto__:RegExp,length:v4,b:"toPrimitive",toString:-2,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "b", "valueOf", "__proto__", "length"], withMethods: ["__proto__"])
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
