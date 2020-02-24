function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,-3856173342,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {a:13.37,d:v6,constructor:v4,length:v4,c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "d", "a", "constructor"])
const v9 = {e:v4,d:13.37,valueOf:-3856173342,b:"43Wuhi4r4T",constructor:v7,toString:v4};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "valueOf", "toString", "e", "constructor", "__proto__"])
const v10 = {setPrototypeOf:v4,deleteProperty:v7,preventExtensions:v9,isExtensible:v9};
// v10 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "deleteProperty", "isExtensible", "preventExtensions"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
v4[Proxy] = v7;
let v13 = 1337;
function v15(v16,v17) {
    const v29 = {set:gc};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v31 = Object.defineProperty(arguments,0,v29);
    // v31 = .undefined
    let v34 = 0;
    let v37 = 0;
    const v38 = v37 + 1;
    // v38 = .primitive
    v37 = v38;
    const v42 = v16.d;
    // v42 = .unknown
    let v43 = v37;
    try {
        v4[v7] = v10;
        v43 = v12;
    } catch(v44) {
        v44.e = 0;
        v43 = 7;
    }
    v4.d = v4;
    "43Wuhi4r4T"[-3874486182] = v29;
    return v16;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v47 = v46;
const v48 = v46.includes(v9,v13);
// v48 = .boolean
v4.toString = v15;
let v51 = 0;
do {
    v46.d = v7;
    for (const v52 in v47) {
        v4[64] = v52;
    }
    const v53 = v12.NEGATIVE_INFINITY;
    // v53 = .unknown
    const v54 = v51 + 1;
    // v54 = .primitive
    v51 = v54;
} while (v51 < 1);
try {
    for (let v58 = 0; v58 < 0; v58++) {
    }
} catch(v59) {
}
}
%NeverOptimizeFunction(main);
main();
