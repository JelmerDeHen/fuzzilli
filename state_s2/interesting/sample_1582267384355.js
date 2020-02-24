function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v7 in "MAX_SAFE_INTEGER") {
    let v10 = 0;
    const v13 = v2.push(8,v10,7,0,-2908695906);
    // v13 = .integer
    const v14 = v10 + 1;
    // v14 = .primitive
}
const v16 = Symbol.species;
// v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
RegExp[v16] = v4;
}
%NeverOptimizeFunction(main);
main();
