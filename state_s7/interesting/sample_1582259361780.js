function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {length:isNaN,e:1337,b:"EXkcpBKht7",a:v4,d:13.37,constructor:-2695425644};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "constructor", "b", "d"], withMethods: ["length"])
const v8 = {length:1337,constructor:v7,e:isNaN,d:v6};
// v8 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__", "constructor"], withMethods: ["e"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v16 = v8.e();
// v16 = .unknown
const v17 = v4.includes(1337,v16);
// v17 = .boolean
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
}
%NeverOptimizeFunction(main);
main();
