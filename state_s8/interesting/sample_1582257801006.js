function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v3,constructor:"eTm8XK*Max"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "e", "length", "a"])
const v6 = {__proto__:v3,toString:"eTm8XK*Max",e:v5,b:v4,a:v4,constructor:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "constructor", "toString", "b"])
function v7(v8,v9) {
    for (const v10 in v6) {
        const v16 = [13.37,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v17 = [13.37,v16];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v18 = Object("symbol",v17);
        // v18 = .object()
        let v19 = 0;
        do {
            for (const v20 of v18) {
            }
            const v21 = v19 + 1;
            // v21 = .primitive
            v19 = v21;
        } while (v19 < 8);
    }
}
let v22 = v3;
const v23 = v7(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
