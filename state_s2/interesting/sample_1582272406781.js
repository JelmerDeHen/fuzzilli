function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v4 = 0;
do {
    function v6(v7,v8) {
        try {
            const v9 = {set:v8,get:v6};
            // v9 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
            const v11 = Object.defineProperty(v1,100,v9);
            // v11 = .undefined
        } catch(v12) {
        }
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v15 = v14;
    const v16 = v6(v15);
    // v16 = .unknown
    const v17 = v4 + 1;
    // v17 = .primitive
    v4 = v17;
} while (v4 != 7);
}
%NeverOptimizeFunction(main);
main();
