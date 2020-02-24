function main() {
Reflect.e = 0;
delete Reflect.e;
}
%NeverOptimizeFunction(main);
main();
