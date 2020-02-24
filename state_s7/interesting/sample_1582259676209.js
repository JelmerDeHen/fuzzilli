function main() {
let v3 = 2645807692;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v6;
let v9 = undefined;
for (const v13 in "undefined") {
}
const v15 = [13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
for (const v16 of v15) {
    const v17 = {valueOf:v16,...v16};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
    const v18 = {...v4,...v17,...v17};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
    for (const v20 in "boolean") {
    }
}
}
%NeverOptimizeFunction(main);
main();
