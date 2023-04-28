
import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
        int H = sc.nextInt();
        int M = sc.nextInt();
        int M1 = M-45;
        
        if(H>24)
        {
        	H=24-H;
        	if(M1<0)
        	{
        		M1 = 60 + M1;
        	    H--;
        	}
        }
    
        if(H<24 && H>0)
        {
        	if(M1 < 0)
        	{ 
        		M1 = 60 + M1;
        		H--;
        	}       	
        }
        
        if(H==0)
        {
        	if(M1<0)
        	{
        	M1 = 60 + M1;
        	H=23;
        	}
        }
        System.out.printf("%d:%d",H,M1);
	}

}
