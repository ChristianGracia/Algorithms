func leastFactorial(n: Int) -> Int {
    var k : Int = 0
    while true {
        
        k += 1
        var number : Int = k
        var factorialNum : Int = 1
   
        
        for i in (1...k ).reversed() {
            factorialNum *= number
            number -= 1
            if factorialNum >= n {
                return factorialNum
            }
            
        }
        
    }

}

// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

// Example

// For n = 17, the output should be
// leastFactorial(n) = 24.

// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
