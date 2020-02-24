function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {c:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = {__proto__:eval,constructor:v8,length:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["__proto__"])
let v10 = v7;
const v12 = [13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v16 = 0;
let v26 = 0;
const v31 = 1337 || 0;
// v31 = .boolean
function v32(v33,v34) {
    return 8;
    const v38 = 13.37 * v33;
    // v38 = .number
    v33.valueOf = v34;
    const v39 = (1337)[v34];
    // v39 = .unknown
    const v42 = {__proto__:536870912};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v42) {
    }
}
function v43(v44,v45) {
    for (const v47 in "boolean") {
        let v50 = 0;
        function v51(v52,v53) {
            for (const v55 in "boolean") {
                let v58 = 0;
                do {
                    let v61 = 0;
                    do {
                    } while (v61 < 7);
                } while (v58 < 8);
            }
        }
        do {
        } while (v50 < 8);
    }
}
delete v12[1];
const v62 = v12.pop();
// v62 = .unknown
}
%NeverOptimizeFunction(main);
main();
