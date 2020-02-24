function main() {
let v5 = 0;
function v6(v7,v8) {
    for (let v12 = 0; v12 < 100; v12++) {
        function v13(v14,v15) {
        }
    }
    const v16 = [13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v19 = 0;
    do {
        let v21 = 13.37;
        const v23 = Number.isSafeInteger(v21);
        // v23 = .boolean
        const v26 = eval(1337);
        // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        const v27 = v19 + 1;
        // v27 = .primitive
        v19 = v27;
    } while (v19 < 8);
    const v30 = new Float64Array(16);
    // v30 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
    let v31 = v30;
    const v34 = new Proxy(v31,Object);
    // v34 = .unknown
    if (v8) {
    } else {
        const v35 = v6(v5,v16);
        // v35 = .unknown
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v38 = v37;
const v39 = v6(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
