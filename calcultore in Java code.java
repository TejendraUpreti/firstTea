import java.util.Scanner;

public class cal {
    public static void main(String[] args) {

        Scanner clct = new Scanner(System.in);

        System.out.println("Enter the first number (a): ");
        double a = clct.nextDouble();

        System.out.println("Enter the seccond number (b): ");
        double b = clct.nextDouble();

        System.out.println("Enter the operation (+, -, *, /): ");
        char operation = clct.next().charAt(0);

        double result = 0;

        switch (operation) {
            case '+':
                result = a + b;
            break;

            case '-':
                result = a - b;
            break;
            
            case '*':
                result = a * b;
            break;    
        
            case '/':
                if (b != 0) {
                    result = a / b;
                } else {
                    System.out.println("Error: Division by zero");
                    return;
                }
                break;
            default:
                System.out.println("Invalid operation");
                return;
        }

        System.out.println("Result: " + result);

    }
}
