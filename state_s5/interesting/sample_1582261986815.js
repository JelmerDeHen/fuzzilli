function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = undefined;
let v12 = 0;
let v14 = 0;
const v17 = [1337,1337,1337,v12];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = {b:2147483647};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v19(v20,v21) {
    for (const v22 in arguments) {
    }
}
const v23 = v17.findIndex(v19,v18);
// v23 = .integer
const v24 = v12 + 1;
// v24 = .primitive
v12 = v24;
}
%NeverOptimizeFunction(main);
main();
