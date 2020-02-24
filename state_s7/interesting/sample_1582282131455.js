function main() {
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [-1024,-1024,-1024];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {a:-1024,toString:13.37,c:v6,__proto__:v8,valueOf:"a",constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "c", "valueOf", "toString"])
const v10 = {toString:v6,valueOf:v9,d:"bSURISzTTQ",constructor:-9007199254740992};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "toString", "d"])
const v11 = RegExp.apply(v10,RegExp);
// v11 = .unknown
const v12 = "a".split(v11,-0.0);
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
}
%NeverOptimizeFunction(main);
main();
