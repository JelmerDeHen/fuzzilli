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
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            const v33 = [1337,1337,1337,1337];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v34 = v26.shift();
            // v34 = .unknown
            const v36 = Symbol.toPrimitive;
            // v36 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v44 = v43;
const v45 = v14(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
