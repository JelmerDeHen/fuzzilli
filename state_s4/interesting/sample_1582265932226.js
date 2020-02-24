function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {constructor:"species"};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
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
            // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
            if (v20) {
            } else {
            }
            v14 = v21;
        } while (v14 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
