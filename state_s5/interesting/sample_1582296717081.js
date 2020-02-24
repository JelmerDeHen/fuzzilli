function main() {
for (const v2 in "boolean") {
    const v7 = [1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v8 = [Promise];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = {toString:v7,__proto__:"number",valueOf:v8,b:v7,length:1337};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "valueOf", "length"])
    function v10(v11,v12) {
        for (const v15 in "valueOf") {
            const v16 = 13.37 << v15;
            // v16 = .integer
            let v17 = undefined;
            const v18 = v17 != v16;
            // v18 = .boolean
            if (v18) {
            } else {
            }
        }
    }
    const v19 = [0];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v20 = v19;
    const v21 = v10(v9,v20);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
