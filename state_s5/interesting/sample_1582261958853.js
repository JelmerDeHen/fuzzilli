function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (const v11 in "boolean") {
            const v15 = [13.37,13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v16 = {valueOf:"undefined",c:v15,length:"undefined",d:3366735776,__proto__:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c", "d", "valueOf"])
            const v18 = Math.sin(v16);
            // v18 = .number
            for (const v20 in "boolean") {
            }
        }
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v23 = v22;
    const v24 = v4(v23);
    // v24 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
