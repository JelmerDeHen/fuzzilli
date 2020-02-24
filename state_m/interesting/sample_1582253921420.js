function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {d:gc,valueOf:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
const v7 = Array(2815038421);
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v17 = 0;
while (v17 < 8) {
    let v20 = 0;
    const v22 = {get:Array};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v24 = Object.defineProperty(v3,"length",v22);
    // v24 = .undefined
    const v25 = v20 + 1;
    // v25 = .primitive
    v20 = v25;
    const v26 = v17 + 1;
    // v26 = .primitive
    v17 = v26;
}
}
%NeverOptimizeFunction(main);
main();
