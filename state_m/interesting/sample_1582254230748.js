function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = Symbol.toStringTag;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v7[v7] = v7;
const v35 = [1337,1337,1337,1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
let v52 = 0;
const v54 = v52 + 1;
// v54 = .primitive
v52 = v54;
for (let v65 = 0; v65 < 7; v65++) {
    let v68 = 0;
    do {
        const v69 = v35[1337];
        // v69 = .unknown
        const v70 = v68 + 1;
        // v70 = .primitive
        v68 = v70;
    } while (v68 < 6);
}
}
%NeverOptimizeFunction(main);
main();
