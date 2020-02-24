function main() {
const v2 = [Reflect,Reflect,-2674626719];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {b:"split",__proto__:v5,constructor:2147483647};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b"])
function v8(v9,v10) {
    const v16 = [3156875969,3156875969,1337,DataView];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v17 = {constructor:v16,c:v16,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v17 = .object(ofGroup: Object, withProperties: ["a", "d", "c", "constructor", "__proto__", "e"])
    let v24 = 0;
    let v27 = 0;
    const v32 = {get:v8};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    v24 = v2;
    const v34 = {get:v8,set:v8};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v36 = Object.defineProperty(v32,"toString",v34);
    // v36 = .undefined
    const v38 = Object.defineProperty(v7,-4294967296,v32);
    // v38 = .undefined
    const v46 = v27 + 1;
    // v46 = .primitive
    v27 = v46;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v50 = v49;
const v51 = v8(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
