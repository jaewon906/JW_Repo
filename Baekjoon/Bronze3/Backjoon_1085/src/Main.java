import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {
//throws IOException은 문자 그대로 해석하면 예외처리를 던진다라는 의미이다. 이말은 결국 우리가 아는 try catch 처럼 try에서 에러가 나는것을
//catch에서 잡아주게 함으로서 코드 실행이 막히지 않도록 해주고 이 예외를 상위 메서드에 던지는 역할을 한다.
	public static void main(String[] args) throws IOException {
// 크기 할당 & 초기화 없이 배열 참조변수만 선언 : int[] arr / int arr[]
// 선언과 동시에 배열 크기 할당 : int[] arr = new int[5] / String[] arr = new String[5]
// 선언 후 배열 크기 할당 : int[] arr; arr = new int[5]
		String[] currentLocation = new String[2];
		String[] rightUpRectangularPoint = new String[2];
		int[] rightUpRectangularPointToInt = new int[2];
		int[] currentLocationToInt = new int[2];
		
//		배열에서 Arrays.toString(val)을 하지 않고 출력을 바로 해버리면 메모리 주소값 [I@345345이런식으로 나온다
//		[는 1차원 배열의 의미이고 I는 배열의 타입을 알려주는 요소이다. @뒤의 값이 메모리 값이다.
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 버퍼에 입력
		try {
		
		for(int i=0; i<currentLocation.length; i++) {
			// read() 는 주로 정수형을 입력 받을 때, readLine()은 주로 문자열을 입력받을 때 사용한다.
			currentLocation[i] = br.readLine();
			currentLocationToInt[i]= Integer.parseInt(currentLocation[i]);
		}
		for(int i=0; i<rightUpRectangularPoint.length; i++) {
			rightUpRectangularPoint[i] = br.readLine();
			rightUpRectangularPointToInt[i]= Integer.parseInt(rightUpRectangularPoint[i]);

		};
//		현재위치의 x좌표와 좌우 직사각형 경계면과의 거리 중 짧은 거리를 찾아내는 코드
		int leftToCurrent_X = currentLocationToInt[0];
		int rightToCurrent_X = rightUpRectangularPointToInt[0] - currentLocationToInt[0];
		int findWay_X = (leftToCurrent_X <= rightToCurrent_X) ? leftToCurrent_X : rightToCurrent_X;
		
		
//		현재위치의 y좌표와 좌우 직사각형 경계면과의 거리 중 짧은 거리를 찾아내는 코드
		int leftToCurrent_Y = currentLocationToInt[1];
		int rightToCurrent_Y = rightUpRectangularPointToInt[1] - currentLocationToInt[1];
		int findWay_Y = (leftToCurrent_Y <= rightToCurrent_Y) ? leftToCurrent_Y : rightToCurrent_Y;
		
		
//		가장 가까운 길이를 찾아주는 코드
		int findWay = (findWay_X <= findWay_Y) ? findWay_X : findWay_Y;
//		System.out.print("type 은 : "+rightUpRectangularPoint.getClass().getName()); // 변수의 타입명을 알고싶을 땐 val.getClass.getName()
//		정수형을 문자형으로 변환하는 방법에는 3가지가 있다
//		1) String.valueOf(num);
//		2) Integer.toString(num);
//		3) String str = "" + num; , 3번 같은 경우는 문자열 결합 연산이 들어가기 때문에 1,2보다 성능이 안좋을 수 있다.

		String aa = Integer.toString(findWay);
		String bb = aa.substring(1,1);
		int cc = Integer.parseInt(bb);
		System.out.print(cc);
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); //버퍼에 입력된 값들을 불러오기위한 변수 선언
		bw.write(cc); //버퍼에 있는 데이터들을 출력 
		bw.flush();bw.close(); //버퍼에 있는 모든 데이터들을 비우고 열렸던 버퍼를 닫아주는 메서드
		}
		catch(Exception e){
			System.out.print("");
		}
		
	}

}

/*문자열을 분해하는 방법은 3가지가 있다.
 * 1) 문자열을 char로 변환하는 방법 : str.toCharArray()
 * 2) 문자열을 추출하는 방법 : str.subString(start, end) start : 문자열 시작점, end : 문자열 끝 점
 * 3) split("") 으로 하는 방법 :
 *    String strArr = str.split("")을 하고 for ( String s : strArr){}을 하면 한글자씩 분해된다.
 * 
 */