function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        for (let v12 = 0; v12 < 10; v12++) {
            const v13 = v12 == "boolean";
            // v13 = .boolean
            const v14 = v13 <= v12;
            // v14 = .boolean
            for (let v18 = 0; v18 < 8; v18++) {
                let v19 = v14;
            }
        }
        let v25 = 0;
        function v28(v29,v30) {
            function v31(v32,v33) {
                const v34 = {defineProperty:v28,construct:v28,apply:v28,set:v30,getPrototypeOf:v32,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v29,get:Promise,deleteProperty:v30,call:Promise,isExtensible:v28,preventExtensions:Promise};
                // v34 = .object(ofGroup: Object, withProperties: ["preventExtensions", "setPrototypeOf", "set", "__proto__", "deleteProperty", "ownKeys", "getPrototypeOf", "call", "getOwnPropertyDescriptor", "get"], withMethods: ["isExtensible", "defineProperty", "construct", "apply"])
                const v36 = new Proxy(v31,v34);
                // v36 = .unknown
            }
        }
    }
    const v38 = [1337];
    // v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v39 = v38;
    const v40 = v5(v39);
    // v40 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
