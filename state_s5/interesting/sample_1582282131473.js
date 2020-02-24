function main() {
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [-1024,-1024,-1024];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {a:-1024,toString:13.37,c:v6,__proto__:v8,valueOf:"a",constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "a", "c", "__proto__", "constructor", "valueOf"])
const v10 = {toString:v6,valueOf:v9,d:"bSURISzTTQ",constructor:-9007199254740992};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "valueOf", "toString"])
const v11 = RegExp.apply(v10,RegExp);
// v11 = .unknown
const v12 = "a".split(v11,-0.0);
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
