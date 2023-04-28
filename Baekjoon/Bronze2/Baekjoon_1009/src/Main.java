import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
public class Main {

	public static void main(String[] args) throws IOException {
		// TODO 
		
		String testCase;
		String[] test_a;
		String[] test_b;
		int[] totalDataAmount;
		int[] comNumber;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		testCase = br.readLine();
		int testCaseToInt = Integer.parseInt(testCase);
		test_a = new String[testCaseToInt];
		test_b = new String[testCaseToInt];
		int[] test_aa = new int[testCaseToInt];
		int[] test_bb = new int[testCaseToInt];
		totalDataAmount = new int[testCaseToInt];
		comNumber = new int[testCaseToInt];
		
		for(int i=0; i<testCaseToInt; i++) {
			
			test_a[i] = br.readLine();
			test_aa[i] = Integer.parseInt(test_a[i]);
			test_b[i] = br.readLine();
			test_bb[i] = Integer.parseInt(test_a[i]);
			totalDataAmount[i] = test_aa[i] ^ test_bb[i];
			comNumber[i] = totalDataAmount[i] % 10;
			
		}
				
		System.out.println(10%6);
		System.out.println(test_aa);
		System.out.println(test_bb);
	}

}
