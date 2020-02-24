function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v8 = undefined;
let v12 = 0;
let v14 = 0;
const v17 = [1337,1337,1337,v12];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
