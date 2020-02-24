function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {toString:v6,length:v6,__proto__:1337,a:13.37,constructor:"split"};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__", "a", "constructor"])
const v9 = {constructor:v4,valueOf:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf"])
let v10 = v9;
function v11(v12,v13) {
    const v21 = {length:"N0Xx92zvHQ"};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v22 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"N0Xx92zvHQ"};
    // v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
    const v27 = Object.freeze(v8);
    // v27 = .undefined
    const v30 = "object".constructor;
    // v30 = .function()
    const v32 = v30 || v6;
    // v32 = .boolean
    const v33 = v22.toString();
    // v33 = .unknown
    const v34 = new Object(v6);
    // v34 = .object()
    const v35 = {apply:v30,deleteProperty:gc,preventExtensions:Object,ownKeys:v30,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "setPrototypeOf", "defineProperty", "apply", "getOwnPropertyDescriptor", "preventExtensions", "construct", "has", "ownKeys", "set"])
    const v37 = new Proxy(v22,v35);
    // v37 = .unknown
    const v38 = 100 == 100;
    // v38 = .boolean
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    const v43 = 0 != v38;
    // v43 = .boolean
    return v30;
}
for (let v47 = 0; v47 < 100; v47++) {
    const v48 = v11();
    // v48 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
