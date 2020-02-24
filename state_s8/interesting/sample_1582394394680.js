function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {b:255,constructor:v2,__proto__:255,valueOf:1337,length:1337};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b", "length", "valueOf"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = 1337 < v5;
// v7 = .boolean
const v9 = [13.37,13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = (65536).__proto__;
// v11 = .unknown
let v12 = v9;
let v13 = v12;
const v19 = new Proxy(v13,Object);
// v19 = .unknown
v11.__proto__ = v19;
const v20 = (65536).indexOf();
// v20 = .unknown
const v21 = v20.concat(v19,v7,v2,v3);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
