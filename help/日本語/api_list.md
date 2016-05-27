<H2>efw Javascript API</H2>
	
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>APIの一覧</B></FONT></TH>
	</TR>
</TABLE>

<pre>
efw
├─client
│  ├─<a href="#efw.client.fire">fire</a> ( <a href="#efw.eventParams">eventParams</a> )                                                    <span style="color:yellow;">★★★</span>
│  ├─<a href="#efw.client.pickup">pickup</a> ( <a href="#efw.event.paramsFormat">paramsFormat</a> , <a href="#efw.eventParams.manualParams">manualParams</a> )</a>                                  <span style="color:yellow;">★</span>
│  ├─<a href="#efw.client.show">show</a> ( <a href="#efw.event.fire.eventResult">eventResult</a> )                                                    <span style="color:yellow;">★</span>
│  ├─<a href="#efw.client.alert">alert</a>( message , callback )                                             <span style="color:yellow;">★★★</span>
│  ├─messages
│  │  └─...
│  └─format
│      ├─<a href="#efw.client.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span style="color:yellow;">★★</span>
│      ├─<a href="#efw.client.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span style="color:yellow;">★★</span>
│      ├─<a href="#efw.client.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span style="color:yellow;">★★</span>
│      └─<a href="#efw.client.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span style="color:yellow;">★★</span>
└─server
    ├─<a href="#efw.server.prepare">prepare</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )                                      <span style="color:yellow;">★</span>
    ├─<a href="#efw.server.finish">finish</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> , <a href="#efw.event.fire.eventResult">eventResult</a> )                         <span style="color:yellow;">★</span>
    ├─messages
    │  └─...
    └─format
    │  ├─<a href="#efw.server.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span style="color:yellow;">★★</span>
    ├─properties
    │  ├─<a href="#efw.server.properties.get">get</a> ( key , defaultValue )                                          <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.properties.getBoolean">getBoolean</a> ( key , defaultValue )                                   <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.properties.getInt">getInt</a> ( key , defaultValue )                                       <span style="color:yellow;">★★</span>
    ├─session
    │  ├─<a href="#efw.server.session.get">get</a> ( key )                                                         <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.session.set">set</a> ( key , value )                                                 <span style="color:yellow;">★★</span>
    ├─db
    │  ├─<a href="#efw.server.db.open">open</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                           <span style="color:yellow;">★</span>
    │  ├─<a href="#efw.server.db.getSingle">getSingle</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                       <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.executeQuery">executeQuery</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                    <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.executeUpdate">executeUpdate</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                   <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.db.execute">execute</a>( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                          <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.commit">commit</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                         <span style="color:yellow;">★</span>
    │  ├─<a href="#efw.server.db.rollback">rollback</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                       <span style="color:yellow;">★</span>
    │  └─<a href="#efw.server.db.closeAll">closeAll</a> ( )                                                        <span style="color:yellow;">★</span>
    └─event
        └─<a href="#efw.server.event.load">load</a> ( <a href="#efw.eventParams.eventId">eventId</a> )


<a href="#efw.eventParams">eventParams</a>                                                                  <span style="color:yellow;">★★★</span>
├─<a href="#efw.eventParams.server">server</a>                                                                     <span style="color:yellow;">★</span>
├─<a href="#efw.eventParams.eventId">eventId</a>                                                                    <span style="color:yellow;">★★★</span>
├─<a href="#efw.eventParams.manualParams">manualParams</a>                                                               <span style="color:yellow;">★★</span>
└─<a href="#efw.eventParams.success">success</a>                                                                    <span style="color:yellow;">★★★</span>

<a href="#efw.event">event</a>                                                                        <span style="color:yellow;">★★★</span>
├─<a href="#efw.event.outOfLogin">outOfLogin</a>                                                                 <span style="color:yellow;">★★</span>
├─<a href="#efw.event.include">include</a>                                                                    <span style="color:yellow;">★★</span>
│  ├─<a href="#efw.eventParams.eventId">eventId</a>                                                                 <span style="color:yellow;">★★</span>
│  └─<a href="#efw.event.mergeParamsFormat">mergeParamsFormat</a>                                                       <span style="color:yellow;">★★</span>
├─<a href="#efw.event.paramsFormat">paramsFormat</a>                                                               <span style="color:yellow;">★★★</span>
│  └─<a href="#efw.event.paramsFormat.checkStyle">checkStyle</a>                                                              <span style="color:yellow;">★★★</span>
└─<a href="#efw.event.fire">fire</a>                                                                       <span style="color:yellow;">★★★</span>
    ├─<a href="#efw.event.fire.requestParams">requestParams</a>                                                          <span style="color:yellow;">★★★</span>
    ├─<a href="#efw.event.fire.eventResult">eventResult</a>                                                            <span style="color:yellow;">★★★</span>
    │  └─<a href="#efw.event.fire.eventResult.appendMask">appendMask</a>                                                          <span style="color:yellow;">★★★</span>
    └─<a href="#efw.event.fire.error">error</a>                                                                  <span style="color:yellow;">★★★</span>

<a href="#efw.format.formatter">formatter</a>                                         	                         <span style="color:yellow;">★★★</span>
<a href="#efw.format.rounder">rounder</a>                                                                      <span style="color:yellow;">★★</span>

<A href="#efw.sqlExecution.executionParams">executionParams</A>                                                              <span style="color:yellow;">★★★</span>
<a href="#efw.sqlExecution.executionResult">executionResult</a>                                                              <span style="color:yellow;">★★★</span>
<a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a>                                                             <span style="color:yellow;">★</span>

</pre>

