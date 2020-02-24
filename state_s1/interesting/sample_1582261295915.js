function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = eval();
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
        do {
            let v21 = 0;
            const v22 = v21 + 1;
            // v22 = .primitive
            v21 = v22;
            const v23 = v14 + 1;
            // v23 = .primitive
            v14 = v23;
            let v32 = 0;
            const v33 = v32 + 1;
            // v33 = .primitive
            const v39 = eval(1337);
            // v39 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            v32 = v33;
            const v40 = Math.hypot(-1970853828,13.37,1337,DataView);
            // v40 = .number
        } while (v14 < 8);
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v43 = v42;
const v44 = v7(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
