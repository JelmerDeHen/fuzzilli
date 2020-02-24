function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {valueOf:v11,length:13.37,d:127,e:127};
// v12 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "valueOf", "__proto__"])
const v13 = {c:v11,valueOf:v12,b:Array,a:1337};
// v13 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "c", "__proto__"], withMethods: ["b"])
for (const v16 of v5) {
    const v17 = v16(v16,Array,v13,v16);
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
