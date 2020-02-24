function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v17 = [13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v19 = [1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v20 = [v19,v19,v19];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v21 = {d:"undefined",e:v17,__proto__:v19,c:v19,toString:v20};
    // v21 = .object(ofGroup: Object, withProperties: ["c", "toString", "e", "d", "__proto__"])
    const v25 = new Int16Array(19873);
    // v25 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v27 = {...v21,..."undefined",...13.37};
    // v27 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__", "d", "length", "e", "toString"], withMethods: ["codePointAt", "replace", "split", "includes", "startsWith", "concat", "slice", "padEnd", "indexOf", "endsWith", "lastIndexOf", "repeat", "charAt", "substring", "charCodeAt", "trim", "padStart"])
}
}
%NeverOptimizeFunction(main);
main();
