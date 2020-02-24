function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {toString:Uint8Array,d:"symbol",c:v4,a:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "c", "a"])
const v9 = {length:v6,toString:Uint8Array,e:Uint8Array,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "toString"])
let v10 = -9007199254740991;
function v12(v13,v14) {
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    let v27 = 0;
    while (v27 < 10) {
        v20.length = 2147483648;
        const v35 = {length:"N0Xx92zvHQ"};
        // v35 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
        const v36 = {constructor:13.37,length:13.37,__proto__:v35,toString:Number,a:"N0Xx92zvHQ"};
        // v36 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
        const v43 = "object".constructor;
        // v43 = .function()
        for (let v47 = 0; v47 < 100; v47++) {
        }
        const v48 = {apply:v43,deleteProperty:gc,preventExtensions:Object,ownKeys:v43,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
        // v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "preventExtensions", "setPrototypeOf", "deleteProperty", "ownKeys", "defineProperty", "has", "getOwnPropertyDescriptor", "isExtensible", "apply", "set"])
        const v50 = new Proxy(v36,v48);
        // v50 = .unknown
        const v52 = v50[4088076774];
        // v52 = .unknown
        const v53 = v27 + 1;
        // v53 = .primitive
        v27 = v53;
    }
    const v57 = {length:"N0Xx92zvHQ"};
    // v57 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v58 = {constructor:13.37,length:13.37,__proto__:v57,toString:Number,a:"N0Xx92zvHQ"};
    // v58 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
    let v59 = v58;
    for (const v61 in "object") {
        const v62 = v61 + 1;
        // v62 = .primitive
        break;
    }
    return v12;
}
for (let v66 = 0; v66 < 100; v66++) {
    const v67 = v12();
    // v67 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
