def heapify(arr, n, i):
	largest = i
	l = 2 * i + 1 # Left
	r = 2 * i + 2 # Right


	if l < n and arr[i] < arr[l]:
		largest = l

	
	if r < n and arr[largest] < arr[r]:
		largest = r

	# Change root only when needed
	if largest != i:
		arr[i],arr[largest] = arr[largest],arr[i] # swap

		# Heapify the root.
		heapify(arr, n, largest)

# The main function
def heapSort(arr):
	n = len(arr)

	
	for i in range(n // 2 - 1, -1, -1):
		heapify(arr, n, i)

	
	for i in range(n-1, 0, -1):
		arr[i], arr[0] = arr[0], arr[i] # swap
		heapify(arr, i, 0)

# Driver code to test above
arr = [ 98, 91, 93, 43, 4, 1]
heapSort(arr)
n = len(arr)
print ("Sorted array = ")
for i in range(n):
	print ("%d" %arr[i]),
