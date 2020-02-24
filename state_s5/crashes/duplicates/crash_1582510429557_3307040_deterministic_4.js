function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [65535];
const v7 = {__proto__:"MAX_SAFE_INTEGER",d:65535,e:v3,constructor:13.37,c:1337};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
        const v16 = v11(v14,"MIN_VALUE",v12,v6);
        const v17 = v14.__proto__;
        const v18 = v14();
    } catch(v19) {
        const v21 = [1.7976931348623157e+308];
        let v23 = RegExp;
    }
    return v10;
}
const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v26 = new Proxy(v10,v24);
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
