function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        let v10 = -925827381;
        function v11(v12,v13) {
            const v15 = "toStringTag".slice(v10,1298356475);
            // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        }
        for (let v19 = 0; v19 < 100; v19++) {
            const v20 = v11();
            // v20 = .unknown
        }
        const v21 = v7 + 1;
        // v21 = .primitive
        v7 = v21;
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
