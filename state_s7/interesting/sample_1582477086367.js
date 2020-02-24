function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        this.valueOf = 13.37;
        const v12 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "ownKeys", "isExtensible", "deleteProperty", "get", "defineProperty", "apply", "set", "construct", "preventExtensions", "getPrototypeOf"])
        for (const v14 in v12) {
            let v17 = 0;
            do {
                const v18 = {isExtensible:v2,b:256,toString:0,constructor:13.37,...v6,...valueOf,...v6,...v17};
                // v18 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "b", "isExtensible", "constructor"])
                const v19 = v17 + 1;
                // v19 = .primitive
                v17 = v19;
            } while (v17 < 256);
        }
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v4(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
