function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        const v8 = [1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        for (const v9 of v8) {
            function v14(v15,v16) {
                const v19 = [];
                // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v20 = {valueOf:v19,length:13.37,d:127,e:127};
                // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "length", "valueOf", "d"])
                let v21 = v20;
            }
            const v22 = new v14();
            // v22 = .object()
            const v23 = {c:"boolean",e:undefined,length:v9,constructor:v22,d:v8,__proto__:1337,a:v4};
            // v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "length", "c", "constructor", "a"])
            const v24 = v14(v1,"boolean");
            // v24 = .unknown
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v2(v27);
// v28 = .unknown
const v29 = v2();
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
