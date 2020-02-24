function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v5 = v4 + 1;
        // v5 = .primitive
        function v7(v8,v9) {
            const v10 = {has:v8,call:v7,deleteProperty:isFinite,setPrototypeOf:v8,ownKeys:isFinite,get:v8,construct:v8,isExtensible:v9,preventExtensions:isFinite,apply:v8};
            // v10 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "construct", "has", "get", "isExtensible", "setPrototypeOf"], withMethods: ["preventExtensions", "deleteProperty", "ownKeys", "call"])
            for (let v14 = 0; v14 < 100; v14 = v14 + 2825163866) {
            }
        }
        const v16 = [1337];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v17 = v16;
        const v18 = v7(v17);
        // v18 = .unknown
        v4 = v5;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
