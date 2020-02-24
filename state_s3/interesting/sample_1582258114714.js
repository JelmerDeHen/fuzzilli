function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,Promise];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:-4294967295,__proto__:v4,toString:v4,d:-4294967295,length:v4,a:-4294967295};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "d", "constructor", "a", "length", "__proto__"])
const v9 = {e:13.37,valueOf:v4,__proto__:v6,toString:v6,a:v4,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "valueOf", "e", "a"])
let v10 = v7;
const v12 = [1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v15 = 0;
const v17 = Array(2815038421);
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v20 = Symbol("object");
// v20 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
const v28 = {constructor:7,toString:v20,...v17,...v12,...v23};
// v28 = .object(ofGroup: Object, withProperties: ["length", "toString", "constructor", "__proto__"], withMethods: ["toString", "some", "join", "values", "includes", "splice", "shift", "flatMap", "flat", "reduce", "slice", "fill", "toLocaleString", "lastIndexOf", "sort", "pop", "map", "entries", "reverse", "find", "concat", "forEach", "copyWithin", "findIndex", "every", "reduceRight", "unshift", "push", "indexOf", "keys", "filter"])
}
%NeverOptimizeFunction(main);
main();
