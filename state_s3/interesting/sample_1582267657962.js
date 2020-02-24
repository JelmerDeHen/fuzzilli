function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
const v8 = [3156875969,3156875969,1337,DataView];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (const v10 in "boolean") {
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v16 = Reflect.set(Reflect,v10,1337,v8);
    // v16 = .boolean
    let v19 = 0;
    const v23 = [1337,1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v26 = 0;
    const v28 = v26 + 1;
    // v28 = .primitive
    v26 = v28;
    let v29 = 0;
    const v30 = v29 + 1;
    // v30 = .primitive
    v29 = v30;
    const v31 = v19 + 1;
    // v31 = .primitive
    v19 = v31;
}
}
%NeverOptimizeFunction(main);
main();
