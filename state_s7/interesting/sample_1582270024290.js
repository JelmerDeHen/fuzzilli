function main() {
let v1 = 1337;
let v3 = undefined;
let v6 = -128;
do {
    const v7 = v6 + 1;
    // v7 = .primitive
    let v10 = 0;
    do {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v13 = v12;
        let v15 = undefined;
        const v18 = new Uint16Array(19873);
        // v18 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        const v21 = Symbol.isConcatSpreadable;
        // v21 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        const v22 = v21.description;
        // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        const v23 = eval(v22);
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        const v24 = v10 + 1;
        // v24 = .primitive
        v10 = v24;
    } while (v10 <= 3);
    v6 = v7;
} while (v6 < -2);
}
%NeverOptimizeFunction(main);
main();
