function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {a:13.37,c:1337,__proto__:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c"])
const v9 = {e:13.37,constructor:1337,a:v7,b:v6,valueOf:JSON};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "e", "b", "valueOf"])
let v10 = JSON;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
function v16(v17,v18) {
    for (const v20 in "8EfV0UAUvo") {
        const v21 = "species" === v20;
        // v21 = .boolean
        let v24 = 0;
        do {
            let v30 = 0;
            for (let v31 = 0; v31 < 4; v31++) {
            }
            const v32 = v24 + 1;
            // v32 = .primitive
            v24 = v32;
        } while (v24 < 8);
    }
    return v9;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v35 = v34;
const v36 = v16(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
