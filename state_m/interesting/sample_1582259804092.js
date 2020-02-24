function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v10 = 0;
    const v11 = Object.getOwnPropertyDescriptor(Object,v6);
    // v11 = .object(withProperties: ["enumerable", "value", "configurable", "writable"])
    const v12 = {};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v14 = v12 > 13.37;
    // v14 = .boolean
    const v15 = v10 + 1;
    // v15 = .primitive
    v10 = v15;
}
}
%NeverOptimizeFunction(main);
main();
