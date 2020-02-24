function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v10 = 0;
    const v11 = Object.getOwnPropertyDescriptor(Object,v6);
    // v11 = .object(withProperties: ["configurable", "writable", "enumerable", "value"])
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
