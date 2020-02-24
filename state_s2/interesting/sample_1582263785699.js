function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,3356252410];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:13.37,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {__proto__:v8,length:v6,valueOf:3356252410};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf"])
let v10 = v4;
function v11(v12,v13) {
    const v20 = {length:"N0Xx92zvHQ"};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v21 = {constructor:13.37,length:13.37,__proto__:v20,toString:Number,a:"N0Xx92zvHQ"};
    // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
    const v28 = "object".constructor;
    // v28 = .function()
    for (let v32 = 0; v32 < 100; v32++) {
    }
    const v33 = {apply:v28,deleteProperty:gc,preventExtensions:Object,ownKeys:v28,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "getOwnPropertyDescriptor", "ownKeys", "deleteProperty", "has", "setPrototypeOf", "defineProperty", "isExtensible", "construct", "preventExtensions", "apply"])
    const v35 = new Proxy(v21,v33);
    // v35 = .unknown
    const v36 = v35[4088076774];
    // v36 = .unknown
    const v45 = [v28,13.37];
    // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    for (const v46 in "object") {
        const v47 = !v45;
        // v47 = .boolean
        const v48 = Object(v47,v46,4294967297);
        // v48 = .object()
    }
    let v51 = 0;
    for (const v52 in "boolean") {
        let v55 = 0;
        do {
            const v56 = "object" + 1;
            // v56 = .primitive
            v55 = v56;
        } while (v55 < 7);
        let v59 = 0;
    }
    const v63 = v51 + 1;
    // v63 = .primitive
    v20[9] = v11;
    v51 = v63;
    return v28;
}
for (let v67 = 0; v67 < 100; v67++) {
    const v68 = v11();
    // v68 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
