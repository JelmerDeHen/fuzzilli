function main() {
function v11(v12,v13) {
    function v14(v15,v16) {
        const v17 = v15 in v14;
        // v17 = .boolean
        let v30 = 0;
        for (const v31 in "boolean") {
            let v34 = 0;
            do {
                let v37 = 0;
                const v39 = [1337,1337,1337,1337];
                // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v41 = Object.freeze(v39);
                // v41 = .undefined
                do {
                    const v42 = v37 + 1;
                    // v42 = .primitive
                    v37 = v42;
                } while (v37 < 7);
                const v48 = v34 + 1;
                // v48 = .primitive
                v34 = v48;
            } while (v34 < 8);
        }
        const v49 = v30 + 1;
        // v49 = .primitive
        v30 = v49;
    }
    const v52 = [1337];
    // v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v53 = v52;
    const v54 = v14(v53);
    // v54 = .unknown
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v57 = v56;
const v58 = v11(v57);
// v58 = .unknown
const v62 = 13.37 << Array;
// v62 = .integer
const v63 = "pvU0UUjoya".codePointAt(v62);
// v63 = .integer
const v64 = Array(v63);
// v64 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v121 = eval(1337);
// v121 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();