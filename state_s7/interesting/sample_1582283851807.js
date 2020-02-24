function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {b:v5,length:1337,valueOf:1337,toString:RegExp};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "length", "__proto__"], withMethods: ["toString"])
const v7 = {length:v2,valueOf:v6,c:v4,e:1337,__proto__:v5};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "length", "c", "valueOf"])
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
