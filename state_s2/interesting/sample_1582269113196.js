function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:Set,c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "c"])
let v11 = 0;
const v14 = [1337,1337,1337,v11];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = {b:2147483647};
// v15 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
function v16(v17,v18) {
    for (const v19 in arguments) {
        for (let v23 = 0; v23 < 100; v23++) {
            const v24 = v16();
            // v24 = .unknown
        }
    }
    try {
        const v26 = JSON.parse(JSON);
        // v26 = .unknown
    } catch(v27) {
    }
}
const v28 = v14.findIndex(v16,v15);
// v28 = .integer
const v29 = v7[522877691];
// v29 = .unknown
const v30 = v16(Set,v11);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();