function main() {
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = 0;
const v15 = eval(1337);
// v15 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v8,b:"__proto__"};
// v18 = .object(ofGroup: Object, withProperties: ["b", "length", "toString", "__proto__", "a"], withMethods: ["__proto__", "valueOf"])
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
            // v39 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
            function v40(v41,v42,v43) {
                const v44 = v35(v41,v26);
                // v44 = .unknown
                return v30;
            }
            function v46(v47,v48) {
            }
            try {
                const v49 = {get:v24,set:Object,setPrototypeOf:v23,deleteProperty:Object,construct:v30,apply:v23};
                // v49 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "construct", "get", "apply"], withMethods: ["set", "deleteProperty"])
                const v51 = Proxy(v46,v49);
                // v51 = .unknown
                const v52 = {defineProperty:v35,has:v24};
                // v52 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "defineProperty"])
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
