function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {toString:v4,b:"PI",valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "b", "__proto__", "valueOf"])
const v8 = {b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            const v19 = v8.b;
            // v19 = .unknown
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 < 7);
            const v22 = v16 + 1;
            // v22 = .primitive
            v16 = v22;
        } while (v16 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v25 = v24;
const v26 = v9(v25);
// v26 = .unknown
v24.__proto__ = v8;
const v27 = "PI" & -3729873761;
// v27 = .integer
const v28 = v9(13.37,v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
