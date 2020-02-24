function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = ["Lg4kb1eIOi"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {length:v6,b:v6,e:2552665081,c:v6,valueOf:RegExp,a:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "e", "c", "a"], withMethods: ["valueOf"])
const v9 = {__proto__:RegExp,length:v6,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "length", "__proto__", "b"], withMethods: ["__proto__"])
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
