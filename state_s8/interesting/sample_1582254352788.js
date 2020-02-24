function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "e", "a", "constructor"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "d", "valueOf"])
let v10 = v6;
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
let v103 = 0;
let v106 = 0;
let v109 = 0;
const v110 = 13.37 + 1;
// v110 = .primitive
v109 = v110;
let v117 = 0;
const v121 = v106 + 1;
// v121 = .primitive
v106 = v121;
const v122 = v103 + 1;
// v122 = .primitive
v103 = v122;
const v128 = (13.37).toString();
// v128 = .unknown
let v137 = 0;
const v138 = v137 + 1;
// v138 = .primitive
v137 = v138;
function v152(v153,v154,...v155) {
    const v157 = {get:v153,set:gc};
    // v157 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
    const v159 = Object.defineProperty(v155,"constructor",v157);
    // v159 = .undefined
    return v155;
}
const v160 = Object();
// v160 = .object()
}
%NeverOptimizeFunction(main);
main();
