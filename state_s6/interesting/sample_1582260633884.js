function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {getPrototypeOf:3488870410,preventExtensions:3488870410,ownKeys:13.37,get:13.37,set:1337,isExtensible:Uint32Array,has:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["preventExtensions", "set", "has", "ownKeys", "isExtensible", "__proto__", "get", "getPrototypeOf"])
const v9 = new Proxy(v4,v7);
// v9 = .unknown
const v10 = ["c",1337,3488870410];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = {__proto__:3488870410,length:"c",e:13.37,c:v10,d:Uint32Array};
// v11 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "d", "c"])
const v12 = {constructor:Uint32Array,c:v10};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
let v13 = v6;
function v15(v16,v17) {
    const v18 = v16 in v15;
    // v18 = .boolean
    for (const v20 in "boolean") {
        for (const v22 of "pvU0UUjoya") {
        }
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        for (let v29 = 0; v29 < 100; v29++) {
            const v31 = String.fromCodePoint(v29,v29,0,v24);
            // v31 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        }
    }
    return v18;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v35 = v34;
const v36 = v15(v35);
// v36 = .unknown
const v37 = v15(1024,28224.384625465493);
// v37 = .unknown
const v38 = v15();
// v38 = .unknown
const v39 = v11[v12];
// v39 = .unknown
v37.constructor = v4;
let v42 = 0;
while (v42 < 2) {
    const v43 = v34[185489551];
    // v43 = .unknown
    const v44 = v42 + 1;
    // v44 = .primitive
    v42 = v44;
    let v46 = 0;
}
const v47 = v15(v12,v15);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
