function main() {
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v12 = 0;
const v15 = eval(1337);
// v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v8,b:"__proto__"};
// v18 = .object(ofGroup: Object, withProperties: ["toString", "a", "length", "__proto__", "b"], withMethods: ["__proto__", "valueOf"])
const v21 = {a:isFinite};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v22(v23,v24) {
    for (const v26 in "boolean") {
        let v29 = 0;
        const v30 = v21.a(-225787572,"boolean",8,v21,"boolean");
        // v30 = .unknown
        do {
            for (let v34 = 3182040817; v34 < 4; v34++) {
            }
            const v35 = v21.a(v30);
            // v35 = .unknown
            const v36 = v29 + 1;
            // v36 = .primitive
            const v39 = new Uint16Array(13637);
            // v39 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
            function v40(v41,v42,v43) {
                const v44 = v35(v41,v26);
                // v44 = .unknown
                return v30;
            }
            function v46(v47,v48) {
            }
            try {
                const v49 = {get:v24,set:Object,setPrototypeOf:v23,deleteProperty:Object,construct:v30,apply:v23};
                // v49 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "apply", "setPrototypeOf", "construct"], withMethods: ["deleteProperty", "set"])
                const v51 = Proxy(v46,v49);
                // v51 = .unknown
                const v52 = {defineProperty:v35,has:v24};
                // v52 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "defineProperty"])
                const v54 = {get:v46,set:Object};
                // v54 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
                const v56 = Object.defineProperty(v18,"e",v54);
                // v56 = .undefined
            } catch(v57) {
            }
            v29 = v36;
        } while (v29 < 8);
    }
}
const v58 = v22(String);
// v58 = .unknown
let v62 = 0;
}
%NeverOptimizeFunction(main);
main();
