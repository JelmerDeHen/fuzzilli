function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {c:Proxy,valueOf:-128,d:v5,__proto__:-128,e:"Jkpn+sbYGJ"};
// v6 = .object(ofGroup: Object, withProperties: ["e", "c", "__proto__", "d", "valueOf"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = gc + v8;
// v10 = .primitive
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = -128;
        do {
            const v20 = [1337,1337,1337,1337];
            // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            const v24 = v18 + 1;
            // v24 = .primitive
            const v25 = v20[v10];
            // v25 = .unknown
            for (const v27 in "object") {
            }
            v18 = v24;
        } while (v18 < 8);
    }
}
const v28 = v11();
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
