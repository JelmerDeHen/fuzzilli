function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    let v12 = 0;
    const v15 = {constructor:"symbol",length:9007199254740993};
    // v15 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
    delete v15.length;
    const v16 = v12 + 1;
    // v16 = .primitive
    v12 = v16;
    let v19 = 0;
    const v20 = v9 + 1;
    // v20 = .primitive
    v9 = v20;
}
}
%NeverOptimizeFunction(main);
main();
