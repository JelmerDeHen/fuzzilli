function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {b:v5,length:1337,valueOf:1337,toString:RegExp};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"], withMethods: ["toString"])
const v7 = {length:v2,valueOf:v6,c:v4,e:1337,__proto__:v5};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "c", "__proto__", "length"])
for (let v12 = 0; v12 < 10; v12++) {
    for (let v16 = 0; v16 < 7; v16++) {
        const v17 = v5.unshift(v16,-1024,v16,v16);
        // v17 = .integer
    }
}
let v20 = 13.37;
}
%NeverOptimizeFunction(main);
main();
