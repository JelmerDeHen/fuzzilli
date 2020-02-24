function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",-9007199254740992,-9007199254740992];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "toString", "c", "a"])
const v9 = {toString:v4,valueOf:v8,d:-9007199254740992,constructor:-9007199254740992};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "toString", "constructor"])
const v13 = [1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {c:13.37};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v15 = {d:gc,valueOf:v13};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
Object[v15] = v14;
let v17 = 1337;
const v22 = [];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = 13.37;
if (-9007199254740992) {
    const v24 = v6 % 1337;
    // v24 = .number
    v23 = 127;
} else {
    const v25 = {length:v23,...Array,...v22};
    // v25 = .object(ofGroup: Object, withProperties: ["prototype", "length", "constructor", "__proto__"], withMethods: ["shift", "from", "splice", "toString", "reverse", "push", "forEach", "filter", "reduce", "slice", "isArray", "flatMap", "map", "pop", "copyWithin", "includes", "concat", "values", "find", "every", "fill", "lastIndexOf", "entries", "join", "unshift", "indexOf", "some", "findIndex", "toLocaleString", "of", "flat", "reduceRight", "keys", "sort"])
}
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
}
%NeverOptimizeFunction(main);
main();
