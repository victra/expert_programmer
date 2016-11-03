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

