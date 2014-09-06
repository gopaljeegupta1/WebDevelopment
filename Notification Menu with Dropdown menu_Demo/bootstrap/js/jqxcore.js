/*
jQWidgets v3.2.2 (2014-Mar-21)
Copyright (c) 2011-2014 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx=a.jqx||{};a.jqx.define=function(b,c,d){b[c]=function(){if(this.baseType){this.base=new b[this.baseType]();this.base.defineInstance()}this.defineInstance()};b[c].prototype.defineInstance=function(){};b[c].prototype.base=null;b[c].prototype.baseType=undefined;if(d&&b[d]){b[c].prototype.baseType=d}};a.jqx.invoke=function(e,d){if(d.length==0){return}var f=typeof(d)==Array||d.length>0?d[0]:d;var c=typeof(d)==Array||d.length>1?Array.prototype.slice.call(d,1):a({}).toArray();while(e[f]==undefined&&e.base!=null){if(e[f]!=undefined&&a.isFunction(e[f])){return e[f].apply(e,c)}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]!=undefined&&a.isFunction(e[b])){return e[b].apply(e,c)}}e=e.base}if(e[f]!=undefined&&a.isFunction(e[f])){return e[f].apply(e,c)}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]!=undefined&&a.isFunction(e[b])){return e[b].apply(e,c)}}return};a.jqx.hasProperty=function(c,b){if(typeof(b)=="object"){for(var e in b){var d=c;while(d){if(d.hasOwnProperty(e)){return true}if(d.hasOwnProperty(e.toLowerCase())){return true}d=d.base}return false}}else{while(c){if(c.hasOwnProperty(b)){return true}if(c.hasOwnProperty(b.toLowerCase())){return true}c=c.base}}return false};a.jqx.hasFunction=function(e,d){if(d.length==0){return false}if(e==undefined){return false}var f=typeof(d)==Array||d.length>0?d[0]:d;var c=typeof(d)==Array||d.length>1?Array.prototype.slice.call(d,1):{};while(e[f]==undefined&&e.base!=null){if(e[f]&&a.isFunction(e[f])){return true}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]&&a.isFunction(e[b])){return true}}e=e.base}if(e[f]&&a.isFunction(e[f])){return true}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]&&a.isFunction(e[b])){return true}}return false};a.jqx.isPropertySetter=function(c,b){if(b.length==1&&typeof(b[0])=="object"){return true}if(b.length==2&&typeof(b[0])=="string"&&!a.jqx.hasFunction(c,b)){return true}return false};a.jqx.validatePropertySetter=function(f,d,b){if(!a.jqx.propertySetterValidation){return true}if(d.length==1&&typeof(d[0])=="object"){for(var e in d[0]){var g=f;while(!g.hasOwnProperty(e)&&g.base){g=g.base}if(!g||!g.hasOwnProperty(e)){if(!b){var c=g.hasOwnProperty(e.toString().toLowerCase());if(!c){throw"Invalid property: "+e}else{return true}}return false}}return true}if(d.length!=2){if(!b){throw"Invalid property: "+d.length>=0?d[0]:""}return false}while(!f.hasOwnProperty(d[0])&&f.base){f=f.base}if(!f||!f.hasOwnProperty(d[0])){if(!b){throw"Invalid property: "+d[0]}return false}return true};a.jqx.set=function(c,b){if(b.length==1&&typeof(b[0])=="object"){a.each(b[0],function(d,e){var f=c;while(!f.hasOwnProperty(d)&&f.base!=null){f=f.base}if(f.hasOwnProperty(d)){a.jqx.setvalueraiseevent(f,d,e)}else{if(f.hasOwnProperty(d.toLowerCase())){a.jqx.setvalueraiseevent(f,d.toLowerCase(),e)}else{if(a.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+d+"'"}}}})}else{if(b.length==2){while(!c.hasOwnProperty(b[0])&&c.base){c=c.base}if(c.hasOwnProperty(b[0])){a.jqx.setvalueraiseevent(c,b[0],b[1])}else{if(c.hasOwnProperty(b[0].toLowerCase())){a.jqx.setvalueraiseevent(c,b[0].toLowerCase(),b[1])}else{if(a.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+b[0]+"'"}}}}}};a.jqx.setvalueraiseevent=function(c,d,e){var b=c[d];c[d]=e;if(!c.isInitialized){return}if(c.propertyChangedHandler!=undefined){c.propertyChangedHandler(c,d,b,e)}if(c.propertyChangeMap!=undefined&&c.propertyChangeMap[d]!=undefined){c.propertyChangeMap[d](c,d,b,e)}};a.jqx.get=function(e,d){if(d==undefined||d==null){return undefined}if(e.propertyMap){var c=e.propertyMap(d);if(c!=null){return c}}if(e.hasOwnProperty(d)){return e[d]}if(e.hasOwnProperty(d.toLowerCase())){return e[d.toLowerCase()]}var b=undefined;if(typeof(d)==Array){if(d.length!=1){return undefined}b=d[0]}else{if(typeof(d)=="string"){b=d}}while(!e.hasOwnProperty(b)&&e.base){e=e.base}if(e){return e[b]}return undefined};a.jqx.serialize=function(e){var b="";if(a.isArray(e)){b="[";for(var d=0;d<e.length;d++){if(d>0){b+=", "}b+=a.jqx.serialize(e[d])}b+="]"}else{if(typeof(e)=="object"){b="{";var c=0;for(var d in e){if(c++>0){b+=", "}b+=d+": "+a.jqx.serialize(e[d])}b+="}"}else{b=e.toString()}}return b};a.jqx.propertySetterValidation=true;a.jqx.jqxWidgetProxy=function(g,c,b){var d=a(c);var f=a.data(c,g);if(f==undefined){return undefined}var e=f.instance;if(a.jqx.hasFunction(e,b)){return a.jqx.invoke(e,b)}if(a.jqx.isPropertySetter(e,b)){if(a.jqx.validatePropertySetter(e,b)){a.jqx.set(e,b);return undefined}}else{if(typeof(b)=="object"&&b.length==0){return}else{if(typeof(b)=="object"&&b.length==1&&a.jqx.hasProperty(e,b[0])){return a.jqx.get(e,b[0])}else{if(typeof(b)=="string"&&a.jqx.hasProperty(e,b[0])){return a.jqx.get(e,b)}}}}throw"jqxCore: Invalid parameter '"+a.jqx.serialize(b)+"' does not exist.";return undefined};a.jqx.applyWidget=function(c,d,k,l){var g=false;try{g=window.MSApp!=undefined}catch(f){}var m=a(c);if(!l){l=new a.jqx["_"+d]()}else{l.host=m;l.element=c}if(c.id==""){c.id=a.jqx.utilities.createId()}var j={host:m,element:c,instance:l};l.widgetName=d;a.data(c,d,j);a.data(c,"jqxWidget",j.instance);var h=new Array();var l=j.instance;while(l){l.isInitialized=false;h.push(l);l=l.base}h.reverse();h[0].theme=a.jqx.theme||"";a.jqx.jqxWidgetProxy(d,c,k);for(var b in h){l=h[b];if(b==0){l.host=m;l.element=c;l.WinJS=g}if(l!=undefined){if(l.createInstance!=null){if(g){MSApp.execUnsafeLocalFunction(function(){l.createInstance(k)})}else{l.createInstance(k)}}}}for(var b in h){if(h[b]!=undefined){h[b].isInitialized=true}}if(g){MSApp.execUnsafeLocalFunction(function(){j.instance.refresh(true)})}else{j.instance.refresh(true)}};a.jqx.jqxWidget=function(b,d,j){var c=false;try{jqxArgs=Array.prototype.slice.call(j,0)}catch(h){jqxArgs=""}try{c=window.MSApp!=undefined}catch(h){}var g=b;var f="";if(d){f="_"+d}a.jqx.define(a.jqx,"_"+g,f);a.fn[g]=function(){var e=Array.prototype.slice.call(arguments,0);if(e.length==0||(e.length==1&&typeof(e[0])=="object")){if(this.length==0){if(this.selector){throw new Error("Invalid jQuery Selectble id="example" class="display" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>

				<tfoot>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</tfoot>

				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
					<tr>
						<td>Rhona Davidson</td>
						<td>Integration Specialist</td>
						<td>Tokyo</td>
						<td>55</td>
						<td>2010/10/14</td>
						<td>$327,900</td>
					</tr>
					<tr>
						<td>Colleen Hurst</td>
						<td>Javascript Developer</td>
						<td>San Francisco</td>
						<td>39</td>
						<td>2009/09/15</td>
						<td>$205,500</td>
					</tr>
					<tr>
						<td>Sonya Frost</td>
						<td>Software Engineer</td>
						<td>Edinburgh</td>
						<td>23</td>
						<td>2008/12/13</td>
						<td>$103,600</td>
					</tr>
					<tr>
						<td>Jena Gaines</td>
						<td>Office Manager</td>
						<td>London</td>
						<td>30</td>
						<td>2008/12/19</td>
						<td>$90,560</td>
					</tr>
					<tr>
						<td>Quinn Flynn</td>
						<td>Support Lead</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2013/03/03</td>
						<td>$342,000</td>
					</tr>
					<tr>
						<td>Charde Marshall</td>
						<td>Regional Director</td>
						<td>San Francisco</td>
						<td>36</td>
						<td>2008/10/16</td>
						<td>$470,600</td>
					</tr>
					<tr>
						<td>Haley Kennedy</td>
						<td>Senior Marketing Designer</td>
						<td>London</td>
						<td>43</td>
						<td>2012/12/18</td>
						<td>$313,500</td>
					</tr>
					<tr>
						<td>Tatyana Fitzpatrick</td>
						<td>Regional Director</td>
						<td>London</td>
						<td>19</td>
						<td>2010/03/17</td>
						<td>$385,750</td>
					</tr>
					<tr>
						<td>Michael Silva</td>
						<td>Marketing Designer</td>
						<td>London</td>
						<td>66</td>
						<td>2012/11/27</td>
						<td>$198,500</td>
					</tr>
					<tr>
						<td>Paul Byrd</td>
						<td>Chief Financial Officer (CFO)</td>
						<td>New York</td>
						<td>64</td>
						<td>2010/06/09</td>
						<td>$725,000</td>
					</tr>
					<tr>
						<td>Gloria Little</td>
						<td>Systems Administrator</td>
						<td>New York</td>
						<td>59</td>
						<td>2009/04/10</td>
						<td>$237,500</td>
					</tr>
					<tr>
						<td>Bradley Greer</td>
						<td>Software Engineer</td>
						<td>London</td>
						<td>41</td>
						<td>2012/10/13</td>
						<td>$132,000</td>
					</tr>
					<tr>
						<td>Dai Rios</td>
						<td>Personnel Lead</td>
						<td>Edinburgh</td>
						<td>35</td>
						<td>2012/09/26</td>
						<td>$217,500</td>
					</tr>
					<tr>
						<td>Jenette Caldwell</td>
						<td>Development Lead</td>
						<td>New York</td>
						<td>30</td>
						<td>2011/09/03</td>
						<td>$345,000</td>
					</tr>
					<tr>
						<td>Yuri Berry</td>
						<td>Chief Marketing Officer (CMO)</td>
						<td>New York</td>
						<td>40</td>
						<td>2009/06/25</td>
						<td>$675,000</td>
					</tr>
					<tr>
						<td>Caesar Vance</td>
						<td>Pre-Sales Support</td>
						<td>New York</td>
						<td>21</td>
						<td>2011/12/12</td>
						<td>$106,450</td>
					</tr>
					<tr>
						<td>Doris Wilder</td>
						<td>Sales Assistant</td>
						<td>Sidney</td>
						<td>23</td>
						<td>2010/09/20</td>
						<td>$85,600</td>
					</tr>
					<tr>
						<td>Angelica Ramos</td>
						<td>Chief Executive Officer (CEO)</td>
						<td>London</td>
						<td>47</td>
						<td>2009/10/09</td>
						<td>$1,200,000</td>
					</tr>
					<tr>
						<td>Gavin Joyce</td>
						<td>Developer</td>
						<td>Edinburgh</td>
						<td>42</td>
						<td>2010/12/22</td>
						<td>$92,575</td>
					</tr>
					<tr>
						<td>Jennifer Chang</td>
						<td>Regional Director</td>
						<td>Singapore</td>
						<td>28</td>
						<td>2010/11/14</td>
						<td>$357,650</td>
					</tr>
					<tr>
						<td>Brenden Wagner</td>
						<td>Software Engineer</td>
						<td>San Francisco</td>
						<td>28</td>
						<td>2011/06/07</td>
						<td>$206,850</td>
					</tr>
					<tr>
						<td>Fiona Green</td>
						<td>Chief Operating Officer (COO)</td>
						<td>San Francisco</td>
						<td>48</td>
						<td>2010/03/11</td>
						<td>$850,000</td>
					</tr>
					<tr>
						<td>Shou Itou</td>
						<td>Regional Marketing</td>
						<td>Tokyo</td>
						<td>20</td>
						<td>2011/08/14</td>
						<td>$163,000</td>
					</tr>
					<tr>
						<td>Michelle House</td>
						<td>Integration Specialist</td>
						<td>Sidney</td>
						<td>37</td>
						<td>2011/06/02</td>
						<td>$95,400</td>
					</tr>
					<tr>
						<td>Suki Burks</td>
						<td>Developer</td>
						<td>London</td>
						<td>53</td>
						<td>2009/10/22</td>
						<td>$114,500</td>
					</tr>
					<tr>
						<td>Prescott Bartlett</td>
						<td>Technical Author</td>
						<td>London</td>
						<td>27</td>
						<td>2011/05/07</td>
						<td>$145,000</td>
					</tr>
					<tr>
						<td>Gavin Cortez</td>
						<td>Team Leader</td>
						<td>San Francisco</td>
						<td>22</td>
						<td>2008/10/26</td>
						<td>$235,500</td>
					</tr>
					<tr>
						<td>Martena Mccray</td>
						<td>Post-Sales support</td>
						<td>Edinburgh</td>
						<td>46</td>
						<td>2011/03/09</td>
						<td>$324,050</td>
					</tr>
					<tr>
						<td>Unity Butler</td>
						<td>Marketing Designer</td>
						<td>San Francisco</td>
						<td>47</td>
						<td>2009/12/09</td>
						<td>$85,675</td>
					</tr>
					<tr>
						<td>Howard Hatfield</td>
						<td>Office Manager</td>
						<td>San Francisco</td>
						<td>51</td>
						<td>2008/12/16</td>
						<td>$164,500</td>
					</tr>
					<tr>
						<td>Hope Fuentes</td>
						<td>Secretary</td>
						<td>San Francisco</td>
						<td>41</td>
						<td>2010/02/12</td>
						<td>$109,850</td>
					</tr>
					<tr>
						<td>Vivian Harrell</td>
						<td>Financial Controller</td>
						<td>San Francisco</td>
						<td>62</td>
						<td>2009/02/14</td>
						<td>$452,500</td>
					</tr>
					<tr>
						<td>Timothy Mooney</td>
						<td>Office Manager</td>
						<td>London</td>
						<td>37</td>
						<td>2008/12/11</td>
						<td>$136,200</td>
					</tr>
					<tr>
						<td>Jackson Bradshaw</td>
						<td>Director</td>
						<td>New York</td>
						<td>65</td>
						<td>2008/09/26</td>
						<td>$645,750</td>
					</tr>
					<tr>
						<td>Olivia Liang</td>
						<td>Support Engineer</td>
						<td>Singapore</td>
						<td>64</td>
						<td>2011/02/03</td>
						<td>$234,500</td>
					</tr>
					<tr>
						<td>Bruno Nash</td>
						<td>Software Engineer</td>
						<td>London</td>
						<td>38</td>
						<td>2011/05/03</td>
						<td>$163,500</td>
					</tr>
					<tr>
						<td>Sakura Yamamoto</td>
						<td>Support Engineer</td>
						<td>Tokyo</td>
						<td>37</td>
						<td>2009/08/19</td>
						<td>$139,575</td>
					</tr>
					<tr>
						<td>Thor Walton</td>
						<td>Developer</td>
						<td>New York</td>
						<td>61</td>
						<td>2013/08/11</td>
						<td>$98,540</td>
					</tr>
					<tr>
						<td>Finn Camacho</td>
						<td>Support Engineer</td>
						<td>San Francisco</td>
						<td>47</td>
						<td>2009/07/07</td>
						<td>$87,500</td>
					</tr>
					<tr>
						<td>Serge Baldwin</td>
						<td>Data Coordinator</td>
						<td>Singapore</td>
						<td>64</td>
						<td>2012/04/09</td>
						<td>$138,575</td>
					</tr>
					<tr>
						<td>Zenaida Frank</td>
						<td>Software Engineer</td>
						<td>New York</td>
						<td>63</td>
						<td>2010/01/04</td>
						<td>$125,250</td>
					</tr>
					<tr>
						<td>Zorita Serrano</td>
						<td>Software Engineer</td>
						<td>San Francisco</td>
						<td>56</td>
						<td>2012/06/01</td>
						<td>$115,000</td>
					</tr>
					<tr>
						<td>Jennifer Acosta</td>
						<td>Junior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>43</td>
						<td>2013/02/01</td>
						<td>$75,650</td>
					</tr>
					<tr>
						<td>Cara Stevens</td>
						<td>Sales Assistant</td>
						<td>New York</td>
						<td>46</td>
						<td>2011/12/06</td>
						<td>$145,600</td>
					</tr>
					<tr>
						<td>Hermione Butler</td>
						<td>Regional Director</td>
						<td>London</td>
						<td>47</td>
						<td>2011/03/21</td>
						<td>$356,250</td>
					</tr>
					<tr>
						<td>Lael Greer</td>
						<td>Systems Administrator</td>
						<td>London</td>
						<td>21</td>
						<td>2009/02/27</td>
						<td>$103,500</td>
					</tr>
					<tr>
						<td>Jonas Alexander</td>
						<td>Developer</td>
						<td>San Francisco</td>
						<td>30</td>
						<td>2010/07/14</td>
						<td>$86,500</td>
					</tr>
					<tr>
						<td>Shad Decker</td>
						<td>Regional Director</td>
						<td>Edinburgh</td>
						<td>51</td>
						<td>2008/11/13</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Michael Bruce</td>
						<td>Javascript Developer</td>
						<td>Singapore</td>
						<td>29</td>
						<td>2011/06/27</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
				</tbody>
			</table>

			<ul class="tabs">
				<li class="active">Javascript</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Ajax</li>
				<li>Server-side script</li>
			</ul>

			<div class="tabs">
				<div class="js">
					<p>The Javascript shown below is used to initialise the table shown in this
					example:</p><code class="multiline brush: js;">function filterGlobal () {
	$('#example').DataTable().search( 
		$('#global_filter').val(),
		$('#global_regex').prop('checked'), 
		$('#global_smart').prop('checked')
	).draw();
}

function filterColumn ( i ) {
	$('#example').DataTable().column( i ).search( 
		$('#col'+i+'_filter').val(),
		$('#col'+i+'_regex').prop('checked'), 
		$('#col'+i+'_smart').prop('checked')
	).draw();
}

$(document).ready(function() {
	$('#example').dataTable();

	$('input.global_filter').on( 'keyup click', function () {
		filterGlobal();
	} );

	$('input.column_filter').on( 'keyup click', function () {
		filterColumn( $(this).parents('tr').attr('data-column') );
	} );
} );</code>

					<p>In addition to the above code, the following Javascript library files are loaded for use in this
					example:</p>

					<ul>
						<li><a href="../../media/js/jquery.js">../../media/js/jquery.js</a></li>
						<li><a href="../../media/js/jquery.dataTables.js">../../media/js/jquery.dataTables.js</a></li>
					</ul>
				</div>

				<div class="table">
					<p>The HTML shown below is the raw HTML table element, before it has been enhanced by
					DataTables:</p>
				</div>

				<div class="css">
					<div>
						<p>This example uses a little bit of additional CSS beyond what is loaded from the library
						files (below), in order to correctly display the table. The additional CSS used is shown
						below:</p><code class="multiline brush: js;"></code>
					</div>

					<p>The following CSS library files are loaded for use in this example to provide the styling of the
					table:</p>

					<ul>
						<li><a href=
						"../../media/css/jquery.dataTables.css">../../media/css/jquery.dataTables.css</a></li>
					</ul>
				</div>

				<div class="ajax">
					<p>This table loads data by Ajax. The latest data that has been loaded is shown below. This data
					will update automatically as any additional data is loaded.</p>
				</div>

				<div class="php">
					<p>The script used to perform the server-side processing for this table is shown below. Please note
					that this is just an example script using PHP. Server-side processing scripts can be written in any
					language, using <a href="//datatables.net/manual/server-side">the protocol described in the
					DataTables documentation</a>.</p>
				</div>
			</div>
		</section>
	</div>

	<section>
		<div class="footer">
			<div class="gradient"></div>

			<div class="liner">
				<h2>Other examples</h2>

				<div class="toc">
					<div class="toc-group">
						<h3><a href="../basic_init/index.html">Basic initialisation</a></h3>
						<ul class="toc">
							<li><a href="../basic_init/zero_configuration.html">Zero configuration</a></li>
							<li><a href="../basic_init/filter_only.html">Feature enable / disable</a></li>
							<li><a href="../basic_init/table_sorting.html">Default ordering (sorting)</a></li>
							<li><a href="../basic_init/multi_col_sort.html">Multi-column ordering</a></li>
							<li><a href="../basic_init/multiple_tables.html">Multiple tables</a></li>
							<li><a href="../basic_init/hidden_columns.html">Hidden columns</a></li>
							<li><a href="../basic_init/complex_header.html">Complex headers (rowspan and
							colspan)</a></li>
							<li><a href="../basic_init/dom.html">DOM positioning</a></li>
							<li><a href="../basic_init/flexible_width.html">Flexible table width</a></li>
							<li><a href="../basic_init/state_save.html">State saving</a></li>
							<li><a href="../basic_init/alt_pagination.html">Alternative pagination</a></li>
							<li><a href="../basic_init/scroll_y.html">Scroll - vertical</a></li>
							<li><a href="../basic_init/scroll_x.html">Scroll - horizontal</a></li>
							<li><a href="../basic_init/scroll_xy.html">Scroll - horizontal and vertical</a></li>
							<li><a href="../basic_init/scroll_y_theme.html">Scroll - vertical with jQuery UI
							ThemeRoller</a></li>
							<li><a href="../basic_init/comma-decimal.html">Language - Comma decimal place</a></li>
							<li><a href="../basic_init/language.html">Language options</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../advanced_init/index.html">Advanced initialisation</a></h3>
						<ul class="toc">
							<li><a href="../advanced_init/events_live.html">DOM / jQuery events</a></li>
							<li><a href="../advanced_init/dt_events.html">DataTables events</a></li>
							<li><a href="../advanced_init/column_render.html">Column rendering</a></li>
							<li><a href="../advanced_init/length_menu.html">Page length options</a></li>
							<li><a href="../advanced_init/dom_multiple_elements.html">Multiple table control
							elements</a></li>
							<li><a href="../advanced_init/complex_header.html">Complex headers (rowspan /
							colspan)</a></li>
							<li><a href="../advanced_init/html5-data-attributes.html">HTML5 data-* attributes</a></li>
							<li><a href="../advanced_init/language_file.html">Language file</a></li>
							<li><a href="../advanced_init/defaults.html">Setting defaults</a></li>
							<li><a href="../advanced_init/row_callback.html">Row created callback</a></li>
							<li><a href="../advanced_init/row_grouping.html">Row grouping</a></li>
							<li><a href="../advanced_init/footer_callback.html">Footer callback</a></li>
							<li><a href="../advanced_init/dom_toolbar.html">Custom toolbar elements</a></li>
							<li><a href="../advanced_init/sort_direction_control.html">Order direction sequence
							control</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../styling/index.html">Styling</a></h3>
						<ul class="toc">
							<li><a href="../styling/display.html">Base style</a></li>
							<li><a href="../styling/no-classes.html">Base style - no styling classes</a></li>
							<li><a href="../styling/row-border.html">Base style - row borders</a></li>
							<li><a href="../styling/cell-border.html">Base style - cell borders</a></li>
							<li><a href="../styling/hover.html">Base style - hover</a></li>
							<li><a href="../styling/order-column.html">Base style - order-column</a></li>
							<li><a href="../styling/stripe.html">Base style - stripe</a></li>
							<li><a href="../styling/jqueryUI.html">jQuery UI ThemeRoller</a></li>
							<li><a href="../styling/bootstrap.html">Bootstrap</a></li>
							<li><a href="../styling/foundation.html">Foundation</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../data_sources/index.html">Data sources</a></h3>
						<ul class="toc">
							<li><a href="../data_sources/dom.html">HTML (DOM) sourced data</a></li>
							<li><a href="../data_sources/ajax.html">Ajax sourced data</a></li>
							<li><a href="../data_sources/js_array.html">Javascript sourced data</a></li>
							<li><a href="../data_sources/server_side.html">Server-side processing</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="./index.html">API</a></h3>
						<ul class="toc active">
							<li><a href="./add_row.html">Add rows</a></li>
							<li><a href="./multi_filter.html">Individual column filtering (text inputs)</a></li>
							<li><a href="./multi_filter_select.html">Individual column filtering (select
							inputs)</a></li>
							<li><a href="./highlight.html">Highlighting rows and columns</a></li>
							<li><a href="./row_details.html">Child rows (show extra / detailed information)</a></li>
							<li><a href="./select_row.html">Row selection (multiple rows)</a></li>
							<li><a href="./select_single_row.html">Row selection and deletion (single row)</a></li>
							<li><a href="./form.html">Form inputs</a></li>
							<li><a href="./counter_columns.html">Index column</a></li>
							<li><a href="./show_hide.html">Show / hide columns dynamically</a></li>
							<li><a href="./api_in_init.html">Using API in callbacks</a></li>
							<li><a href="./tabs_and_scrolling.html">Scrolling and jQuery UI tabs</a></li>
							<li class="active"><a href="./regex.html">Filtering API (regular expressions)</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../ajax/index.html">Ajax</a></h3>
						<ul class="toc">
							<li><a href="../ajax/simple.html">Ajax data source (arrays)</a></li>
							<li><a href="../ajax/objects.html">Ajax data source (objects)</a></li>
							<li><a href="../ajax/deep.html">Nested object data (objects)</a></li>
							<li><a href="../ajax/objects_subarrays.html">Nested object data (arrays)</a></li>
							<li><a href="../ajax/orthogonal-data.html">Orthogonal data</a></li>
							<li><a href="../ajax/null_data_source.html">Generated content for a column</a></li>
							<li><a href="../ajax/custom_data_property.html">Custom data source property</a></li>
							<li><a href="../ajax/custom_data_flat.html">Flat array data source</a></li>
							<li><a href="../ajax/defer_render.html">Deferred rendering for speed</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../server_side/index.html">Server-side</a></h3>
						<ul class="toc">
							<li><a href="../server_side/simple.html">Server-side processing</a></li>
							<li><a href="../server_side/custom_vars.html">Custom HTTP variables</a></li>
							<li><a href="../server_side/post.html">POST data</a></li>
							<li><a href="../server_side/ids.html">Automatic addition of row ID attributes</a></li>
							<li><a href="../server_side/object_data.html">Object data source</a></li>
							<li><a href="../server_side/row_details.html">Row details</a></li>
							<li><a href="../server_side/select_rows.html">Row selection</a></li>
							<li><a href="../server_side/jsonp.html">JSONP data source for remote domains</a></li>
							<li><a href="../server_side/defer_loading.html">Deferred loading of data</a></li>
							<li><a href="../server_side/pipeline.html">Pipelining data to reduce Ajax calls for
							paging</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="../plug-ins/index.html">Plug-ins</a></h3>
						<ul class="toc">
							<li><a href="../plug-ins/api.html">API plug-in methods</a></li>
							<li><a href="../plug-ins/sorting_auto.html">Ordering plug-ins (with type
							detection)</a></li>
							<li><a href="../plug-ins/sorting_manual.html">Ordering plug-ins (no type
							detection)</a></li>
							<li><a href="../plug-ins/range_filtering.html">Custom filtering - range search</a></li>
							<li><a href="../plug-ins/dom_sort.html">Live DOM ordering</a></li>
						</ul>
					</div>
				</div>

				<div class="epilogue">
					<p>Please refer to the <a href="http://www.datatables.net">DataTables documentation</a> for full
					information about its API properties and methods.<br>
					Additionally, there are a wide range of <a href="http://www.datatables.net/extras">extras</a> and
					<a href="http://www.datatables.net/plug-ins">plug-ins</a> which extend the capabilities of
					DataTables.</p>

					<p class="copyright">DataTables designed and created by <a href=
					"http://www.sprymedia.co.uk">SpryMedia Ltd</a> &#169; 2007-2014<br>
					DataTables is licensed under the <a href="http://www.datatables.net/mit">MIT license</a>.</p>
				</div>
			</div>
		</div>
	</section>
</body>
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/ico" href="http://www.datatables.net/favicon.ico">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">

	<title>DataTables example - Child rows (show extra / detailed information)</title>
	<link rel="stylesheet" type="text/css" href="../../media/css/jquery.dataTables.css">
	<link rel="stylesheet" type="text/css" href="../resources/syntax/shCore.css">
	<link rel="stylesheet" type="text/css" href="../resources/demo.css">
	<style type="text/css" class="init">

td.details-control {
	background: url('../resources/details_open.png') no-repeat center center;
	cursor: pointer;
}
tr.shown td.details-control {
	background: url('../resources/details_close.png') no-repeat center center;
}

	</style>
	<script type="text/javascript" language="javascript" src="../../media/js/jquery.js"></script>
	<script type="text/javascript" language="javascript" src="../../media/js/jquery.dataTables.js"></script>
	<script type="text/javascript" language="javascript" src="../resources/syntax/shCore.js"></script>
	<script type="text/javascript" language="javascript" src="../resources/demo.js"></script>
	<script type="text/javascript" language="javascript" class="init">


/* Formatting function for row details - modify as you need */
function format ( d ) {
	// `d` is the original data object for the row
	return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
		'<tr>'+
			'<td>Full name:</td>'+
			'<td>'+d.name+'</td>'+
		'</tr>'+
		'<tr>'+
			'<td>Extension number:</td>'+
			'<td>'+d.extn+'</td>'+
		'</tr>'+
		'<tr>'+
			'<td>Extra info:</td>'+
			'<td>And any further details here (images etc)...</td>'+
		'</tr>'+
	'</table>';
}

$(document).ready(function() {
	var table = $('#example').DataTable( {
		"ajax": "../ajax/data/objects.txt",
		"columns": [
			{
				"class":          'details-control',
				"orderable":      false,
				"data":           null,
				"defaultContent": ''
			},
			{ "data": "name" },
			{ "data": "position" },
			{ "data": "office" },
			{ "data": "salary" }
		],
		"order": [[1, 'asc']]
	} );
	
	// Add event listener for opening and closing details
	$('#example tbody').on('click', 'td.details-control', function () {
		var tr = $(thi