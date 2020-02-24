function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v11 = new Int32Array(13.37);
            // v11 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
            const v12 = v8 + 1;
            // v12 = .primitive
            v8 = v12;
            this.valueOf = 13.37;
            const v15 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set", "apply", "deleteProperty", "preventExtensions", "defineProperty", "construct", "getOwnPropertyDescriptor", "getPrototypeOf", "ownKeys", "isExtensible"])
            const v17 = new ArrayBuffer(gc,v15);
            // v17 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v17.toString = valueOf;
        } while (v8 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
