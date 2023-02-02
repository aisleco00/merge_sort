package main

import "fmt"

func mergeArr(left, right []int) []int {
	result := make([]int, 0, len(left)+len(right))
	i, j := 0, 0

	for i < len(left) && j < len(right) {
		if left[i] < right[j] {
			result = append(result, left[i])
			i += 1
		} else {
			result = append(result, right[j])
			j += 1
		}
	}

	for i < len(left) {
		result = append(result, left[i])
		i += 1
	}

	for j < len(right) {
		result = append(result, right[j])
		j += 1
	}
	return result
}

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[:mid])
	right := mergeSort(arr[mid:])
	return mergeArr(left, right)
}

func main() {
	arr := []int{24, 13, 10, 12, 8, 6, 9, 22, 1, 2, 16, 5, 20, 14, 11, 25, 3, 4, 21, 15, 19, 17, 7, 18, 23}
	sortedArr := mergeSort(arr)
	fmt.Println(sortedArr)
}
