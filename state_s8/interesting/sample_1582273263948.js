function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {__proto__:v4,valueOf:v2,length:"string",constructor:13.37,d:1337,a:v4,toString:v4,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "a", "c", "__proto__", "d", "length", "valueOf", "constructor"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v21 = {valueOf:"string",length:13.37,d:127,e:127};
            // v21 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "length", "d"])
            let v22 = v21;
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            const v24 = v22[3];
            // v24 = .unknown
            const v26 = [13.37,13.37,13.37];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            function v27(v28,v29) {
                if (v24) {
                } else {
                }
                return v7;
            }
            let v30 = v26;
            const v31 = v27(v30);
            // v31 = .unknown
            const v32 = v13 + 1;
            // v32 = .primitive
            v13 = v32;
        } while (v13 < 8);
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v6(v35);
// v36 = .unknown
const v37 = v6(v6);
// v37 = .unknown
const v38 = v6(13.37,v5);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
