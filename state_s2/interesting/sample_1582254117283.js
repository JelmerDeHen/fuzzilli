function main() {
let v11 = 0;
do {
    for (let v15 = 0; v15 < 9; v15++) {
    }
    const v16 = v11 + 1;
    // v16 = .primitive
    v11 = v16;
} while (v11 < 9);
const v23 = [1337,1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v33 = [];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v41 = Symbol.toPrimitive;
// v41 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v42 = Object[v41];
// v42 = .unknown
const v43 = {a:v23,__proto__:Object,length:Symbol,c:v33,...Symbol};
// v43 = .object(ofGroup: Object, withProperties: ["asyncIterator", "a", "toPrimitive", "match", "toStringTag", "hasInstance", "isConcatSpreadable", "matchAll", "c", "replace", "__proto__", "species", "unscopable", "search", "iterator", "split"], withMethods: ["__proto__", "keyFor", "for", "length"])
}
%NeverOptimizeFunction(main);
main();
