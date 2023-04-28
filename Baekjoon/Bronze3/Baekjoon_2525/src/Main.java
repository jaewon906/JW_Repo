import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	 	  
	  Scanner sc = new Scanner(System.in);
	  int A = sc.nextInt();
	  int B = sc.nextInt();
	  int C = sc.nextInt();
	  int M = B+C;
	 
	  if(A<24 || A>=0) {     //시 가 0시부터 23일 경우

		for(int i=1; i<=M; i++){  //예를 들어 A는 10 M이 140일 경우 for문을 한번 수행 시 M = 80, A = 11이 되고 M은 80이기 때문에 if문에 여전히 갇히게 되므로 한번 더 수행된다.
			                      //따라서 A는 12, M은 20이 된다.
		 if(M>=60){		
		        M=M-60;
			    A=A+1;

			 }
      }
  }  
	  
	  if(A>=24) { //시 가 24이상일 경우
		  A=A-24;
		 
		 for(int i=1; i<=M; i++){
				if(M>=60){	
			        M=M-60;
				    A=A+1;
				    
				 }	  
	          } 
	  }
	  
	 System.out.printf("%d %d",A,M);
	}
}
