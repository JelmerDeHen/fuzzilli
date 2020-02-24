function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
