function main() {
const v3 = {isExtensible:2291304804,apply:1337,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v3 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "isExtensible", "__proto__", "apply", "deleteProperty", "ownKeys", "preventExtensions"])
const v5 = new Proxy(JSON,v3);
// v5 = .unknown
const v6 = JSON.stringify(1337,v5,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
