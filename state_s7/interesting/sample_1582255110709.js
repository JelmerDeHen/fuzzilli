function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__", "b", "a", "valueOf"])
const v9 = {a:"function",c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
const v10 = 1337 - 1;
// v10 = .primitive
let v13 = 0;
while (v13 < 8) {
    v4.valueOf = Array;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
}
let v15 = "function";
try {
    const v18 = DataView(3919);
    // v18 = .unknown
    function v19(v20,v21) {
        let v32 = 0;
        let v35 = 0;
    }
} catch(v39) {
}
}
%NeverOptimizeFunction(main);
main();
