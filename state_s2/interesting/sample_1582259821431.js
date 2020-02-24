function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v10 = 0;
    const v11 = Object.getOwnPropertyDescriptor(Object,v6);
    // v11 = .object(withProperties: ["configurable", "value", "writable", "enumerable"])
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
