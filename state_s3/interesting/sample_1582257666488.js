function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [v2,v4];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = 13.37 < v5;
// v10 = .boolean
function v11(v12,v13) {
    let v17 = 0;
    v17 = "boolean";
    return v11;
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v20 = v19;
const v21 = v11(v20);
// v21 = .unknown
const v23 = {get:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v25 = Object.defineProperty(v21,2743566176,v23);
// v25 = .undefined
const v26 = {toString:v11,...v4,...v25};
// v26 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reverse", "copyWithin", "values", "splice", "push", "toLocaleString", "flatMap", "reduce", "some", "sort", "includes", "entries", "lastIndexOf", "unshift", "findIndex", "flat", "every", "forEach", "indexOf", "slice", "pop", "reduceRight", "fill", "find", "map", "join", "filter", "shift", "concat", "toString", "keys"])
}
%NeverOptimizeFunction(main);
main();
