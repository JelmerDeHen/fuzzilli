function main() {
let v3 = undefined;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {valueOf:1337,c:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__"])
function v10(v11,v12) {
    try {
        const v14 = {get:4.0};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
        const v16 = Object.defineProperty(v6,1000,v14);
        // v16 = .undefined
    } catch(v17) {
    }
}
const v19 = v10(v9);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
