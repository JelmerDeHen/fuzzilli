function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        let v10 = -925827381;
        function v11(v12,v13) {
            const v15 = "toStringTag".slice(v10,1298356475);
            // v15 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
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
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
