function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "c", "a"])
const v9 = {c:String};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
let v10 = v4;
function v12(v13,v14) {
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            const v28 = v22 + 1;
            // v28 = .primitive
            v22 = v28;
        } while (v22 < 8);
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
        } while (v31 < 4);
        const v33 = typeof 4;
        // v33 = .string
        const v35 = v33 === "number";
        // v35 = .boolean
        let v36 = v8;
        if (v14) {
            const v37 = v13[v13];
            // v37 = .unknown
            v36 = v8;
        } else {
            const v39 = [1337];
            // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            v36 = v18;
        }
        let v42 = 0;
        do {
            let v43 = 4;
            if (v35) {
                let v44 = v43;
                v43 = v9;
            } else {
                v10.toString = v12;
            }
            const v45 = v42 + 1;
            // v45 = .primitive
            v42 = v45;
        } while (v42 < 4);
    }
    const v46 = v18 + 1;
    // v46 = .primitive
    v18 = v46;
    for (const v48 in "object") {
    }
    return 928271515;
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v52 = v51;
const v53 = v12(v52);
// v53 = .unknown
const v54 = v12(1024,4.0);
// v54 = .unknown
const v58 = ~1337;
// v58 = .boolean
v6[1] = v52;
const v59 = v54 >> v10;
// v59 = .integer
v52.__proto__ = v4;
const v60 = v12(v51,v53);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
