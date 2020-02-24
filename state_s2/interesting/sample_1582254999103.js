function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",-9007199254740992,-9007199254740992];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "__proto__", "toString", "valueOf"])
const v9 = {toString:v4,valueOf:v8,d:1337,constructor:-9007199254740992};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "d", "__proto__", "toString"])
let v10 = 1337;
const v13 = {constructor:"symbol",length:9007199254740993};
// v13 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v16 = [13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = v16[Function];
// v18 = .unknown
try {
    const v19 = v18(v17,v13);
    // v19 = .unknown
} catch(v20) {
}
this[0] = 0;
const v26 = [...v6,3,v18];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v27 = Function(v18);
// v27 = .unknown
const v28 = v7.indexOf(RegExp,1337);
// v28 = .integer
const v29 = this - 1;
// v29 = .primitive
v6[1337] = v4;
const v30 = RegExp(v18);
// v30 = .object()
}
%NeverOptimizeFunction(main);
main();
