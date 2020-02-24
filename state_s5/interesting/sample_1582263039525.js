function main() {
for (const v1 in "object") {
    function v2(v3,v4) {
        let v7 = 0;
        for (const v8 in "boolean") {
            let v10 = 0;
            const v13 = [13.37,13.37,13.37];
            // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v15 = [1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v16 = [v15,v15,"undefined"];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v17 = {d:"undefined",e:v13,__proto__:v15,c:v15,toString:v16};
            // v17 = .object(ofGroup: Object, withProperties: ["c", "e", "__proto__", "toString", "d"])
            const v21 = 0 << v7;
            // v21 = .integer
            const v22 = v10 + 1;
            // v22 = .primitive
            v7 = v22;
        }
    }
    const v24 = [1337];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v25 = v24;
    const v26 = v2(v25);
    // v26 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
