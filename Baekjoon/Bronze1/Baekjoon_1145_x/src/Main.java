import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] func = new int[5];
		int num = 0;
		int count = 0;
//		for 문 안에 Scanner를 입력하면 func[0] ~ func[4] 까지 사용자의 입력을 받는다.
//		int[] aa = {1,2,3,4,5,6}; System.out.print(dd); 를 적용하면 배열의 값이 출력 되는 것이 아니라 메모리 주소 값이 출력되어 알 수 없는 값이 나온다.
//		따라서 for ~~ {aa[i]} 처럼 반복문을 사용하고 배열의 첫번째 인덱스 부터 출력하거나 Arrays.toString(배열)을 사용해야 한다.

//		이 문제에서 필요한 알고리즘은 브루트포스 알고리즘이다.
//		브루트포스 알고리즘은 완전탐색 알고리즘으로 모든 경우의 수를 탐색해보는 알고리즘이다.
//		브루트포스 알고리즘의 방법으로는 for문, 백트래킹(재귀), DFS&BFS 탐색등이 있다.
//		전체 탐색하는 방법으로는 선형 구조를 전체적으로 탐색하는 순차 탐색, 비선형 구조를 전체적으로 탐색하는 깊이 우선 탐색(DFS)
//		너비 우선 탐색(BFS)가 기본적인 도구이다.
		for (int i=0; i<=4; i++){
			func[i] = sc.nextInt();
		}
		
			while(count<3) {
				num++;
			}
			if(num % func[0] ==0){count++;}
			if(num % func[1] ==0){count++;}
			if(num % func[2] ==0){count++;}
			if(num % func[3] ==0){count++;}
			if(num % func[4] ==0){count++;}
			
			if(count==3){
				System.out.println("count 가 3일 때 : " + num);	
	    }
			System.out.println("num : " + num);
			System.out.println("count : " + count);
			
	}

}
