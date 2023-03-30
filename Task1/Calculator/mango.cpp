#include <bits/stdc++.h>
using namespace std;

// function for maximum subset diff
int maxDiff(int arr[], int n)
{
    sort(arr, arr + n);
    if (n >= 4)
    {
        int min1 = arr[0];
        int min2 = arr[2];
        int max1 = arr[n - 1];
        int max2 = arr[n - 2];
        return (max1 - min1) + (max2 - min2);
    }
    else if (n == 3)
    {
        return (arr[n - 1] - arr[0]);
    }
    return 0;
}
int main()
{
    int arr[] = {3, 7, 2, 4, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Maximum Difference = " << maxDiff(arr, n);
    return 0;
}