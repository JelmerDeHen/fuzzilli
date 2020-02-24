function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [9007199254740993];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {b:v1,c:v1,d:v1,__proto__:v3,valueOf:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["c", "b", "__proto__", "d", "valueOf"])
let v5 = v3;
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v14 = v5.shift();
            // v14 = .unknown
            let v17 = 0;
            const v18 = v13 + 1;
            // v18 = .primitive
            v13 = v18;
        } while (v13 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v21 = v20;
const v22 = v6(v21);
// v22 = .unknown
const v23 = v6();
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
