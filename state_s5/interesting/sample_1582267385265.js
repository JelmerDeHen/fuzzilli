function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
for (const v7 in "MAX_SAFE_INTEGER") {
    let v10 = 0;
    const v13 = v2.push(8,v10,7,0,-2908695906);
    // v13 = .integer
    const v14 = v10 + 1;
    // v14 = .primitive
}
const v16 = Symbol.species;
// v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
RegExp[v16] = v4;
}
%NeverOptimizeFunction(main);
main();
