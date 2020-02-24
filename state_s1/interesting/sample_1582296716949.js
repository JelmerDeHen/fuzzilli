function main() {
for (const v2 in "boolean") {
    const v7 = [1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v8 = [Promise];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v9 = {toString:v7,__proto__:"number",valueOf:v8,b:v7,length:1337};
    // v9 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "b", "__proto__", "length"])
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
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v20 = v19;
    const v21 = v10(v9,v20);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
