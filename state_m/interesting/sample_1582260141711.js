function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v5 = v4 + 1;
        // v5 = .primitive
        function v7(v8,v9) {
            const v10 = {has:v8,call:v7,deleteProperty:isFinite,setPrototypeOf:v8,ownKeys:isFinite,get:v8,construct:v8,isExtensible:v9,preventExtensions:isFinite,apply:v8};
            // v10 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "has", "setPrototypeOf", "get", "construct", "isExtensible"], withMethods: ["ownKeys", "deleteProperty", "preventExtensions", "call"])
            for (let v14 = 0; v14 < 100; v14 = v14 + 2825163866) {
            }
        }
        const v16 = [1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v17 = v16;
        const v18 = v7(v17);
        // v18 = .unknown
        v4 = v5;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
