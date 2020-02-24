function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    const v7 = [1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v8 = {valueOf:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
    const v10 = {e:v8,d:"d"};
    // v10 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
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
    // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v24 = v23;
    const v25 = v11(v24);
    // v25 = .unknown
}
const v26 = v1.sort(v2);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
