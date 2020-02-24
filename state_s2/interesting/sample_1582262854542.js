function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6,"undefined"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:v7,length:"undefined",d:v7,e:13.37,toString:v6,valueOf:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "length", "e", "valueOf", "__proto__", "toString"])
const v9 = {__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = "undefined";
const v13 = [13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v14(v15,v16) {
    for (const v19 in "boolean") {
        const v24 = [13.37,13.37];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v25 = v24[1024];
        // v25 = .unknown
        const v26 = v25 / 1337;
        // v26 = .number
        let v27 = 0;
        let v30 = 0;
        do {
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
        } while (v30 < 6);
        let v32 = 1337;
        v32 = v26;
        do {
            const v34 = "boolean"["pvU0UUjoya"];
            // v34 = .unknown
            const v36 = {get:v14};
            // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v38 = Object.defineProperty(v6,"c",v36);
            // v38 = .undefined
            const v39 = v15.byteLength;
            // v39 = .unknown
            for (const v40 of "pvU0UUjoya") {
            }
            const v41 = v27 + 1;
            // v41 = .primitive
            v27 = v41;
        } while (v27 < 8);
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v44 = v43;
const v45 = v14(v44);
// v45 = .unknown
const v46 = v14(13.37,v10);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
