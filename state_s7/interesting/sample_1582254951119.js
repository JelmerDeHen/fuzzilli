function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "d", "e", "constructor"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {b:v11,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v12 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "a", "__proto__", "length", "e"])
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
const v32 = v5.__proto__;
// v32 = .object()
}
%NeverOptimizeFunction(main);
main();
