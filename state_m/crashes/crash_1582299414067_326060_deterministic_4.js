function main() {
const v3 = [13.37];
const v5 = ["ZGVqTqNzbz"];
v5[1680899531] = "ZGVqTqNzbz";
const v6 = {__proto__:v5,b:v3,a:v5,e:v3,d:Int8Array,c:1337};
const v7 = v6.sort();
}
%NeverOptimizeFunction(main);
main();
