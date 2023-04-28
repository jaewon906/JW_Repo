
import java.util.*;
public class Main {
   
	public static void main(String[] args) {
	//System.out.println("세 주사위 눈을 입력하세요");
	
	int Dice[] = new int[3];
	int Money = 0;
	
	Scanner sc = new Scanner(System.in);          //세개의 주사위 눈을 입력 받는다.
	Dice[0] = sc.nextInt();
	Dice[1] = sc.nextInt();
	Dice[2] = sc.nextInt();
	//for(int i=0; i<=2; i++)
	//{
	//	Scanner sc = new Scanner(System.in);      //세개의 주사위 눈을 입력 받는다.
	//	Dice[i] = sc.nextInt();
		
	//}  
	    int judge_1 = (Dice[0]>Dice[1]) ? Dice[0]:Dice[1];  // 가장 큰 주사위 눈을 판별한다
	    int judge = (judge_1>Dice[2]) ? judge_1:Dice[2];
	    
    
	if(Dice[0]==Dice[1] || Dice[1] ==Dice[2] || Dice[2] ==Dice[0])  //같은 눈이 2개일 경우         
	{   
		if(Dice[0]==Dice[1] && Dice[1] ==  Dice[2] && Dice[2] ==Dice[0]) //3개의 눈이 같을 때
		{
			Money = 10000+Dice[0]*1000;
		    System.out.println(Money);
		}
		else
		for(int i = 0; i<Dice.length;i++)
		{
			for(int j = i+1; j <Dice.length; j++)
			{
				if(Dice[i]==Dice[j])
				{
					System.out.println(1000+Dice[i]*100);
				}
			}
	
		} 
           
	}
	
	if(Dice[0] != Dice[1] && Dice[1] != Dice[2] && Dice[2] != Dice[0])  //서로 다른 눈이 나올 때
	{      
	         System.out.println(judge*100);
	}
		
	}

}
