function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        this.valueOf = 13.37;
        const v12 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "getPrototypeOf", "ownKeys", "deleteProperty", "set", "construct", "isExtensible", "apply", "getOwnPropertyDescriptor", "defineProperty", "get"])
        for (const v14 in v12) {
            let v17 = 0;
            do {
                const v18 = {isExtensible:v2,b:256,toString:0,constructor:13.37,...v6,...valueOf,...v6,...v17};
                // v18 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "__proto__", "b", "isExtensible"])
                const v19 = v17 + 1;
                // v19 = .primitive
                v17 = v19;
            } while (v17 < 256);
        }
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v4(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
