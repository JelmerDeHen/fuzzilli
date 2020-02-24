function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
