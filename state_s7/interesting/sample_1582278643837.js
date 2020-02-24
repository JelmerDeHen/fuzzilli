function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37,1000];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {b:1000,c:Infinity,__proto__:v4,length:v7,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "c", "valueOf"])
const v9 = {b:v4,__proto__:v4,valueOf:"boolean",d:Infinity};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__", "b"])
let v10 = v9;
const v12 = [-9007199254740992];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
let v15 = undefined;
try {
    const v18 = {deleteProperty:Uint8ClampedArray,set:Uint8ClampedArray,apply:v8,defineProperty:Uint8ClampedArray,getOwnPropertyDescriptor:v7,setPrototypeOf:Uint8ClampedArray,has:Uint8ClampedArray,isExtensible:v9,getPrototypeOf:v12};
    // v18 = .object(ofGroup: Object, withProperties: ["apply", "isExtensible", "getOwnPropertyDescriptor", "setPrototypeOf", "defineProperty", "set", "has", "__proto__", "getPrototypeOf", "deleteProperty"])
    const v20 = Proxy(v10,v18);
    // v20 = .unknown
    v15 = v13;
    v18.length = Uint8ClampedArray;
    const v21 = v20(...v18,v18);
    // v21 = .unknown
    const v22 = typeof Proxy;
    // v22 = .string
    const v24 = v22 === "number";
    // v24 = .boolean
    let v25 = "boolean";
    if (v21) {
        v21.defineProperty = v20;
        v25 = 1000;
    } else {
        let v28 = 0;
        while (v28 < 8) {
            let v29 = v28;
            try {
                v18.length = 2;
                v29 = "boolean";
            } catch(v31) {
                const v32 = v25.__proto__;
                // v32 = .object()
                v29 = v32;
            }
            const v33 = v28 + 1;
            // v33 = .primitive
            v28 = v33;
        }
        v25 = v20;
    }
    const v35 = Uint8ClampedArray(236809597);
    // v35 = .unknown
    for (const v36 in v35) {
    }
} catch(v37) {
    const v41 = Object.getOwnPropertyDescriptors("pvU0UUjoya");
    // v41 = .object()
    const v42 = JSON.stringify(v41);
    // v42 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v43 = JSON.parse(v42,v42);
    // v43 = .unknown
}
function v44(v45,v46,v47,v48) {
    const v49 = v7.__proto__;
    // v49 = .object()
    return Infinity;
}
let v50 = 1000;
let v53 = 0;
const v54 = v53 + 1;
// v54 = .primitive
v53 = v54;
}
%NeverOptimizeFunction(main);
main();
