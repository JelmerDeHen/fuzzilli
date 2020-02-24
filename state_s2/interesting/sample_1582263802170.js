function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
(127)[7] = 127;
const v9 = {__proto__:13.37,length:v7};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v10 = {__proto__:v9,length:v6,valueOf:3356252410};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
let v11 = v4;
const v17 = [13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = isFinite(3356252410);
// v19 = .boolean
const v20 = [];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v21 = {b:"split",__proto__:v17,constructor:1337};
// v21 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor"])
function v22(v23,v24) {
    const v27 = {get:isFinite,set:Number};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v29 = Object.defineProperty(v21,-4070345981,v27);
    // v29 = .undefined
    const v31 = v4.__proto__;
    // v31 = .object()
    function v32(v33,v34) {
        for (const v36 in "boolean") {
            let v39 = 0;
            do {
                const v40 = {};
                // v40 = .object(ofGroup: Object, withProperties: ["__proto__"])
                for (const v41 in v40) {
                }
                let v44 = 0;
                do {
                    const v45 = v44 + 1;
                    // v45 = .primitive
                    v44 = v45;
                } while (v44 < 7);
                const v46 = v39 + 1;
                // v46 = .primitive
                v39 = v46;
            } while (v39 < 8);
        }
    }
    const v48 = [1337];
    // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v49 = v48;
    const v50 = v32(v49);
    // v50 = .unknown
    for (const v51 of v17) {
        for (let v55 = 0; v55 < 8; v55++) {
            const v56 = "toString".constructor;
            // v56 = .function()
        }
    }
    const v57 = v20.map(Number,v21);
    // v57 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
for (let v61 = 0; v61 < 100; v61++) {
    const v62 = v22();
    // v62 = .unknown
}
for (let v66 = 0; v66 < 100; v66++) {
}
}
%NeverOptimizeFunction(main);
main();
