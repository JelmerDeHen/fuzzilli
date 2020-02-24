function main() {
const v3 = new Uint8ClampedArray(536870912);
const v4 = v3[4294967297];
const v5 = {preventExtensions:v4,has:v4,ownKeys:v4,defineProperty:v4,apply:v4,get:v4,deleteProperty:v4,getOwnPropertyDescriptor:v4,setPrototypeOf:v4,isExtensible:v4,construct:v4};
const v7 = new Proxy(Uint8ClampedArray,v5);
const v8 = v3.sort(v7);
}
%NeverOptimizeFunction(main);
main();
