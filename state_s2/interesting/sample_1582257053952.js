function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "c", "a"])
const v9 = {c:String};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
let v10 = v4;
let v12 = 0;
let v15 = 2180612948;
function v16(v17,v18) {
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v22(v23,v24) {
        let v27 = 0;
        Array.prototype = 1337;
        do {
            if (v18) {
            } else {
                const v30 = v16(v15,v21);
                // v30 = .unknown
            }
            const v31 = v27 + 1;
            // v31 = .primitive
            v27 = v31;
        } while (v27 < 9);
        return 1337;
    }
    const v32 = v22();
    // v32 = .unknown
    for (const v33 in "boolean") {
        let v36 = 0;
        do {
            const v37 = v36 + 1;
            // v37 = .primitive
            v36 = v37;
            v17.valueOf = v17;
        } while (v36 < 7);
    }
    return v32;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v40 = v39;
const v41 = v16(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
