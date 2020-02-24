function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
            this.valueOf = v7;
            const v11 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "construct", "deleteProperty", "set", "ownKeys", "getOwnPropertyDescriptor", "get", "apply", "preventExtensions", "isExtensible", "defineProperty"])
            const v13 = new ArrayBuffer(gc,v11);
            // v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v13.toString = valueOf;
        } while (v7 < 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
