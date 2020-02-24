function main() {
function v0(v1,v2) {
    const v6 = Object.getOwnPropertyDescriptors(arguments);
    // v6 = .object()
    const v8 = [13.37,13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v9 = {__proto__:"hasInstance",d:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
