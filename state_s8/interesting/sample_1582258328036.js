function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {valueOf:4294967295,length:v2,b:v2,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["b", "toString", "valueOf", "length", "__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
        for (let v17 = 0; v17 < 100; v17++) {
        }
        const v18 = Array(100);
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v19 = v18[1564472798];
        // v19 = .unknown
    }
}
const v20 = v4(v3);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
