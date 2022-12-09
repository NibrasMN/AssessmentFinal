package q47;

public class client {
	public static void main(String[] args) {
		PMWidgetFactory pm=new PMWidgetFactory();
		pm.CreateScrollBar();
		pm.CreateWindow();
		MotifWidgetFactory m=new MotifWidgetFactory();
		m.CreateScrollBar();
		m.CreateWindow();
	}
}
