function main() {
let v1 = undefined;
for (const v3 in "boolean") {
    const v5 = [1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v6 = v5.shift();
    // v6 = .unknown
    const v9 = [13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v11 = [1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = v11.includes(v6);
    // v12 = .boolean
    const v13 = {toString:v9,b:"PI",valueOf:v11};
    // v13 = .object(ofGroup: Object, withProperties: ["b", "toString", "__proto__", "valueOf"])
    const v14 = {b:v13};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v15 = v14.__proto__;
    // v15 = .object()
    let v16 = v13;
    v15[984635998] = v16;
    let v21 = 0;
    let v24 = 0;
}
}
%NeverOptimizeFunction(main);
main();
