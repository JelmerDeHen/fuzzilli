function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [Promise];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {valueOf:v4,toString:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "valueOf"])
const v9 = {toString:v6,__proto__:"number",valueOf:v7,b:v6,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "toString", "length"])
let v10 = 1337;
const v13 = (1337).constructor;
// v13 = .unknown
const v16 = 1337 == 13.37;
// v16 = .boolean
function v17(v18,v19,v20) {
    const v21 = v18.filter(v18,v8);
    // v21 = .unknown
    return v9;
}
function v22(v23,v24) {
    let v31 = 0;
    for (const v32 in "boolean") {
        let v35 = 0;
        do {
            try {
                let v38 = 0;
                function v39(v40,v41) {
                    for (const v43 in "boolean") {
                        let v46 = 0;
                        do {
                            const v48 = [-2164143472,-2164143472];
                            // v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
                            const v50 = [1337,1337,1337,1337];
                            // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
                            const v51 = v48.shift();
                            // v51 = .unknown
                            const v53 = Symbol.toPrimitive;
                            // v53 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                            v53[v53] = v50;
                            const v54 = v46 + 1;
                            // v54 = .primitive
                            v46 = v54;
                        } while (v46 < 8);
                    }
                }
                const v56 = [1337];
                // v56 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
                let v57 = v56;
                const v58 = v39(v57);
                // v58 = .unknown
                do {
                    const v59 = v38 + 1;
                    // v59 = .primitive
                    v38 = v59;
                } while (v38 < 7);
            } catch(v60) {
                let v63 = 0;
            }
            const v67 = v35 + 1;
            // v67 = .primitive
            v35 = v67;
        } while (v35 < 8);
    }
}
const v69 = [1337];
// v69 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v70 = v69;
const v71 = v22(v70);
// v71 = .unknown
}
%NeverOptimizeFunction(main);
main();
