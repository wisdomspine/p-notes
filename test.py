def solution(A):
    map= dict.fromkeys(A, True)
    max_smallest_positive = len(A) + 2
    for i in range(1, max_smallest_positive):
        if(not(map.get(i))):
            return i
        