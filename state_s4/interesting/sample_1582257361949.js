function main() {
let v3 = 0;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = {toString:v10,e:-828296917,valueOf:1337,constructor:Boolean,length:13.37,c:v10};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "e", "length", "c"], withMethods: ["constructor"])
const v12 = v11.__proto__;
// v12 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v12[8] = v14;
for (const v16 in 1337) {
}
}
%NeverOptimizeFunction(main);
main();
