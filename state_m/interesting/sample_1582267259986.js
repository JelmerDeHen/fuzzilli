function main() {
const v3 = {isExtensible:2291304804,apply:1337,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v3 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__", "getOwnPropertyDescriptor", "apply", "ownKeys", "deleteProperty", "isExtensible"])
const v5 = new Proxy(JSON,v3);
// v5 = .unknown
const v6 = JSON.stringify(1337,v5,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
