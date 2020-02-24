function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {valueOf:-1196352494,c:v2,length:13.37,d:v2};
// v3 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "valueOf", "d"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
            this.valueOf = v11;
            const v15 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "apply", "set", "deleteProperty", "getPrototypeOf", "getOwnPropertyDescriptor", "defineProperty", "construct", "isExtensible", "get", "preventExtensions"])
            const v17 = new Object(gc,v15);
            // v17 = .object()
            v17.constructor = valueOf;
        } while (v11 < 8);
    }
    return v3;
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v21 = v20;
const v22 = v4(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
