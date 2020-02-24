function main() {
for (const v1 in "object") {
    let v8 = 0;
    let v11 = 0;
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
    let v18 = 0;
    const v22 = v11 + 1;
    // v22 = .primitive
    v11 = v22;
    const v23 = v8 + 1;
    // v23 = .primitive
    v8 = v23;
    const v26 = [13.37,13.37,13.37,13.37,13.37];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v28 = [1337,1337];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v29 = [1337,v26,13.37,v28];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    Number.valueOf = Number;
    const v32 = {set:Number,get:Number};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v34 = Object.defineProperty(Number,-201003146,v32);
    // v34 = .undefined
    let v40 = 0;
    const v41 = v40 + 1;
    // v41 = .primitive
    v40 = v41;
}
}
%NeverOptimizeFunction(main);
main();
