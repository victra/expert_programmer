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

#replace element array
def arrayReplace(inputArray, elemToReplace, substitutionElem)
    inputArray.map!{|x|x==elemToReplace ? substitutionElem : x}
end

#insert array to array
def concatenateArrays(a, b)
    a << b
    a.flatten!
end
output:
For a = [2, 2, 1] and b = [10, 11], the output should be
concatenateArrays(a, b) = [2, 2, 1, 10, 11].

# delete element arrat
a= [1,1,1,2,2,3]
delete_list = [1,3]
delete_list.each do |del|
    a.delete_at(a.index(del))
end
result : [1, 1, 2, 2]

#delete/ remove element array with index and range delete
def removeArrayPart(inputArray, l, r)
    inputArray.slice!(l,range+1) 
    inputArray
end

# array round up
def isSmooth(arr)
    r = ((arr.length).to_f/2).ceil
    if arr.length%2==0 then tengah = arr[r-1]+arr[r] else tengah = arr[r-1] end
        tengah
    if arr[0]==arr[-1] && tengah==arr[0] then return true end
    return false
end
#task
For arr = [7, 2, 2, 5, 10, 7], the output should be
isSmooth(arr) = true.
The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

