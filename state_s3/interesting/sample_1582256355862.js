function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {valueOf:1337};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v17 = [3156875969,3156875969,1337,DataView];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v18 = {constructor:v17,c:v17,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
            // v18 = .object(ofGroup: Object, withProperties: ["constructor", "a", "c", "__proto__", "d", "e"])
            const v20 = Object(Object,v2,v1,v3,8);
            // v20 = .object()
            v18.valueOf = Object;
            const v21 = v11 + 1;
            // v21 = .primitive
            v11 = v21;
        } while (v11 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v24 = v23;
const v25 = v4(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
