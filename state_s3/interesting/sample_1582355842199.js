function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {__proto__:RegExp,length:v5,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "toString", "valueOf"], withMethods: ["__proto__"])
let v7 = WeakSet;
const v10 = new Proxy(v7,Object);
// v10 = .unknown
const v11 = Object.freeze(v10);
// v11 = .undefined
const v12 = v11.bind(v6,v10,Object);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();
