function main() {
const v3 = [Map];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [13.37,v5,"undefined"];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {__proto__:v6,length:"undefined",d:v6,e:13.37,toString:v5,valueOf:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d", "toString"])
function v8(v9,v10) {
    const v11 = {deleteProperty:v9,preventExtensions:v8,isExtensible:v8,getOwnPropertyDescriptor:v8};
    // v11 = .object(ofGroup: Object, withProperties: ["deleteProperty", "__proto__"], withMethods: ["getOwnPropertyDescriptor", "preventExtensions", "isExtensible"])
    const v13 = new Proxy(v10,v11);
    // v13 = .unknown
    return v13;
}
const v17 = 1337 === v3;
// v17 = .boolean
const v18 = v8(v7,v3);
// v18 = .unknown
function v19(v20,v21) {
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            const v32 = [1337,1337,1337,1337];
            // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v33 = {b:v29};
            // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
            function v34(v35,v36) {
                try {
                    const v37 = v18(v36,v35,1337);
                    // v37 = .unknown
                } catch(v38) {
                }
            }
            const v39 = v32.findIndex(v34,v33);
            // v39 = .integer
            v29 = v30;
            const v40 = v26 + 1;
            // v40 = .primitive
            v26 = v40;
        } while (v26 < 8);
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v43 = v42;
const v44 = v19(v43);
// v44 = .unknown
const v45 = v19(v6,v42);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
