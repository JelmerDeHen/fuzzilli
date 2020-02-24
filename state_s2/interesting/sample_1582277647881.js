function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v9 = {__proto__:v7,valueOf:v8,length:v8,b:1337,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "a", "valueOf"])
let v10 = 13.37;
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [13.37,v13];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v17(v18,v19) {
    for (const v21 in "boolean") {
        v14.length = v21;
        Object.d = v21;
        const v24 = gc();
        // v24 = .undefined
        let v26 = 0;
        do {
            let v28 = 0;
            Object.valueOf = v19;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v31 = {};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v34 = [13.37,13.37];
            // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v35 = "string";
            let v37 = 1337;
            const v39 = new Object(v37);
            // v39 = .object()
            const v40 = typeof 13.37;
            // v40 = .string
            const v42 = v40 === "undefined";
            // v42 = .boolean
            let v43 = "string";
            if (v18) {
                const v44 = (0)[13.37];
                // v44 = .unknown
            } else {
                let v47 = 0;
            }
            const v48 = v26 + 1;
            // v48 = .primitive
            v26 = v48;
        } while (v26 < 8);
    }
    return "boolean";
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v51 = v50;
const v52 = v17(v51);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
