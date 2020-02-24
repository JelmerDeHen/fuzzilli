function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = {toString:v12,e:-828296917,valueOf:1337,constructor:Boolean,length:13.37,c:v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "c", "e", "toString"], withMethods: ["constructor"])
const v14 = v13.__proto__;
// v14 = .object()
const v16 = [1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
v14[8] = v16;
for (const v19 in v14) {
}
}
%NeverOptimizeFunction(main);
main();
