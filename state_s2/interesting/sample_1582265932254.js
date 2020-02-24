function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {constructor:"species"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
function v4(v5,v6) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v16 = 0;
            const v19 = v10 - 1;
            // v19 = .primitive
            const v20 = 0 != v19;
            // v20 = .boolean
            v2.__proto__ = 100;
            const v21 = v14 + 1;
            // v21 = .primitive
            const v22 = {c:v2,valueOf:3,__proto__:v3};
            // v22 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__"])
            if (v20) {
            } else {
            }
            v14 = v21;
        } while (v14 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v25 = v24;
const v26 = v4(v25);
// v26 = .unknown
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
}
%NeverOptimizeFunction(main);
main();
