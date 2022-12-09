package q46;
import java.util.*;
public class q46a {
	public static List<List<String>> anagram(String[] s){
		List<List<String>> result=new ArrayList<>();
		HashMap<String,List<String>> map=new HashMap<>();
		for(String st:s) {
			char[] ch=st.toCharArray();
			Arrays.sort(ch);
			String k=new String(ch);
			if(map.containsKey(k)) {
				map.get(k).add(st);
			}
			else {
				List<String> stList=new ArrayList<>();
				stList.add(st);
				map.put(k, stList);
			}
		}
		result.addAll(map.values());
		return result;
	}
	public static void main(String[] args) {
		String[] str= {"eat","tea","tan","ate","nat","bat"};
		List<List<String>> res=anagram(str);
		res.forEach(r->System.out.println(r+""));
	}
}
