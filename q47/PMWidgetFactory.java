package q47;

public class PMWidgetFactory extends WidgetFactory implements PMWindow,PMScrollBar {
	
	public void CreateScrollBar() {
		System.out.println("PM ScrollBar created..!");
	}
	
	public void CreateWindow() {
		System.out.println("PM Window created..!");
	}
}
