function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,13.37,Boolean,v4];
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
            const v43 = gc();
            // v43 = .undefined
            v8.valueOf = v31;
            function v44(v45,v46) {
                let v47 = v45;
                try {
                    const v48 = v9.map();
                    // v48 = .unknown
                    v47 = v43;
                } catch(v49) {
                    const v51 = [13.37,13.37,13.37,13.37,13.37];
                    // v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    v47 = 0;
                }
                return v10;
            }
            let v54 = 0;
            do {
                v34 = v25;
                const v55 = v54 + 1;
                // v55 = .primitive
                v54 = v55;
            } while (v54 < 9);
            do {
                const v56 = v42 + 1;
                // v56 = .primitive
                v42 = v56;
            } while (v42 < 3);
            const v57 = v31 + 1;
            // v57 = .primitive
            v31 = v57;
        } while (v31 < 8);
    }
}
const v59 = [1337];
// v59 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v60 = v59;
const v61 = v24(v60);
// v61 = .unknown
const v62 = v24(1337,-828296917);
// v62 = .unknown
}
%NeverOptimizeFunction(main);
main();
