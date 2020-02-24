function main() {
function v0(v1,v2) {
    const v6 = Object.getOwnPropertyDescriptors(arguments);
    // v6 = .object()
    const v8 = [13.37,13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = {__proto__:"hasInstance",d:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
    const v11 = {call:v9};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
    const v13 = new Proxy(Array,v11);
    // v13 = .unknown
}
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v0();
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
