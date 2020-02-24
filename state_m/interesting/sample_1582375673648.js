function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v9 = v8 + 1;
            // v9 = .primitive
            v8 = v9;
            this.valueOf = 1337;
            const v12 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "defineProperty", "set", "getPrototypeOf", "ownKeys", "isExtensible", "get", "construct", "deleteProperty", "preventExtensions", "apply"])
            const v14 = new ArrayBuffer(gc,v12);
            // v14 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v14.toString = valueOf;
        } while (v8 < 8);
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
