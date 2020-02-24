function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v7 = undefined;
try {
    let v8 = Reflect;
    const v9 = v8.getOwnPropertyDescriptor(1337,v1);
    // v9 = .unknown
    const v15 = Int16Array(19873);
    // v15 = .unknown
} catch(v17) {
}
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
}
%NeverOptimizeFunction(main);
main();
