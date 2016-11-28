#if else
def multiple(x):
    if x%3==0 and x%5==0:
        return "BangBoom"
    elif x%5==0:
        return "Boom"
    elif x%3==0:
        return "Bang"
    else: return "Miss"
#other way
def multiple(x):
    return 'Bang' * (x % 3 == 0) + 'Boom' * (x % 5 == 0) or 'Miss'
#test
Test.assert_equals(multiple(30), "BangBoom")
Test.assert_equals(multiple(3), "Bang")
Test.assert_equals(multiple(98),"Miss")
Test.assert_equals(multiple(65),"Boom")
Test.assert_equals(multiple(23),"Miss")
Test.assert_equals(multiple(15),"BangBoom")