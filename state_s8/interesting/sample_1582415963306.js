function main() {
const v4 = [Map,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {b:Map,a:512};
// v8 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__"])
const v9 = {constructor:v7,c:v4,__proto__:1337,valueOf:v7,a:"c"};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf", "constructor"])
let v10 = "c";
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            // v19 = .primitive
            v10 = v19;
            const v21 = Symbol.toStringTag;
            // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v22 = Symbol[v21];
            // v22 = .unknown
            const v23 = {getPrototypeOf:v22,get:v22};
            // v23 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
            if (v13) {
            } else {
                v18 = Int8Array;
            }
            if (v12) {
                const v25 = v11();
                // v25 = .unknown
            } else {
            }
        } while (v18 < 8);
    }
    return v6;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v28 = v27;
const v29 = v11(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
