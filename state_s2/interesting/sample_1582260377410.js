function main() {
const v4 = [13.37,"EXkcpBKht7"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {length:isNaN,e:1337,b:"EXkcpBKht7",a:v4,d:13.37,constructor:-2695425644};
// v7 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "a", "b", "e", "constructor"], withMethods: ["length"])
const v8 = {length:1337,constructor:v7,e:isNaN,d:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "length", "constructor"], withMethods: ["e"])
const v9 = v8.e();
// v9 = .unknown
const v10 = v4.includes(1337,v9);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();
