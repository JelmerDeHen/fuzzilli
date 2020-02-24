function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v15 = 0;
for (const v16 in "boolean") {
    const v20 = Symbol.toPrimitive;
    // v20 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Symbol[v20] = Symbol;
    const v22 = [13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    Reflect[Symbol] = v22;
    let v24 = 0;
    const v35 = v24 + 1;
    // v35 = .primitive
    v24 = v35;
}
const v36 = v15 + 1;
// v36 = .primitive
v15 = v36;
}
%NeverOptimizeFunction(main);
main();
