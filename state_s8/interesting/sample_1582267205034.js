function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6) {
    let v13 = 0;
    const v15 = v13 + 1;
    // v15 = .primitive
    v13 = v15;
    const v18 = v2.push("object",Uint16Array,"object");
    // v18 = .integer
    const v21 = [13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v23 = [1337,1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v24 = {toString:v21,b:"PI",valueOf:v23};
    // v24 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "b"])
    const v25 = {b:v24};
    // v25 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v26 = v25.__proto__;
    // v26 = .object()
    let v27 = v24;
    v26[984635998] = v27;
    let v34 = 0;
    let v37 = 0;
    const v40 = 1337 == 13.37;
    // v40 = .boolean
    const v42 = Object();
    // v42 = .object()
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v46 = v45;
const v47 = v4(v46);
// v47 = .unknown
const v48 = v4(1024,4.0);
// v48 = .unknown
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
v51 = v52;
}
%NeverOptimizeFunction(main);
main();
