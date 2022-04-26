function fibo(number) {

    var a = 0;
    var b = 1;
    for (i = 0; i < number; i++) {
        var c = a + b;
        a = b;
        b = c;
        console.log(b);
    }
}
fibo(10);

//output
1
2
3
5
8
13
21
34
55
89