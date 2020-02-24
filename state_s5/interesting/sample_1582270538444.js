function main() {
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = {a:1337,toString:13.37,c:v5,__proto__:v10,valueOf:"a",constructor:v5};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "a", "valueOf", "__proto__", "constructor", "c"])
const v12 = {toString:v5,valueOf:v11,d:1337,constructor:-9007199254740992};
// v12 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "valueOf", "toString"])
const v13 = RegExp.apply(v12,RegExp);
// v13 = .unknown
const v14 = "a".split(v13,v10);
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
