function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = ["rsn7j9uKGb",13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {length:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {a:1337,__proto__:v6,b:v7,c:v7,length:v4};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "length", "b"])
let v10 = 1337;
function v12(v13,v14) {
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v24 = 0;
    for (const v25 in "boolean") {
        let v28 = 0;
        do {
            let v31 = 0;
            for (const v42 of "pvU0UUjoya") {
            }
            const v43 = v28 + 1;
            // v43 = .primitive
            v28 = v43;
        } while (v28 < 8);
    }
    const v46 = [13.37,13.37];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v47 = v46[1024];
    // v47 = .unknown
    const v48 = {has:gc,construct:v47,defineProperty:v47,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v47,isExtensible:v47,call:v47,set:gc,getOwnPropertyDescriptor:gc};
    // v48 = .object(ofGroup: Object, withProperties: ["defineProperty", "construct", "preventExtensions", "isExtensible", "call", "__proto__"], withMethods: ["getOwnPropertyDescriptor", "has", "set", "deleteProperty", "setPrototypeOf"])
    const v50 = new Proxy(v46,v48);
    // v50 = .unknown
    for (const v52 in "object") {
    }
}
const v55 = [1337];
// v55 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v56 = v55;
const v57 = v12(v56);
// v57 = .unknown
const v58 = v12(1024,4.0);
// v58 = .unknown
}
%NeverOptimizeFunction(main);
main();
