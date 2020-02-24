function main() {
const v2 = {constructor:"species"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
function v4(v5,v6) {
    let v12 = 0;
    let v15 = 0;
    const v18 = eval(1337);
    // v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            const v27 = v22 + 1;
            // v27 = .primitive
            v22 = v27;
        } while (v22 < 8);
    }
    const v28 = "boolean".padEnd(1337,NaN);
    // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    const v29 = v28 === v28;
    // v29 = .boolean
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v32 = v31;
const v33 = v4(v32);
// v33 = .unknown
const v34 = v4(v2);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
