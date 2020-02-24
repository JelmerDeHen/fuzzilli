function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37,v5,1337,"object"];
const v7 = {a:v3,d:1024,valueOf:"object"};
const v8 = {e:v6};
let v9 = v3;
const v11 = [-719260299,-719260299];
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [v15,-2,v11];
const v20 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,-4294967297];
const v22 = [871735.3826353757,4294967295,v20];
for (const v23 of v17) {
}
let v25 = -256;
while (v25 < 1337) {
    const v26 = v22.push();
    const v30 = [1337,1337,1337,1337];
    const v31 = {valueOf:v30,length:eval};
    const v34 = [1337,1337,1337,1337,1337];
    function v35(v36,v37,v38,v39) {
        'use strict'
        try {
            v39[3] = v39;
        } catch(v40) {
            const v46 = {length:"N0Xx92zvHQ"};
            const v47 = {constructor:13.37,length:-4294967295,__proto__:v46,toString:Number,a:"N0Xx92zvHQ"};
            let v51 = v38;
            const v52 = gc();
            const v53 = {toString:v31,valueOf:"MIN_VALUE",d:v46,constructor:v34,c:Number,length:v34};
            const v54 = v34.__proto__;
            const v55 = {isExtensible:eval,setPrototypeOf:v36,has:v35,preventExtensions:v35,getPrototypeOf:v35,call:Object,apply:v35,ownKeys:v35,set:v40,deleteProperty:v37,getOwnPropertyDescriptor:Number,construct:eval};
            const v57 = new Proxy(Number,v55);
            const v58 = Object();
        }
        return v34;
    }
    const v59 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
    const v61 = new Proxy(v34,v59);
    v61[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
