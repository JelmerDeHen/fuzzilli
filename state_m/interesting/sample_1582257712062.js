function main() {
let v1 = undefined;
for (const v3 in "boolean") {
    const v5 = [1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v6 = v5.shift();
    // v6 = .unknown
    const v9 = [13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v11 = [1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v12 = v11.includes(v6);
    // v12 = .boolean
    const v13 = {toString:v9,b:"PI",valueOf:v11};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "toString"])
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
