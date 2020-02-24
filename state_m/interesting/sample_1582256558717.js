function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {__proto__:4096,constructor:isFinite,a:v4,e:"match",d:4096};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d", "a"], withMethods: ["constructor"])
const v9 = {toString:4096,length:v7,b:4096,a:isFinite,e:v8,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["e", "toString", "length", "b", "__proto__", "d"], withMethods: ["a"])
let v10 = v8;
function v12(v13,v14) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v40 = v25 + 1;
            // v40 = .primitive
            const v41 = v10.__proto__;
            // v41 = .object()
            v25 = v40;
        } while (v25 < 8);
    }
    const v42 = v21 + 1;
    // v42 = .primitive
    v21 = v42;
}
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
const v49 = RegExp.bind(v10,v12,v4,v6,v9);
// v49 = .unknown
const v51 = {get:v49};
// v51 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v53 = Object.defineProperty(v10,"e",v51);
// v53 = .undefined
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v55 = v54;
const v56 = v12(v55);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
