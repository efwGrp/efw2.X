package efw.taglib;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
/**
 * JQueryUIタグを処理するクラス。
 * <efw:JQueryUI/>
 * headタグ内に追加すれば、jQueryUIの入力機能を利用できる。
 * @author Chang Kejun
 *
 */
public class JQueryUI extends SimpleTagSupport  {
	/**
	 * タグ処理。
	 *jQueryUI機能を利用するため、複数のcssとjsを取り込むタグを作成する。
	 */
	@Override
	public void doTag() throws JspException, IOException {
		super.doTag();
		JspWriter out = this.getJspContext().getOut();
		out.print("<link href=\"./efw/jquery-ui.min.css\" rel=\"stylesheet\">");
		out.print("<link href=\"./efw/jquery-ui.structure.min.css\" rel=\"stylesheet\">");
		out.print("<link href=\"./efw/jquery-ui.theme.min.css\" rel=\"stylesheet\">");
		out.print("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"./efw/jquery-ui.min.js\"></script>");
	}
}
