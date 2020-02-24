function main() {
let v5 = 0;
function v6(v7,v8) {
    for (let v12 = 0; v12 < 100; v12++) {
        function v13(v14,v15) {
        }
    }
    const v16 = [13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v19 = 0;
    do {
        let v21 = 13.37;
        const v23 = Number.isSafeInteger(v21);
        // v23 = .boolean
        const v26 = eval(1337);
        // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        const v27 = v19 + 1;
        // v27 = .primitive
        v19 = v27;
    } while (v19 < 8);
    const v30 = new Float64Array(16);
    // v30 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
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
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = v37;
const v39 = v6(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
