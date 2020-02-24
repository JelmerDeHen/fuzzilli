function main() {
function v0(v1,v2) {
    const v5 = [13.37,13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
