function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v11 = 0;
        const v13 = v11 + 1;
        // v13 = .primitive
        v11 = v13;
        let v14 = 0;
        do {
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            const v32 = v14 + 1;
            // v32 = .primitive
            v14 = v32;
        } while (v14 < 8);
        const v33 = String.fromCharCode(3971043784);
        // v33 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = v35;
const v37 = v2(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
