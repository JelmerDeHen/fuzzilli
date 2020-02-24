function main() {
let v3 = 0;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = {toString:v10,e:-828296917,valueOf:1337,constructor:Boolean,length:13.37,c:v10};
// v11 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "toString", "length", "valueOf"], withMethods: ["constructor"])
const v12 = v11.__proto__;
// v12 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v12[8] = v14;
for (const v16 in 1337) {
}
}
%NeverOptimizeFunction(main);
main();
