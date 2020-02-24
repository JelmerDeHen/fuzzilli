function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [1337,13.37,Function,v6];
const v8 = {deleteProperty:Function,has:13.37,getPrototypeOf:v7,get:3,defineProperty:Function};
const v10 = new Proxy(Function,v8);
const v11 = v10();
const v12 = "caller".lastIndexOf();
const v13 = {b:"caller",toString:v4,__proto__:v7};
const v15 = v6.push();
const v17 = [];
const v18 = {length:1337,e:1337,c:v17,a:1337,toString:"number"};
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        let v25 = 1337;
        let v26 = v25;
        for (let v30 = 0; v30 < 100; v30++) {
            const v31 = v20();
        }
        const v32 = {};
        let v33 = v32;
        const v38 = [2153514987,13.37,13.37,13.37,v24];
        const v40 = [v33,v38,v38];
        const v41 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v38,__proto__:v40};
        const v42 = {a:1337,toString:v32,constructor:"NEGATIVE_INFINITY",valueOf:v41,b:13.37,c:Math,e:Math};
    } catch(v43) {
    }
}
const v44 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v46 = new Proxy(v18,v44);
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
