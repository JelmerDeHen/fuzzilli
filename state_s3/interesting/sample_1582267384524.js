function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
