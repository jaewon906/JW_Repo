import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testCase = Integer.parseInt(br.readLine());
//      StringTokenizer(문자열, 구분자, true/false( default : false)) 입력 받은 문자열을 구분자를 통해 false : 분리할것이냐 / true : 구분자도 포함해서 출력할 것이냐.
//		즉, 문자열 하나 하나를 분리해주는 애.
//		StringTokenizer 와 split의 차이 :
//		전자는 java.util에 포함되어 있는 클래스, split은 String에 속해있는 메소드.
//		전자는 문자 or 문자열로 구분, split은 정규표현식으로 구분
//		전자는 빈 문자열을 토큰으로 인식하지 않지만 split은 빈 문자열을 토큰으로 인식.
//		전자는 결과값이 문자열이라면 split은 결과 값이 문자열 배열.
		StringTokenizer st = new StringTokenizer(br.readLine());

		
		int[] count = new int[testCase];
		Double[] move = new Double[testCase];
		Double[] destination = new Double[testCase];
		Double[]InputXY = new Double[2*testCase]; 

		
//		k-1, k, k+1 광년 중 하나를 랜덤으로 플러스하는 로직
//		도착하기 직전에는 반드시 1광년을 이동해야함.
//		조건 : 입력 첫줄에는 테스트 경우의 수를 입력 받고 첫번째 입력에는 현재 위치, 두번째 입력에는 목표 위치를 입력함.
//		(0 <= x < y < 2^31)
//		처음에는 -1 0 1 광년을 움직일 수 있는데 실질적으로는 1광년만 이동하는것이고, 두번 째 이동시에는 0 1 2 광년을 이동할 수 있다. 
//		만약 두번째 이동에서 2광년을 이동했다면 다음 이동에서는 1 2 3	광년을 이동할 수 있게 된다.
		
		
//      입력 받는 구간
		for(int i=0; i<2*testCase; i++) {
			InputXY[i] = Double.parseDouble(st.nextToken());


		}
		
		
//		입력 x에 대하여 이동하는 광년의 최대값.
		for(int i=0; i<testCase; i++) {
			
	
			move[i] = (InputXY[2*i] * (InputXY[2*i]+1))/2;
			destination[i] = InputXY[2*i+1];
			
			while(move[i]>destination[i]) {
				count[i]++;
				System.out.println(count[i]);
			}
			
//			입력 y와 비교해서 이전 시점에서부터 이동했을 때가 y보다 작으면 move값을 1로 설정
            if(move[i] > destination[i]) {
				
			}

		}

//		출력 하는 구간
		for(int i=0; i<testCase; i++) {
			
			System.out.println();
		}
	}

}
