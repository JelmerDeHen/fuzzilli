function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [1337,v4];
const v8 = {c:"3SWtFU3mJU",e:1337,b:4248638871,a:v4,length:v6,valueOf:v6,constructor:v7};
const v9 = {c:v8,b:1337,toString:v8,valueOf:1337,length:WeakSet};
let v10 = v9;
const v14 = new ArrayBuffer(1337);
const v15 = v14.slice();
const v16 = new DataView(v15);
function v18(v19,v20) {
    let v24 = 0;
    const v25 = 3156875969 === "pvU0UUjoya";
    let v27 = v25;
    do {
        const v28 = v16.getInt8(0);
        const v29 = v27 + 1;
        let v30 = v28;
        const v31 = !v30;
        v30 = v31;
        v27 = v29;
    } while (v27 < 7);
    try {
        const v32 = {get:v19,deleteProperty:v19,construct:v20,setPrototypeOf:v18};
        const v34 = new Proxy(v10,v32);
    } catch(v35) {
        v9.__proto__ = v7;
    }
    const v36 = v18(v24);
}
const v37 = v18();
}
%NeverOptimizeFunction(main);
main();
