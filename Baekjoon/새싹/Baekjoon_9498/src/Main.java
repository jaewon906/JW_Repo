import java.util.*;
public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
       
		int grade = sc.nextInt();
		sc.close();
	
		if(grade<=100 && grade>=90) {
			System.out.println("A");
		
		}else if(grade<90 && grade>=80) {
			System.out.println("B");
		
		}else if(grade<80 && grade>=70) {
			System.out.println("C");
		
		}else if(grade<70 && grade>=60) {
			System.out.println("D");
		
		}else{
			System.out.println("F");
		
		}
		
	}

}
