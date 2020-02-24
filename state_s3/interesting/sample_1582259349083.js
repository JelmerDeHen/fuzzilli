function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v17 = [13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v19 = [1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v20 = [v19,v19,v19];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v21 = {d:"undefined",e:v17,__proto__:v19,c:v19,toString:v20};
    // v21 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "toString", "d"])
    const v25 = new Int16Array(19873);
    // v25 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    const v27 = {...v21,..."undefined",...13.37};
    // v27 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "toString", "length", "e", "c"], withMethods: ["charAt", "split", "startsWith", "lastIndexOf", "padEnd", "endsWith", "replace", "concat", "includes", "substring", "codePointAt", "padStart", "charCodeAt", "repeat", "trim", "slice", "indexOf"])
}
}
%NeverOptimizeFunction(main);
main();
