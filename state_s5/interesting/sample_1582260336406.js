function main() {
const v4 = [13.37,"EXkcpBKht7"];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {length:isNaN,e:1337,b:"EXkcpBKht7",a:v4,d:13.37,constructor:-2695425644};
// v7 = .object(ofGroup: Object, withProperties: ["b", "d", "constructor", "__proto__", "e", "a"], withMethods: ["length"])
const v8 = {length:1337,constructor:v7,e:isNaN,d:v6};
// v8 = .object(ofGroup: Object, withProperties: ["d", "constructor", "length", "__proto__"], withMethods: ["e"])
const v9 = v8.e();
// v9 = .unknown
const v10 = v4.includes(1337,v9);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();
