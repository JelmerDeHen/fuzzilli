function main() {
let v2 = -65536;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        const v11 = [13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v13 = [1337,1337,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v14 = [1337,16,13.37,v13];
        // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v15 = {valueOf:v14,c:v11};
        // v15 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__"])
        const v17 = Math.cbrt(v15);
        // v17 = .number
        let v19 = 0;
        const v20 = v13.indexOf(1337,v19);
        // v20 = .integer
        const v23 = eval();
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        const v24 = v19 + 1;
        // v24 = .primitive
        v19 = v24;
    }
}
for (let v28 = 0; v28 < 5; v28++) {
    const v29 = v3(v2,v28);
    // v29 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
