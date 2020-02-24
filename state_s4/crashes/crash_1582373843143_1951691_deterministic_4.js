function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = ["length",v5,13.37,v3];
const v7 = {e:13.37,constructor:"length",b:1337,d:Boolean,length:v5};
const v8 = {__proto__:"length",constructor:v6,d:v5,toString:v6};
let v9 = v8;
const v11 = new Int8Array();
const v13 = Function();
let v15 = 255;
const v16 = v15 + 1;
const v17 = v11.slice();
const v19 = [13.37];
const v23 = [13.37];
const v25 = [1337,1337,1337];
const v26 = ["N*d4*m/H0F","N*d4*m/H0F",v25];
const v27 = {constructor:v25,b:-1662380622,c:v23,a:v23,__proto__:v19,constructor:v26};
const v29 = [13.37,13.37,v27,13.37];
for (const v30 of v29) {
    function v31(v32,v33) {
        let v37 = 1;
        let v38 = v37;
        for (const v40 in "object") {
            const v43 = [1337,1337,1337,1337,1337];
            function v44(v45,v46,v47,v48) {
                'use strict'
                try {
                    v48[3] = v48;
                } catch(v49) {
                    let v51 = 0;
                    const v52 = v51 + 1;
                    const v55 = 2.2250738585072014e-308 / 3890419937;
                    const v56 = [v55];
                    let v57 = v56;
                    const v59 = Math.acosh(v57);
                }
                return v43;
            }
            const v60 = {deleteProperty:v44,set:v44,getPrototypeOf:v44,call:v44,preventExtensions:v44,isExtensible:v44,construct:v44,get:v44,ownKeys:v44,setPrototypeOf:v44,has:v44};
            const v62 = new Proxy(v43,v60);
            v62[1] = "MIN_VALUE";
        }
        while (v38 === v37) {
            function v63(v64,v65) {
            }
        }
        for (let v66 = 0; v66 < 512; v66++) {
        }
    }
    const v67 = v31();
}
}
%NeverOptimizeFunction(main);
main();
