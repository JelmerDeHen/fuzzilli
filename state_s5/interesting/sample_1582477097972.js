function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        this.valueOf = 13.37;
        const v12 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "defineProperty", "getPrototypeOf", "preventExtensions", "deleteProperty", "get", "ownKeys", "set", "isExtensible", "apply", "getOwnPropertyDescriptor"])
        for (const v14 in v12) {
            let v17 = 0;
            do {
                const v18 = {isExtensible:v2,b:256,toString:0,constructor:13.37,...v6,...valueOf,...v6,...v17};
                // v18 = .object(ofGroup: Object, withProperties: ["b", "constructor", "toString", "isExtensible", "__proto__"])
                const v19 = v17 + 1;
                // v19 = .primitive
                v17 = v19;
            } while (v17 < 256);
        }
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = v21;
const v23 = v4(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
