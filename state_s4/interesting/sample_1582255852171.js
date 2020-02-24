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
            // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            const v33 = [1337,1337,1337,1337];
            // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v44 = v43;
const v45 = v14(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
