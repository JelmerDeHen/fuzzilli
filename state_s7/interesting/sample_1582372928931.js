function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
            const v11 = Symbol.toStringTag;
            // v11 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            const v12 = Symbol[v11];
            // v12 = .unknown
            const v13 = {getPrototypeOf:v12,get:v12};
            // v13 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
            const v15 = new gc(eval,v13);
            // v15 = .object()
            this.valueOf = v15;
            const v18 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "deleteProperty", "get", "apply", "isExtensible", "ownKeys", "getPrototypeOf", "set", "preventExtensions", "getOwnPropertyDescriptor", "construct"])
            const v20 = new ArrayBuffer(gc,v18);
            // v20 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v20.toString = valueOf;
        } while (v7 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
