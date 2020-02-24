function main() {
function v1(v2,v3) {
    for (let v11 = 0; v11 < 100; v11++) {
        for (const v13 in "boolean") {
            const v16 = Symbol.toPrimitive;
            // v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            Symbol[v16] = Symbol;
            const v18 = [13.37,13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            Reflect[Symbol] = v18;
        }
    }
    for (const v19 in "boolean") {
        const v21 = gc();
        // v21 = .undefined
        let v24 = 0;
        const v26 = v24 + 1;
        // v26 = .primitive
        v24 = v26;
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
const v32 = v1(1024,4.0);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
