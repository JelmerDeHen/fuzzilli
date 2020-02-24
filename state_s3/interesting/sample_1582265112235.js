function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {__proto__:"hasInstance",d:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = {__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = v5;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = Math.pow(v11);
            // v15 = .number
            v6 = v15;
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 3);
            const v20 = v14 + 1;
            // v20 = .primitive
            v14 = v20;
        } while (v14 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
const v28 = [3156875969,3156875969,127,DataView];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v29 = {e:DataView,constructor:127,valueOf:127,d:v28};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "e", "valueOf"])
let v36 = 0;
let v42 = 0;
let v45 = 0;
let v52 = 0;
const v53 = v52 + 1;
// v53 = .primitive
v52 = v53;
}
%NeverOptimizeFunction(main);
main();
