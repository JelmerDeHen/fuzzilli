function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            function v14(v15,v16) {
                const v19 = eval(1337);
                // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            }
            for (let v24 = 0; v24 < 100; v24++) {
                const v25 = v14("boolean",1337);
                // v25 = .unknown
            }
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            const v30 = [];
            // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v31 = "function";
            let v34 = 0;
            v30.valueOf = v5;
            const v35 = v5 - v6;
            // v35 = .number
            const v36 = "boolean" && v14;
            // v36 = .boolean
            do {
                const v37 = v34 + 1;
                // v37 = .primitive
                v34 = v37;
            } while (v34 < 7);
            const v38 = v34 * 13.37;
            // v38 = .number
            v30[v38] = v31;
            const v39 = v11 + 1;
            // v39 = .primitive
            v11 = v39;
        } while (v11 < 8);
    }
    return v5;
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v42 = v41;
const v43 = v4(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
