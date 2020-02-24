function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v2(v3,v4) {
    const v7 = [1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v8 = {valueOf:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
    const v10 = {e:v8,d:"d"};
    // v10 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
    function v11(v12,v13) {
        let v17 = -128;
        while (v17 < 5) {
            const v18 = v10 <= 0;
            // v18 = .boolean
            const v19 = v17 + 1;
            // v19 = .primitive
            const v20 = typeof 13.37;
            // v20 = .string
            if (v12) {
            } else {
                v17 = v20;
            }
            const v21 = v18 + v17;
            // v21 = .primitive
            v17 = v19;
        }
    }
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v24 = v23;
    const v25 = v11(v24);
    // v25 = .unknown
}
const v26 = v1.sort(v2);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
