function main() {
let v2 = -128;
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v15 = 7;
            const v16 = v13 + 1;
            // v16 = .primitive
            v13 = v16;
            const v22 = Symbol.toStringTag;
            // v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v23 = Symbol[v22];
            // v23 = .unknown
            const v24 = {getPrototypeOf:v23,get:v23};
            // v24 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
            const v26 = new Proxy(eval,v24);
            // v26 = .unknown
            this.valueOf = v26;
            const v29 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "preventExtensions", "set", "get", "apply", "defineProperty", "deleteProperty", "ownKeys", "isExtensible", "getOwnPropertyDescriptor", "construct"])
            const v31 = new ArrayBuffer(gc,v29);
            // v31 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v31.toString = valueOf;
            const v34 = [13.37,13.37,13.37,13.37,13.37];
            // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        } while (v13 < 8);
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v37 = v36;
const v38 = v6(v37);
// v38 = .unknown
let v46 = 0;
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
const v51 = v46 + 1;
// v51 = .primitive
v46 = v51;
}
%NeverOptimizeFunction(main);
main();
