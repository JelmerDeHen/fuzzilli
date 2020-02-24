function main() {
let v3 = undefined;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {valueOf:1337,c:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf"])
function v10(v11,v12) {
    try {
        const v14 = {get:4.0};
        // v14 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
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
