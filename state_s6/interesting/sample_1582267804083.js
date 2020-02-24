function main() {
const v2 = {__proto__:1337,valueOf:1000};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            const v15 = v10 + 1;
            // v15 = .primitive
            v10 = v15;
        } while (v10 < 255);
        const v16 = v2.__proto__;
        // v16 = .object()
        const v18 = Symbol.isConcatSpreadable;
        // v18 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v19 = v16[v18];
        // v19 = .unknown
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v22 = v21;
const v23 = v3(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
