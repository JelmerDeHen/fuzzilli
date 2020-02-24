function main() {
let v2 = -65536;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        const v11 = [13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v13 = [1337,1337,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v14 = [1337,16,13.37,v13];
        // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v15 = {valueOf:v14,c:v11};
        // v15 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf"])
        const v17 = Math.cbrt(v15);
        // v17 = .number
        let v19 = 0;
        const v20 = v13.indexOf(1337,v19);
        // v20 = .integer
        const v23 = eval();
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
