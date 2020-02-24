function main() {
let v2 = 0;
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            const v26 = [1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            const v33 = [1337,1337,1337,1337];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v34 = v26.shift();
            // v34 = .unknown
            const v36 = Symbol.toPrimitive;
            // v36 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v37 = 1024 % 13.37;
            // v37 = .number
            let v40 = 0;
            do {
            } while (v40 >= 7);
            const v41 = v21 + 1;
            // v41 = .primitive
            v21 = v41;
        } while (v21 < 8);
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v44 = v43;
const v45 = v14(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
