function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
