function main() {
let v1 = Promise;
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    const v14 = {length:"N0Xx92zvHQ"};
    // v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:"N0Xx92zvHQ"};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "a"], withMethods: ["toString"])
    const v22 = "symbol".constructor;
    // v22 = .function()
    const v23 = {apply:v22,deleteProperty:gc,preventExtensions:Object,ownKeys:v22,isExtensible:JSON,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["construct", "ownKeys", "apply", "set", "defineProperty", "has", "preventExtensions", "deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf"])
    const v25 = new Proxy(v15,v23);
    // v25 = .unknown
    let v28 = 0;
    delete v25[v1];
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
    const v30 = v4.reduceRight(v22,Infinity);
    // v30 = .unknown
    let v33 = 0;
    const v34 = Infinity < v5;
    // v34 = .boolean
    let v35 = v34;
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
}
const v46 = v5();
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();