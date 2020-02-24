function main() {
let v3 = undefined;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {valueOf:1337,c:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
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
