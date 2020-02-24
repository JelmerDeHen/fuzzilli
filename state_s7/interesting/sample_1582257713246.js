function main() {
function v0(v1,v2) {
    const v5 = [13.37,13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v6 = {__proto__:"hasInstance",d:v5};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
    const v8 = {call:v6};
    // v8 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
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
