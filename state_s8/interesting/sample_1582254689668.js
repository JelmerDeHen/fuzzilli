function main() {
const v4 = [-846426.7412180711,-846426.7412180711,-846426.7412180711];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:-846426.7412180711,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "__proto__", "d", "e"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "constructor", "d"])
let v10 = v6;
function v12(v13,v14) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            let v28 = 0;
            do {
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
            } while (v28 < 7);
            let v32 = 0;
            const v36 = v25 + 1;
            // v36 = .primitive
            v25 = v36;
        } while (v25 < 8);
    }
    const v37 = v21 + 1;
    // v37 = .primitive
    v21 = v37;
    return "boolean";
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v41 = v40;
const v42 = v12(v41);
// v42 = .unknown
const v43 = v12();
// v43 = .unknown
const v44 = gc();
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
