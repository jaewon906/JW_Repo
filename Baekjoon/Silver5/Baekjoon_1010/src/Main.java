import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
public class Main {
	static String[] input;
	public static void main(String[] args) throws IOException{
/*		
//	  condition : n < m ( n : left of river, m right of river, each of river can not intersect, 0 < n < = m < 30)
//	  solution : combination nCm = n!/m!(n-m)!
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String testCase;	
		testCase = br.readLine();
		int testCaseInt = Integer.parseInt(testCase);
		
		String[] leftSite = new String[testCaseInt];
	    String[] rightSite = new String[testCaseInt];
		int[] leftSiteInt = new int[testCaseInt];
		int[] rightSiteInt = new int[testCaseInt];
			  
		
		for(int i=0; i<testCaseInt; i++) {
			leftSite[i] = br.readLine();
			leftSiteInt[i] = Integer.parseInt(leftSite[i]);
			rightSite[i] = br.readLine();
			rightSiteInt[i] = Integer.parseInt(rightSite[i]);
			
		}
		double[] n = new double[testCaseInt];
		double[] m = new double[testCaseInt];
		double[] nm = new double[testCaseInt];
		double[] factorial = new double[testCaseInt];
		
		for(int i=0 ; i<testCaseInt; i++) {
			n[i]=1;
			m[i]=1;
			nm[i]=1;
			factorial[i]=1;
		}
		
;
		
//		n!  구하기
		for(int i=0; i<testCaseInt; i++) {
			
		
			for(int j=1; j<=leftSiteInt[i]; j++) {
				n[i] *= j;
				
			}
			
			System.out.print(" n : "+n[i]);
		}
//	     m! 구하기
		for(int i=0; i<testCaseInt; i++) {
			
			
			for(int j=1; j<=rightSiteInt[i]; j++) {
				m[i] *= j;
				
			}
			
			System.out.print(" m : "+m[i]);
		}
		
//		(n-m)! 구하기
        for(int i=0; i<testCaseInt; i++) {
			
			
			for(int j=0; j<=rightSiteInt[i] - leftSiteInt[i]; j++) {
				nm[i] *= j;
				if(nm[i]==0) {
					nm[i]=1;
				}
			}
			
			System.out.print(" nm : "+nm[i]);
		}
		
		for(int i=0; i<testCaseInt; i++) {
			factorial[i] = m[i]/(n[i]*nm[i]);

			System.out.println(" result : "+ Math.round(factorial[i]));
		}*/

//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//		String testCaseRaw = br.readLine();
//		int testCase = Integer.parseInt(testCaseRaw);
//		String[][] input = new String[testCase][2];
//			
//		   for(int i=0; i<testCase; i++) {
//			   for(int j=0; j<2; j++) {
//				   input[i][j]=br.readLine();
//				   System.out.println("input"+ i+ j +"= "+input[i][j]);
//			   }
//		   }
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String testCaseRaw = br.readLine();
		
		int testCase = Integer.parseInt(testCaseRaw);
		input = new String[2*testCase];

		double[] inputToint = new double[2*testCase];
		
		for(int i=0; i<testCase;i++) {
//      readLine은 EOF가(End Of File) 들어오기 전에 입력을 시켜주는 메서드이다. 즉 한줄에 하나씩 입력을 받는다.
			 input = br.readLine().split(" "); // testCase를 크게 주어도 새로 입력되는 데이터가 기존의 데이터가 위치하고 있는 배열 인덱스에 덮어쓰기가 되고있음.
		}
		System.out.println("after : "+input.length);
		System.out.print(input[0]+"//"+input[1]);
		for(int i=0; i<2*testCase; i++) {
			inputToint[i] = Integer.parseInt(input[i]);
		}
		System.out.println(inputToint[0] + inputToint[1]);
//			arr[0], arr[1] -> test1
//			arr[2], arr[3] -> test2
//			arr[2(n-1)], arr[2(n-1)+1] -> testn
//		arr[2(n-1)] = left, arr[2(n-1)+1] = right
			
		double[] n = new double[testCase];
		double[] m = new double[testCase];
		double[] nm = new double[testCase];
		double[] factorial = new double[testCase];
		
		for(int i=0 ; i<testCase; i++) {
			n[i]=1;
			m[i]=1;
			nm[i]=1;
			factorial[i]=1;
		}
//      n! 구하기		
		for(int i=0; i<testCase; i++) {
			
			
			for(int j=1; j<=inputToint[2*i]; j++) {
				n[i] *= j;
				
			}
			
			System.out.print(" n : "+inputToint[i]);
		}
//	     m! 구하기
		for(int i=0; i<testCase; i++) {
			
			
			for(int j=1; j<=inputToint[2*i+1]; j++) {
				m[i] *= j;
				
			}
			
			System.out.print(" m : "+inputToint[i]);
		}
		
//		(n-m)! 구하기
        for(int i=0; i<testCase; i++) {
			
			
			for(int j=0; j<= inputToint[2*i+1] - inputToint[2*i]; j++) {
				nm[i] *= j;
				if(nm[i]==0) {
					nm[i]=1;
				}
			}
			
			System.out.print(" nm : "+nm[i]);
		}
		
		for(int i=0; i<testCase; i++) {
			factorial[i] = m[i]/(n[i]*nm[i]);

			System.out.println(" result : "+ Math.round(factorial[i]));
		}
	
	}

}

