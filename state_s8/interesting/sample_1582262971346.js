function main() {
function v1(v2,v3) {
    let v12 = 0;
    let v14 = "boolean";
    let v17 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        const v24 = v22 + 1;
        // v24 = .primitive
        v22 = v24;
        const v29 = [-22411.210504713817,-22411.210504713817];
        // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v31 = [-162257780,-162257780,-162257780,-162257780,-162257780];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v32 = [v31];
        // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v33 = {a:-4278040760,constructor:-22411.210504713817,__proto__:v32,d:"xJs.h31L*m",toString:v29,length:Set};
        // v33 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a", "d", "toString"])
        const v34 = {constructor:v29};
        // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
        let v35 = v34;
        function v36(v37,v38) {
            const v40 = {a:v38,preventExtensions:v38,defineProperty:v36,getPrototypeOf:v38,deleteProperty:v38,has:v36,set:v37,apply:v38};
            // v40 = .object(ofGroup: Object, withProperties: ["preventExtensions", "deleteProperty", "a", "apply", "__proto__", "set", "getPrototypeOf"], withMethods: ["defineProperty", "has"])
            const v42 = new Proxy(v36,v40);
            // v42 = .unknown
            const v43 = {__proto__:0,...Proxy,...v36,...v42};
            // v43 = .object(ofGroup: Object, withProperties: ["__proto__"])
            return v33;
        }
        const v44 = v36();
        // v44 = .unknown
        const v45 = v44[9007199254740991];
        // v45 = .unknown
        const v46 = v36();
        // v46 = .unknown
        const v47 = v36(v35);
        // v47 = .unknown
        function v48(v49,v50,v51) {
        }
        const v52 = {preventExtensions:v44,call:v47,construct:v44,has:v48,getPrototypeOf:v45,isExtensible:v36,ownKeys:v44,getOwnPropertyDescriptor:v45,get:v48,setPrototypeOf:v36,defineProperty:v44,deleteProperty:v47,set:v46};
        // v52 = .object(ofGroup: Object, withProperties: ["set", "defineProperty", "__proto__", "getPrototypeOf", "preventExtensions", "getOwnPropertyDescriptor", "deleteProperty", "call", "construct", "ownKeys"], withMethods: ["has", "setPrototypeOf", "get", "isExtensible"])
        const v54 = new Proxy(v34,v52);
        // v54 = .unknown
        const v55 = v36(v54,v48);
        // v55 = .unknown
    }
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v58 = v57;
const v59 = v1(v58);
// v59 = .unknown
const v60 = v1(1337,13.37);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
