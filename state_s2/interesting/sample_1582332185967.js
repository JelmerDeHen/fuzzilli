function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [-2147483649,eval,"MAX_VALUE",v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:"MAX_VALUE",c:13.37,b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "b"])
const v9 = {__proto__:v7,d:1337,b:13.37,a:v4};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a", "d"])
let v10 = -2147483649;
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v14(v15,v16) {
    function v19(v20,v21) {
        for (const v23 in v16) {
            let v26 = -128;
            const v27 = 1337 % 5;
            // v27 = .number
            while (v26 < 5) {
                const v28 = v26 + 1;
                // v28 = .primitive
                v26 = v28;
            }
        }
        return v10;
    }
    const v31 = gc(...arguments);
    // v31 = .undefined
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v34 = v33;
    const v35 = v19(v34);
    // v35 = .unknown
    const v36 = gc(...arguments);
    // v36 = .undefined
    const v37 = arguments + 1;
    // v37 = .primitive
    let v39 = 0;
    while (v39 < 1337) {
        const v40 = v39 + 1;
        // v40 = .primitive
        v39 = v40;
    }
}
const v41 = v13.sort(v14);
// v41 = .undefined
}
%NeverOptimizeFunction(main);
main();
