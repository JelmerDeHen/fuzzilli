function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {e:13.37,d:1337,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "d"])
function v6(v7,v8) {
    const v9 = v7 in v6;
    // v9 = .boolean
    const v14 = [3156875969,3156875969,1337,DataView];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v15 = {e:DataView,constructor:1337,valueOf:1337,d:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "valueOf", "d"])
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v24 = 0;
    for (const v25 in "boolean") {
        let v28 = 0;
        do {
            let v31 = 0;
            do {
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
            } while (v31 < 7);
            let v35 = 0;
            const v39 = v28 + 1;
            // v39 = .primitive
            v28 = v39;
        } while (v28 < 8);
    }
    const v40 = v24 + 1;
    // v40 = .primitive
    v24 = v40;
    const v41 = {};
    // v41 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v43 = new Proxy(v3,v41);
    // v43 = .unknown
    for (const v44 of v21) {
        const v45 = "boolean".indexOf(3,1337);
        // v45 = .integer
    }
    v4.c = 1;
    v4[-65537] = "boolean";
    const v46 = 13.37 == v9;
    // v46 = .boolean
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v51 = v50;
const v52 = v6(v51);
// v52 = .unknown
const v53 = v6(1024,4.0);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
