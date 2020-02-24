function main() {
function v1(v2,v3) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            for (let v15 = 0; v15 < 8; v15++) {
            }
            function v17(v18,v19) {
                let v22 = 0;
                let v25 = 0;
                const v30 = eval(0);
                // v30 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            }
            const v31 = v11 + 1;
            // v31 = .primitive
            v11 = v31;
        } while (v11 < 8);
    }
    const v34 = [13.37,13.37,13.37,13.37];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v36 = {b:v34,constructor:1337,d:-1107350769};
    // v36 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "__proto__"])
    const v38 = Math.fround(v36);
    // v38 = .number
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v42 = v41;
const v43 = v1(v42);
// v43 = .unknown
const v44 = v1(1024,4.0);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
