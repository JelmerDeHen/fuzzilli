function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [Uint8ClampedArray,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {d:-1024,c:v7,toString:v6,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "c", "d"])
const v9 = {c:v8,e:v7,toString:v6};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "c", "e", "__proto__"])
let v10 = Uint8ClampedArray;
const v12 = [13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            for (let v24 = 0; v24 < 8; v24++) {
            }
            const v25 = v20 + 1;
            // v25 = .primitive
            v20 = v25;
            const v28 = [1337,1337,1337,1337];
            // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v30 = [1337];
            // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            for (const v33 in "MAX_SAFE_INTEGER") {
                let v36 = 0;
                const v39 = v28.push(8,v36,7,0,-2908695906);
                // v39 = .integer
                const v40 = v36 + 1;
                // v40 = .primitive
            }
            const v42 = Symbol.species;
            // v42 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            RegExp[v42] = v30;
        } while (v20 < 8);
    }
    const v45 = {b:v12,constructor:1337,d:-1107350769};
    // v45 = .object(ofGroup: Object, withProperties: ["constructor", "d", "b", "__proto__"])
    const v47 = Math.fround(v45);
    // v47 = .number
    return v13;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v50 = v13(v49);
// v50 = .unknown
delete (-1024)[v49];
v6.valueOf = v50;
let v53 = 0;
do {
    const v55 = v53 + 1;
    // v55 = .primitive
    v53 = v55;
} while (v53 < 9);
}
%NeverOptimizeFunction(main);
main();
