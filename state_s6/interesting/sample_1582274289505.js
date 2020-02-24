function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {e:v4,length:1337,toString:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "toString"])
const v9 = {valueOf:v8,a:v7,e:-1073741824,length:String,c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "e", "c"], withMethods: ["length"])
let v10 = String;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v18 = "match";
const v19 = typeof 4096;
// v19 = .string
const v21 = v19 === "function";
// v21 = .boolean
let v22 = v15;
v22 = v18;
const v23 = {__proto__:4096,constructor:isFinite,a:v15,e:"match",d:4096};
// v23 = .object(ofGroup: Object, withProperties: ["d", "e", "a", "__proto__"], withMethods: ["constructor"])
let v24 = v23;
function v25(v26,v27) {
    let v29 = 0;
    const v30 = v29 + 1;
    // v30 = .primitive
    const v34 = [13.37];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v36 = {constructor:-4294967295,length:1337,__proto__:v34};
    // v36 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
    for (const v37 in v36) {
    }
    let v40 = 0;
    for (const v41 in "boolean") {
        let v43 = v40;
        if (v26) {
            const v44 = Number.valueOf;
            // v44 = .unknown
            v43 = v44;
        } else {
            const v45 = v24.constructor(1337);
            // v45 = .unknown
            v43 = v45;
        }
        const v46 = 0 >= 0;
        // v46 = .boolean
        v23[v22] = v46;
        let v48 = 0;
        do {
            let v51 = 0;
            do {
                const v52 = v51 + 1;
                // v52 = .primitive
                v51 = v52;
            } while (v51 < 7);
            let v54 = 0;
            const v55 = v48 + 1;
            // v55 = .primitive
            v48 = v55;
        } while (v48 < 8);
    }
    return v23;
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v58 = v57;
const v59 = v25(v58);
// v59 = .unknown
const v60 = v25();
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
