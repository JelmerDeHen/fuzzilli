function main() {
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = [-1024,-1024,-1024];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {a:-1024,toString:13.37,c:v6,__proto__:v8,valueOf:"a",constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "toString", "constructor", "a"])
const v10 = {toString:v6,valueOf:v9,d:"bSURISzTTQ",constructor:-9007199254740992};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "toString", "d"])
const v11 = RegExp.apply(v10,RegExp);
// v11 = .unknown
const v12 = "a".split(v11,-0.0);
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();
