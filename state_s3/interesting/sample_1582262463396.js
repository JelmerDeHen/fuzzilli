function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
function v10(v11,v12) {
    v10.prototype = 3008129548;
}
const v14 = v10();
// v14 = .unknown
const v15 = v8 + 1;
// v15 = .primitive
v8 = v15;
}
%NeverOptimizeFunction(main);
main();
