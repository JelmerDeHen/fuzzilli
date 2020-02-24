function main() {
const v4 = [13.37,"EXkcpBKht7"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {length:isNaN,e:1337,b:"EXkcpBKht7",a:v4,d:13.37,constructor:-2695425644};
// v7 = .object(ofGroup: Object, withProperties: ["d", "a", "__proto__", "e", "b", "constructor"], withMethods: ["length"])
const v8 = {length:1337,constructor:v7,e:isNaN,d:v6};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "length"], withMethods: ["e"])
const v9 = v8.e();
// v9 = .unknown
const v10 = v4.includes(1337,v9);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();
