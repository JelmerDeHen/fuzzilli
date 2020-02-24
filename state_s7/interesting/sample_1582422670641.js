function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [v3,v1];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            const v16 = Symbol.toStringTag;
            // v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            const v17 = Symbol[v16];
            // v17 = .unknown
            const v18 = {getPrototypeOf:v17,get:v17};
            // v18 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "__proto__"])
            const v21 = {e:13.37,d:"d"};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
            let v24 = -128;
            const v25 = v21 === 0;
            // v25 = .boolean
            const v26 = ~v24;
            // v26 = .boolean
            const v27 = v25 % v26;
            // v27 = .number
            const v28 = -128 + v27;
            // v28 = .primitive
        } while (v13 < 8);
    }
}
const v29 = v6(v4,-128);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
