package efw.taglib;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
/**
 * InputBehaviorタグを処理するクラス。
 * <efw:InputBehavior/>
 * headタグ内に追加すれば、efwの入力機能を利用できる。
 * @author Chang Kejun
 *
 */
public class InputBehavior extends SimpleTagSupport  {
	/**
	 * タグ処理。
	 *efwの入力機能を利用するため、複数のcssとjsを取り込むタグを作成する。
	 */
	@Override
	public void doTag() throws JspException, IOException {
		super.doTag();
		JspWriter out = this.getJspContext().getOut();
		out.print("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"./efw/efw.client.inputbehavior.js\"></script>");
	}
}
