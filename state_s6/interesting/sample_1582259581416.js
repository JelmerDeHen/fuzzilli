function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {valueOf:undefined,c:v4,__proto__:v5,b:v2};
// v6 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "b", "valueOf"])
let v7 = v5;
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            const v17 = 9007199254740992 + 1;
            // v17 = .primitive
            const v19 = [1337,1337];
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            const v25 = v7.shift();
            // v25 = .unknown
            const v27 = Symbol.toPrimitive;
            // v27 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v28 = 1024 % 13.37;
            // v28 = .number
            let v31 = 0;
            do {
            } while (v31 >= 7);
            const v32 = v16 + 1;
            // v32 = .primitive
            v16 = v32;
        } while (v16 < 8);
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v35 = v34;
const v36 = v9(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
