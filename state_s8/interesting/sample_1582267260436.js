function main() {
const v3 = {isExtensible:2291304804,apply:1337,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "apply", "isExtensible", "getOwnPropertyDescriptor", "ownKeys", "deleteProperty", "preventExtensions"])
const v5 = new Proxy(JSON,v3);
// v5 = .unknown
const v6 = JSON.stringify(1337,v5,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
