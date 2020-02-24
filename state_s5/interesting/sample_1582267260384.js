function main() {
const v3 = {isExtensible:2291304804,apply:1337,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v3 = .object(ofGroup: Object, withProperties: ["preventExtensions", "deleteProperty", "apply", "getOwnPropertyDescriptor", "isExtensible", "__proto__", "ownKeys"])
const v5 = new Proxy(JSON,v3);
// v5 = .unknown
const v6 = JSON.stringify(1337,v5,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
