import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("문장의 갯수를 입력하세요");
		int length = 0;
		
		length = sc.nextInt();
		String [] arr = new String[length];
		
		System.out.println("문장을 이전의 갯수만큼 입력하세요");
		System.out.println(length);
//		next와 nextLine의 차이점은 \n을 포함하는 한 라인을 읽냐 전체 라인을 읽냐의 차이
		for(int i=0; i<length;i++) {
			
			   arr[i]= sc.next();
			
			System.out.println("arr"+"["+i+"]"+" = "+arr[i]);
			
		}
		
		for(int i=0;i<2;i++){
			
		}

	}

}
