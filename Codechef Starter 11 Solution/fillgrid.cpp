#include <bits/stdc++.h>
using namespace std;

int main() {
  
  int t;
  cin>>t;
  while(t--)
  {
      int n;
      cin>>n;
      if(n&1)
      {vector<vector<int>>v(n,vector<int>(n,1));
          int k=0;
          for(int i=0;i<n;i++)
          {
              v[i][k]=-1;
              k++;
          }
          for(int i=0;i<n;i++)
          {
              for(int j=0;j<n;j++)
              cout<<v[i][j]<<" ";
              
              cout<<endl;
          }
          
      }
      else
      {
          vector<vector<int>>v(n,vector<int>(n,-1));
           for(int i=0;i<n;i++)
          {
              for(int j=0;j<n;j++)
              cout<<v[i][j]<<" ";
              
              cout<<endl;
          }
      }
      
  }
  return 0;
}