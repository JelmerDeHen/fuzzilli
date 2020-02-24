function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {b:v3,a:v3,__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b"])
for (let v8 = 0; v8 < 100; v8++) {
    function v9(v10,v11) {
        let v20 = 0;
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
        const v25 = 1337 == 13.37;
        // v25 = .boolean
        if (v25) {
            let v28 = 0;
            do {
            } while (v28 < 7);
            for (let v32 = 0; v32 < 2; v32++) {
                for (const v33 of v4) {
                }
            }
            for (const v35 in "object") {
            }
            function v36(v37,v38,v39,v40,v41) {
            }
        } else {
        }
        let v44 = 0;
        const v45 = v44 + 1;
        // v45 = .primitive
        v44 = v45;
        let v48 = 0;
        const v49 = v48 + 1;
        // v49 = .primitive
        v48 = v49;
    }
    const v51 = [1337];
    // v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v52 = v51;
    const v53 = v9(v52);
    // v53 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
