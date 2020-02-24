function main() {
function v0(v1,v2) {
    const v5 = [13.37,13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v6 = {__proto__:"hasInstance",d:v5};
    // v6 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
    const v8 = {call:v6};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
    const v10 = new Proxy(Array,v8);
    // v10 = .unknown
    for (const v11 in v10) {
    }
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v0();
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
