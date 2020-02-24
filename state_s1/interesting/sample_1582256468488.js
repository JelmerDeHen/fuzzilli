function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v14 = {};
            // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
            let v17 = 0;
            do {
                const v18 = {b:1337,a:0,e:v12,length:7,c:0,constructor:v14};
                // v18 = .object(ofGroup: Object, withProperties: ["constructor", "a", "b", "__proto__", "length", "c", "e"])
            } while (v17 < 0);
            const v19 = v12 + 1;
            // v19 = .primitive
            v12 = v19;
        } while (v12 < 8);
        for (const v21 in "replace") {
        }
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v24 = v23;
const v25 = v5(v24);
// v25 = .unknown
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = v5(v3);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
