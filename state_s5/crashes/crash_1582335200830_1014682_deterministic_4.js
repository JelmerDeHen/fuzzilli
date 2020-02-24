function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337];
const v8 = [-1511813568,1337];
const v9 = {__proto__:"name",length:v7,d:v8,valueOf:"name",e:v5};
const v10 = {b:-1511813568,d:v7,__proto__:v7,length:v9,constructor:Function,e:v8,a:1337};
const v13 = [v5,13.37];
const v14 = v13.toLocaleString();
const v15 = v14.padStart(268435456);
const v16 = v15.split(v10);
}
%NeverOptimizeFunction(main);
main();
