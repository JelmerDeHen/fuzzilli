function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["MAX_VALUE",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:"MAX_VALUE",length:v6,c:v7};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "c"])
const v9 = {constructor:v4,c:13.37,d:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "d"])
let v10 = v8;
let v13 = 0;
do {
    const v14 = v13 + 1;
    // v14 = .primitive
    function v15(v16,v17) {
        function v24(v25,v26) {
            const v27 = v25 in v24;
            // v27 = .boolean
            return v13;
        }
        const v29 = [1337];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v30 = v29;
        const v31 = v24(v30);
        // v31 = .unknown
        let v32 = 0;
        for (const v33 in "boolean") {
            let v36 = 0;
            do {
                const v39 = 0 << v10;
                // v39 = .integer
                let v40 = 0;
                const v41 = v40 + 1;
                // v41 = .primitive
                v40 = v41;
                let v44 = 0;
                const v45 = v36 + 1;
                // v45 = .primitive
                v36 = v45;
            } while (v36 < 8);
        }
        const v46 = v32 + 1;
        // v46 = .primitive
        v32 = v46;
        for (const v48 in "object") {
        }
        return 10;
    }
    const v50 = [1337];
    // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v51 = v50;
    const v52 = v15(v51);
    // v52 = .unknown
    const v53 = v8 - -268435456;
    // v53 = .number
    const v54 = v10.b;
    // v54 = .unknown
    v13 = v14;
    let v57 = 0;
    const v58 = v57 + 1;
    // v58 = .primitive
    v57 = v58;
    const v61 = gc();
    // v61 = .undefined
    let v66 = 0;
    for (let v70 = 0; v70 < 0; v70++) {
        const v71 = v70 instanceof 0;
        // v71 = .boolean
    }
    const v72 = v66 + 1;
    // v72 = .primitive
    v66 = v72;
} while (v13 < 7);
}
%NeverOptimizeFunction(main);
main();
