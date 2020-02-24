function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v10 = [1337,1337];
            // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            delete Array.length;
            const v13 = [1337,1337,1337,1337];
            // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v14 = v10.shift();
            // v14 = .unknown
            const v16 = Symbol.toPrimitive;
            // v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v16[v16] = v13;
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 7);
            const v21 = v8 + 1;
            // v21 = .primitive
            v8 = v21;
        } while (v8 < 8);
    }
    return "boolean";
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
const v26 = v1();
// v26 = .unknown
let v33 = 0;
let v36 = 0;
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
let v46 = 0;
const v50 = v36 + 1;
// v50 = .primitive
v36 = v50;
const v51 = v33 + 1;
// v51 = .primitive
v33 = v51;
let v55 = 0;
const v56 = v55 + 1;
// v56 = .primitive
v55 = v56;
}
%NeverOptimizeFunction(main);
main();
