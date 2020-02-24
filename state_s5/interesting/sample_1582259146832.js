function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {e:Int16Array,c:1337,valueOf:v4};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "c"])
const v7 = {c:Int16Array,__proto__:v5,length:Int16Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c"])
let v8 = 1337;
for (let v17 = 0; v17 < 6; v17++) {
    for (const v18 in v2) {
        const v19 = v17 == v18;
        // v19 = .boolean
        const v20 = v5.push(v17,v2);
        // v20 = .integer
    }
}
const v21 = 0 || v8;
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
