function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v5 = v4 + 1;
        // v5 = .primitive
        function v7(v8,v9) {
            const v10 = {has:v8,call:v7,deleteProperty:isFinite,setPrototypeOf:v8,ownKeys:isFinite,get:v8,construct:v8,isExtensible:v9,preventExtensions:isFinite,apply:v8};
            // v10 = .object(ofGroup: Object, withProperties: ["construct", "get", "setPrototypeOf", "has", "__proto__", "isExtensible", "apply"], withMethods: ["ownKeys", "call", "preventExtensions", "deleteProperty"])
            for (let v14 = 0; v14 < 100; v14 = v14 + 2825163866) {
            }
        }
        const v16 = [1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v17 = v16;
        const v18 = v7(v17);
        // v18 = .unknown
        v4 = v5;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
