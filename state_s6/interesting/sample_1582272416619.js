function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
