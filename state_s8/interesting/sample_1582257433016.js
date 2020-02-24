function main() {
let v3 = 0;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = {toString:v10,e:-828296917,valueOf:1337,constructor:Boolean,length:13.37,c:v10};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "valueOf", "e", "c"], withMethods: ["constructor"])
const v12 = v11.__proto__;
// v12 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v12[8] = v14;
for (const v16 in 1337) {
}
}
%NeverOptimizeFunction(main);
main();
