function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = [v1,v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = 0;
do {
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
} while (v8 < 512);
const v13 = {...v2,...0,...v4};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toLocaleString", "shift", "reduce", "flatMap", "slice", "keys", "flat", "values", "reverse", "concat", "every", "reduceRight", "some", "unshift", "pop", "findIndex", "toString", "filter", "fill", "sort", "map", "find", "lastIndexOf", "forEach", "copyWithin", "push", "join", "includes", "indexOf", "splice", "entries"])
}
%NeverOptimizeFunction(main);
main();
