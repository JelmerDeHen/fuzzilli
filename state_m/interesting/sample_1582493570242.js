function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        try {
            const v15 = String.fromCharCode(1.7976931348623157e+308,-3789366927);
            // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            const v16 = Object(v15);
            // v16 = .object()
            const v17 = Object(1337,0,v6,-3789366927,v16);
            // v17 = .object()
            const v18 = v15 + 1;
            // v18 = .primitive
            const v19 = v17.b("boolean");
            // v19 = .unknown
            const v20 = v18 >> undefined;
            // v20 = .integer
        } catch(v21) {
        }
    }
}
const v22 = v3.forEach(v4,"KQnpbKHug8");
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();