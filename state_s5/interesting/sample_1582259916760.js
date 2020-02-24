function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
    // v34 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    v11 = v31;
}
}
%NeverOptimizeFunction(main);
main();
