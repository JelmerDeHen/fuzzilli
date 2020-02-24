function main() {
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v20 = 0;
const v21 = v15 + 1;
// v21 = .primitive
let v40 = 0;
let v43 = 0;
v20 = v21;
const v47 = typeof "e";
// v47 = .string
const v49 = v47 === "undefined";
// v49 = .boolean
if (v49) {
    let v52 = 0;
    while (v52 < 7) {
        continue;
    }
} else {
}
}
%NeverOptimizeFunction(main);
main();
