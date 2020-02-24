function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [13.37,v6];
const v8 = {valueOf:v6,toString:"number",__proto__:arguments,length:468766690,e:arguments,b:13.37,a:arguments};
const v9 = {e:"number",d:"number",constructor:468766690,a:13.37,c:v8,length:13.37};
let v10 = 468766690;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337];
const v15 = [v14,v12];
const v16 = {c:13.37,e:v12,constructor:1337,length:13.37};
const v17 = {e:13.37};
let v18 = v15;
const v20 = [13.37,13.37,13.37,13.37,13.37];
let v22 = "jZZhI/kPfh";
const v24 = [Infinity,Infinity,Infinity];
const v25 = [v22,v24];
function v27(v28,v29) {
    let v32 = 0;
    do {
        const v33 = v32 + 1;
        v32 = v33;
    } while (v32 < 7);
    try {
        const v34 = v27();
    } catch(v35) {
        let v36 = undefined;
        const v37 = {isExtensible:v35,defineProperty:v29,preventExtensions:v36,getPrototypeOf:v28,deleteProperty:v35,construct:v36,getOwnPropertyDescriptor:v36,apply:v36,has:v28,set:v27};
    }
}
const v38 = v27();
}
%NeverOptimizeFunction(main);
main();
