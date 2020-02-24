function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v10 = 0;
    const v11 = Object.getOwnPropertyDescriptor(Object,v6);
    // v11 = .object(withProperties: ["writable", "enumerable", "configurable", "value"])
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
