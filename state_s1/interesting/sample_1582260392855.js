function main() {
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = 0;
const v15 = eval(1337);
// v15 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v8,b:"__proto__"};
// v18 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "b", "toString"], withMethods: ["__proto__", "valueOf"])
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
            // v39 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
            function v40(v41,v42,v43) {
                const v44 = v35(v41,v26);
                // v44 = .unknown
                return v30;
            }
            function v46(v47,v48) {
            }
            try {
                const v49 = {get:v24,set:Object,setPrototypeOf:v23,deleteProperty:Object,construct:v30,apply:v23};
                // v49 = .object(ofGroup: Object, withProperties: ["get", "construct", "setPrototypeOf", "apply", "__proto__"], withMethods: ["set", "deleteProperty"])
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
