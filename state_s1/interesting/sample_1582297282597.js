function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {valueOf:1337,constructor:v4,toString:"MAX_VALUE",__proto__:0};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "constructor"])
let v7 = v6;
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        const v17 = [];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v19 = v17.map(v9,"boolean");
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v22 = v16 + 1;
        // v22 = .primitive
        v16 = v22;
        const v23 = -Infinity;
        // v23 = .float
        const v24 = v23 - v23;
        // v24 = .number
        const v25 = {deleteProperty:v11,construct:v11,getOwnPropertyDescriptor:Array,defineProperty:v10,ownKeys:v9,set:v10,call:v9,apply:v10,get:v9,isExtensible:v11,setPrototypeOf:v10,has:v11,getPrototypeOf:v10};
        // v25 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "has", "defineProperty", "apply", "deleteProperty", "isExtensible", "construct", "__proto__", "set", "setPrototypeOf"], withMethods: ["get", "call", "getOwnPropertyDescriptor", "ownKeys"])
        const v27 = new Proxy(v6,v25);
        // v27 = .unknown
        function v28(v29,v30,v31,v32) {
        }
        for (const v33 in v25) {
            const v34 = {get:v28,setPrototypeOf:v9,apply:v11,preventExtensions:v11,getPrototypeOf:v28,has:v27};
            // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "has", "apply"], withMethods: ["get", "getPrototypeOf", "setPrototypeOf"])
        }
    }
}
const v37 = v9("symbol",-857574257);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
