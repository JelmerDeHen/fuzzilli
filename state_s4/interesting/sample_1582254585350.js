function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = ~13.37;
// v6 = .boolean
let v9 = 0;
const v10 = v5 + 1;
// v10 = .primitive
v9 = v10;
const v14 = typeof Array;
// v14 = .string
const v16 = v14 === "undefined";
// v16 = .boolean
let v19 = 0;
while (v19 < 8) {
    for (const v21 in "object") {
    }
    const v22 = v19 + 1;
    // v22 = .primitive
    v19 = v22;
}
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
for (const v27 of v2) {
    v27.c = v27;
}
}
%NeverOptimizeFunction(main);
main();