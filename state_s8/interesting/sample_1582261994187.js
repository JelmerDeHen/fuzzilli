function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v8 = undefined;
let v12 = 0;
let v14 = 0;
const v17 = [1337,1337,1337,v12];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = {b:2147483647};
// v18 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
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
