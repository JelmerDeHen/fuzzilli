function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = ["Lg4kb1eIOi"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {length:v6,b:v6,e:2552665081,c:v6,valueOf:RegExp,a:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "length", "c", "e"], withMethods: ["valueOf"])
const v9 = {__proto__:RegExp,length:v6,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "length", "b", "__proto__"], withMethods: ["__proto__"])
let v10 = RegExp;
const v11 = v10.apply(v7,v8);
// v11 = .unknown
let v15 = v10;
const v18 = new Proxy(v15,Object);
// v18 = .unknown
const v19 = Object.freeze(v18);
// v19 = .undefined
}
%NeverOptimizeFunction(main);
main();
