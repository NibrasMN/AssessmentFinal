package q47;

public class MotifWidgetFactory extends WidgetFactory implements MotifWindow,MotifScrollBar {
	public void CreateScrollBar() {
		System.out.println("Motif ScrollBar created..!");
	}
	
	public void CreateWindow() {
		System.out.println("Motif Window created..!");
	}
}
