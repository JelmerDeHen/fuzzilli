function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {e:13.37,d:"d"};
// v8 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
const v9 = {e:v8,d:1337};
// v9 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
let v10 = v9;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            try {
                const v21 = [13.37,13.37,13.37,13.37];
                // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                function v22(v23,v24) {
                    const v31 = [13.37,13.37,13.37,13.37,13.37];
                    // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                    const v32 = {length:v21};
                    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
                    const v33 = {constructor:13.37,length:13.37,__proto__:v32,toString:Number,a:"N0Xx92zvHQ"};
                    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
                    let v34 = 0;
                    do {
                        const v35 = v34 + 1;
                        // v35 = .primitive
                        for (let v39 = 0; v39 < 3; v39++) {
                            for (const v41 in "object") {
                            }
                        }
                        v34 = v35;
                    } while (v34 < 3);
                    return Number;
                }
                const v43 = [1337];
                // v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v44 = v43;
                const v45 = v22(v44);
                // v45 = .unknown
            } catch(v46) {
            }
            const v47 = v19 + 1;
            // v47 = .primitive
            const v50 = eval(1337);
            // v50 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            v19 = v47;
        } while (v19 < 8);
    }
    return "boolean";
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v53 = v52;
const v54 = v12(v53);
// v54 = .unknown
const v55 = new Int8Array(v52);
// v55 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v57 = {set:v12};
// v57 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v59 = Object.defineProperty(v7,"constructor",v57);
// v59 = .undefined
const v60 = v12();
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
