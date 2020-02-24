function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
try {
    const v29 = 1337 instanceof v5;
    // v29 = .boolean
} catch(v30) {
}
const v41 = [13.37,13.37];
// v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v101 = Array(2815038421);
// v101 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
with (v101) {
}
const v114 = gc();
// v114 = .undefined
function v138(v139,v140,v141) {
    "string".__proto__ = v41;
}
}
%NeverOptimizeFunction(main);
main();
