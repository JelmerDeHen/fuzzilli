function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37,"string",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:65536,toString:65536,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "d", "__proto__"])
const v9 = {a:v6,d:1337,toString:13.37,c:v7,valueOf:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "c", "valueOf", "a"])
let v10 = v9;
function v11(v12,v13) {
    const v20 = [3156875969,3156875969,1337,DataView];
    // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v27 = 0;
    for (const v28 in "boolean") {
        let v31 = 0;
        do {
            let v34 = 0;
            do {
                const v35 = v34 + 1;
                // v35 = .primitive
                v34 = v35;
            } while (v34 < 7);
            const v42 = v31 + 1;
            // v42 = .primitive
            v31 = v42;
        } while (v31 < 8);
        const v43 = v20.pop();
        // v43 = .unknown
        const v46 = [13.37,13.37];
        // v46 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v48 = [1337,1337];
        // v48 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v49 = {};
        // v49 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v50 = {};
        // v50 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v51 = {valueOf:v48,__proto__:Array,b:v46,toString:v49,constructor:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "constructor", "toString"], withMethods: ["__proto__"])
    }
    const v52 = v27 + 1;
    // v52 = .primitive
    v27 = v52;
    return v6;
}
const v55 = [1337];
// v55 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v56 = v55;
const v57 = v11(v56);
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
