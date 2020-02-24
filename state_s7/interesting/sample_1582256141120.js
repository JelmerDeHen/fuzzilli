function main() {
function v0(v1,v2) {
    let v9 = 0;
    let v12 = 0;
    try {
        const v16 = {preventExtensions:v1,has:v0,ownKeys:Object,setPrototypeOf:v0,isExtensible:Object};
        // v16 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"], withMethods: ["isExtensible", "has", "ownKeys", "setPrototypeOf"])
        const v18 = Proxy(0,v16);
        // v18 = .unknown
        let v21 = 0;
        let v22 = 0;
    } catch(v23) {
    }
    const v34 = v12 + 1;
    // v34 = .primitive
    v12 = v34;
    const v35 = v9 + 1;
    // v35 = .primitive
    v9 = v35;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v39 = v38;
const v40 = v0(v39);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
