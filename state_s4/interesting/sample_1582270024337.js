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
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v13 = v12;
        let v15 = undefined;
        const v18 = new Uint16Array(19873);
        // v18 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        const v21 = Symbol.isConcatSpreadable;
        // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v22 = v21.description;
        // v22 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        const v23 = eval(v22);
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        const v24 = v10 + 1;
        // v24 = .primitive
        v10 = v24;
    } while (v10 <= 3);
    v6 = v7;
} while (v6 < -2);
}
%NeverOptimizeFunction(main);
main();
