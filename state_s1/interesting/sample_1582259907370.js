function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    // v34 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    v11 = v31;
}
}
%NeverOptimizeFunction(main);
main();
