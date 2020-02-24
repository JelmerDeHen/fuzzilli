function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v6 = new Uint8Array();
const v7 = v6.slice();
const v9 = {b:1337};
const v10 = {d:v9,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
const v11 = v10.fill(v7,v7,Float32Array);
const v12 = v11.sort();
}
%NeverOptimizeFunction(main);
main();
