// QuickSort sử dụng đệ quy

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const n = arr.length;
    const y = arr[Math.floor(n / 2)];
    const arrLeft = [];
    const arrRight = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] < y) {
            arrLeft.push(arr[i]);
        }
        if (arr[i] > y) {
            arrRight.push(arr[i]);
        }
    }

    return [...QuickSort(arrLeft), y, ...QuickSort(arrRight)];
}

console.log(QuickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));