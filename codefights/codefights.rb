#factorial sum and modulo 9
def digitSumFactorial(n)
    sum = 1
    for i in 1..n
        sum*=i
    end
    s = sum.to_s.split("").inject(0){|sum,x|sum+=x.to_i}
    s % 9
end
#test
Input:
n: 25
Output:
0
Expected Output:
0
Console Output:
Empty

#integer to decimal
def companyBotStrategy(trainingData)
    k = []
    e = []
    # trainingData[0][1]
    for i in 0..trainingData.length-1
        if trainingData[i][1]>0
            k<<trainingData[i][0]
            e<<trainingData[i][1]
        end
    end
    ss = (k.inject(0){|sum,x|sum+=x}).to_f
    dd = (e.inject(0){|sum,x|sum+=x}).to_f
    if dd==0
        return 0.0
    end
    ss/dd
end

#run some operator from string
def arithmeticExpression(a, b, c)
    s = ['+','-','*','/']
    for i in 0...s.length
        if a.to_f.send(s[i],b.to_f)==c then return true end
    end
    return false
end
#test
For A = 2, B = 3 and C = 5, the output should be
arithmeticExpression(A, B, C) = true.
We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.
For A = 8, B = 2 and C = 4, the output should be
arithmeticExpression(A, B, C) = true.
We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.
For A = 8, B = 3 and C = 2, the output should be
arithmeticExpression(A, B, C) = false.