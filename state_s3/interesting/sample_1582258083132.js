function main() {
let v3 = undefined;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
