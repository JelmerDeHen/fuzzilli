function main() {
const v4 = [4.0,4.0,4.0,4.0,4.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,4.0,Boolean,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {__proto__:Boolean,valueOf:v6,e:v4,d:1337,b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "valueOf", "d"], withMethods: ["__proto__"])
const v9 = {constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
let v10 = 1075001128;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
function v24(v25,v26) {
    for (const v28 in "boolean") {
        let v31 = 0;
        do {
            let v34 = 0;
            do {
                const v35 = "object" + 1;
                // v35 = .primitive
                v34 = v35;
            } while (v34 < 7);
            let v38 = 0;
            const v39 = v38 + 1;
            // v39 = .primitive
            v38 = v39;
            let v42 = 0;
            do {
                const v43 = v42 + 1;
                // v43 = .primitive
                v42 = v43;
            } while (v42 < 3);
            const v44 = v31 + 1;
            // v44 = .primitive
            v31 = v44;
        } while (v31 < 8);
    }
    return 1;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v47 = v46;
const v48 = v24(v47);
// v48 = .unknown
const v49 = gc();
// v49 = .undefined
const v50 = v24(10,-828296917);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
