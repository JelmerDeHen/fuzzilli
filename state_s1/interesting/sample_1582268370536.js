function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = 1337 | v5;
// v7 = .integer
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = [1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = 0;
const v14 = {toString:v10,length:v10,__proto__:1337,a:13.37,constructor:"split"};
// v14 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "length", "__proto__", "a"])
const v15 = {constructor:v8,valueOf:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__"])
let v16 = v15;
function v17(v18,v19) {
    for (const v21 in "boolean") {
        let v24 = 0;
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
        } while (v28 < 512);
        function v31(v32,v33) {
            let v35 = v32;
            const v36 = !v35;
            // v36 = .boolean
            const v37 = "object" + v36;
            // v37 = .primitive
        }
        for (let v41 = 0; v41 < 100; v41++) {
            const v42 = v31();
            // v42 = .unknown
        }
        with ("e") {
        }
    }
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v45 = v44;
const v46 = v17(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
