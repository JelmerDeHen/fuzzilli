function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            const v14 = [13.37,13.37,13.37,13.37];
            // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v16 = [v14,471091797,DataView];
            // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v17 = {c:1337};
            // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
            const v18 = {constructor:v14,toString:v17,__proto__:471091797,length:v16};
            // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "toString", "length"])
            const v19 = isFinite();
            // v19 = .boolean
            v9 = v10;
        } while (v9 <= 7);
    }
}
const v20 = [-9007199254740992];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v21 = v20;
const v22 = v2(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
