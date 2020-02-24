function main() {
const v4 = [1337,1337,1337,1337];
const v5 = {e:13.37,__proto__:v4,length:3482436946,toString:13.37,c:"MAX_VALUE",valueOf:"MAX_VALUE"};
const v6 = v5.sort();
}
%NeverOptimizeFunction(main);
main();
