function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,Float32Array,13.37,13.37];
const v6 = {c:v2};
const v7 = {b:13.37,a:v2,valueOf:v5,c:13.37,__proto__:1337,d:v5};
let v8 = v5;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [v14,1337];
const v16 = {e:Number,d:798072795,toString:v12};
const v17 = {b:1337};
let v18 = v12;
const v20 = [13.37];
const v24 = [-2588121454];
const v27 = [v24,-2,-4294967297];
const v29 = [1337,1337,-461522.98234251246];
let v31 = 2155204207;
const v32 = v29.push();
for (const v34 in "object") {
    const v37 = [1337,1337,1337,1337,1337];
    function v38(v39,v40,v41,v42) {
        'use strict'
        try {
            v42[3] = v42;
        } catch(v43) {
            const v48 = [1337,1337,1337];
            const v49 = [3664180981,3664180981,"string","string"];
            const v50 = {valueOf:v49,length:v48,toString:parseFloat,constructor:"string",c:parseFloat};
            function v51(v52,v53) {
                return v41;
            }
            const v54 = v48.__proto__;
            const v58 = [v38];
            const v60 = [255,255,255];
            const v61 = {a:255,toString:arguments,c:v58,__proto__:v60,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v37;
    }
    const v62 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
    const v64 = new Proxy(v37,v62);
    v64[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
