function main() {
const v2 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "deleteProperty"])
const v4 = new Proxy(Boolean,v2);
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
with ("e") {
    const v15 = v4(v10);
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
