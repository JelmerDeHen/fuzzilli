function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = [v7,v9,Uint16Array];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = {b:v9,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v11 = .object(ofGroup: Object, withProperties: ["length", "b", "a", "__proto__", "valueOf", "e"])
const v12 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v12 = .object(ofGroup: Object, withProperties: ["e", "toString", "b", "d", "__proto__"])
let v13 = v7;
let v18 = 0;
do {
    function v19(v20,v21,v22,v23,v24) {
    }
    const v25 = v18 + 1;
    // v25 = .primitive
    v18 = v25;
} while (v18 < 7);
const v28 = 1337 == 13.37;
// v28 = .boolean
const v29 = "iterator"[-1024];
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
