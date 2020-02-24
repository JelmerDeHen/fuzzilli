function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            while (v13 < 5) {
                const v14 = v2 < 0;
                // v14 = .boolean
                const v15 = v13 + 1;
                // v15 = .primitive
                const v20 = [13.37,13.37];
                // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v22 = [1337,1337];
                // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v23 = [v20,13.37,v22,-4294967296];
                // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v24 = {__proto__:v20,valueOf:"number",a:Object,d:v23};
                // v24 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d"], withMethods: ["a"])
                const v26 = [257];
                // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v30 = new Int16Array(19873);
                // v30 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
                try {
                    const v34 = [13.37,13.37];
                    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                    const v35 = v24[1024];
                    // v35 = .unknown
                    const v36 = {has:Int16Array,construct:v35,defineProperty:v35,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v35,isExtensible:v35,call:v35,set:1,getOwnPropertyDescriptor:Int16Array};
                    // v36 = .object(ofGroup: Object, withProperties: ["deleteProperty", "getOwnPropertyDescriptor", "defineProperty", "set", "construct", "setPrototypeOf", "call", "preventExtensions", "__proto__", "has", "isExtensible"])
                    const v38 = new Proxy(v34,v36);
                    // v38 = .unknown
                    const v39 = {c:v35,e:Proxy,__proto__:v35,toString:v36,...undefined,...v38,...v30};
                    // v39 = .object(ofGroup: Object, withProperties: ["byteLength", "toString", "constructor", "length", "__proto__", "byteOffset", "c", "buffer", "e"], withMethods: ["indexOf", "slice", "reverse", "fill", "reduce", "find", "keys", "every", "some", "values", "findIndex", "includes", "copyWithin", "subarray", "join", "reduceRight", "map", "set", "lastIndexOf", "entries", "sort", "forEach", "filter"])
                } catch(v40) {
                }
                const v41 = v14 / v15;
                // v41 = .number
                const v42 = 0 & v41;
                // v42 = .integer
                v13 = v15;
            }
            const v43 = v10 + 1;
            // v43 = .primitive
            v10 = v43;
        } while (v10 < 8);
    }
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v46 = v45;
const v47 = v3(v46);
// v47 = .unknown
let v51 = 0;
}
%NeverOptimizeFunction(main);
main();
