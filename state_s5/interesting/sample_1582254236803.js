function main() {
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = {b:13.37,d:1607264097,e:1607264097,constructor:v10,valueOf:WeakSet};
// v11 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "constructor", "d", "b"])
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
let v38 = 0;
do {
    const v39 = v38 + 1;
    // v39 = .primitive
    v38 = v39;
} while (v38 != 7);
let v42 = 0;
const v43 = v42 + 1;
// v43 = .primitive
v42 = v43;
}
%NeverOptimizeFunction(main);
main();
