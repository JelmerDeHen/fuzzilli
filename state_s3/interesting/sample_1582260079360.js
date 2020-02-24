function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "length", "__proto__"])
let v4 = v3;
let v10 = 0;
const v11 = ["eeeRbEqfAO",1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v12(v13,v14) {
    const v16 = v4[v13];
    // v16 = .unknown
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            v23 = v24;
            const v25 = v20 + 1;
            // v25 = .primitive
            v20 = v25;
        } while (v20 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v28 = v27;
const v29 = v12(v28);
// v29 = .unknown
const v30 = v11.forEach(v12,"eeeRbEqfAO");
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
