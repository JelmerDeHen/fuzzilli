function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = ["size","size",1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {b:v4,a:v7,valueOf:"size",e:v6,constructor:v7};
// v8 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "b", "a", "constructor", "__proto__"])
const v9 = {d:v4,valueOf:-1,toString:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "toString"])
let v10 = Reflect;
function v12(v13,v14) {
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            for (const v24 of "pvU0UUjoya") {
            }
            const v25 = v22 + 1;
            // v25 = .primitive
            v22 = v25;
        } while (v22 < 8);
    }
    let v28 = 0;
    do {
        const v29 = v10[255];
        // v29 = .unknown
        const v30 = v28 + 1;
        // v30 = .primitive
        v28 = v30;
    } while (v28 < 0);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v34 = v33;
const v35 = v12(v34);
// v35 = .unknown
const v36 = v12(1024,4.0);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
