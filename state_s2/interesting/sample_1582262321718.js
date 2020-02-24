function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6,"undefined"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:v7,length:"undefined",d:v7,e:13.37,toString:v6,valueOf:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "toString", "length", "d"])
const v9 = {__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = "undefined";
function v13(v14,v15) {
    const v16 = v14 in v13;
    // v16 = .boolean
    for (const v18 in "boolean") {
        let v21 = 0;
        const v23 = [1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        v23.length = 1337;
        const v25 = [1337];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v26 = v25;
        let v28 = undefined;
        let v35 = 0;
        let v38 = 0;
        let v41 = 0;
        for (const v42 in v23) {
        }
        do {
            const v43 = v21 + 1;
            // v43 = .primitive
            v21 = v43;
        } while (v21 < 8);
    }
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v46 = v45;
const v47 = v13(v46);
// v47 = .unknown
const v48 = v46.reduce(v13,NaN);
// v48 = .unknown
let v51 = 0;
do {
    const v52 = v13(v51);
    // v52 = .unknown
    const v53 = v51 + 1;
    // v53 = .primitive
    v51 = v53;
} while (v51 < 10);
}
%NeverOptimizeFunction(main);
main();
