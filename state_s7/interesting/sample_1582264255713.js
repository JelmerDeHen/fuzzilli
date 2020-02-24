function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [v1,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [v3,v3,v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {length:1.7976931348623157e+308,b:v4,valueOf:v3,__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
const v7 = Symbol.toPrimitive;
// v7 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v8 = v5[v7];
// v8 = .unknown
let v11 = 0;
const v13 = {e:v8};
// v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
const v15 = Object.defineProperty(v3,2550708109,v13);
// v15 = .undefined
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
}
%NeverOptimizeFunction(main);
main();
