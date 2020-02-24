function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v4 = v3;
let v6 = undefined;
for (const v8 in "boolean") {
    let v11 = 0;
    function v12(v13,v14) {
        let v17 = 0;
        do {
            const v18 = v17 + 1;
            // v18 = .primitive
            for (let v22 = 0; v22 < 3; v22++) {
                for (const v24 in "object") {
                }
                let v25 = v4;
                v25 = v1;
            }
            v17 = v18;
        } while (v17 < 3);
    }
    let v28 = 0;
    const v29 = v12(v12);
    // v29 = .unknown
    const v30 = v28 + 1;
    // v30 = .primitive
    v28 = v30;
    const v31 = v11 + 1;
    // v31 = .primitive
    const v34 = eval(1337);
    // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    v11 = v31;
}
}
%NeverOptimizeFunction(main);
main();
