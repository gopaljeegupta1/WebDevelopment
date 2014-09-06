<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		
		<title>DataTables jQuery UI example</title>

		<link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
		<link rel="stylesheet" type="text/css" href="dataTables.jqueryui.css">

		<script type="text/javascript" language="javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
		<!--<script type="text/javascript" language="javascript" src="//cdn.datatables.net/1.10-dev/js/jquery.dataTables.js"></script>-->
		<script type="text/javascript" language="javascript" src="/dataTables/DataTablesSrc/built/js/jquery.dataTables.js"></script>
		<script type="text/javascript" language="javascript" src="dataTables.jqueryui.js"></script>
		<script type="text/javascript" charset="utf-8">
			$(document).ready(function() {
				$('#example').dataTable();
			} );
		</script>
	</head>
	<body>
		<div class="container">
			
<table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
	<thead>
		<tr>
			<th>Rendering engine</th>
			<th>Browser</th>
			<th>Platform(s)</th>
			<th>Engine version</th>
			<th>CSS grade</th>
		</tr>
	</thead>
	<tbody>
		<tr class="odd gradeX">
			<td>Trident</td>
			<td>Internet
				 Explorer 4.0</td>
			<td>Win 95+</td>
			<td class="center"> 4</td>
			<td class="center">X</td>
		</tr>
		<tr class="even gradeC">
			<td>Trident</td>
			<td>Internet
				 Explorer 5.0</td>
			<td>Win 95+</td>
			<td class="center">5</td>
			<td class="center">C</td>
		</tr>
		<tr class="odd gradeA">
			<td>Trident</td>
			<td>Internet
				 Explorer 5.5</td>
			<td>Win 95+</td>
			<td class="center">5.5</td>
			<td class="center">A</td>
		</tr>
		<tr class="even gradeA">
			<td>Trident</td>
			<td>Internet
				 Explorer 6</td>
			<td>Win 98+</td>
			<td class="center">6</td>
			<td class="center">A</td>
		</tr>
		<tr class="odd gradeA">
			<td>Trident</td>
			<td>Internet Explorer 7</td>
			<td>Win XP SP2+</td>
			<td class="center">7</td>
			<td class="center">A</td>
		</tr>
		<tr class="even gradeA">
			<td>Trident</td>
			<td>AOL browser (AOL desktop)</td>
			<td>Win XP</td>
			<td class="center">6</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Firefox 1.0</td>
			<td>Win 98+ / OSX.2+</td>
			<td class="center">1.7</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Firefox 1.5</td>
			<td>Win 98+ / OSX.2+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Firefox 2.0</td>
			<td>Win 98+ / OSX.2+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Firefox 3.0</td>
			<td>Win 2k+ / OSX.3+</td>
			<td class="center">1.9</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Camino 1.0</td>
			<td>OSX.2+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Camino 1.5</td>
			<td>OSX.3+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Netscape 7.2</td>
			<td>Win 95+ / Mac OS 8.6-9.2</td>
			<td class="center">1.7</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Netscape Browser 8</td>
			<td>Win 98SE+</td>
			<td class="center">1.7</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Netscape Navigator 9</td>
			<td>Win 98+ / OSX.2+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.0</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.1</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.1</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.2</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.2</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.3</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.3</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.4</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.4</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.5</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.5</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.6</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">1.6</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.7</td>
			<td>Win 98+ / OSX.1+</td>
			<td class="center">1.7</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Mozilla 1.8</td>
			<td>Win 98+ / OSX.1+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Seamonkey 1.1</td>
			<td>Win 98+ / OSX.2+</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Gecko</td>
			<td>Epiphany 2.20</td>
			<td>Gnome</td>
			<td class="center">1.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>Safari 1.2</td>
			<td>OSX.3</td>
			<td class="center">125.5</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>Safari 1.3</td>
			<td>OSX.3</td>
			<td class="center">312.8</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>Safari 2.0</td>
			<td>OSX.4+</td>
			<td class="center">419.3</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>Safari 3.0</td>
			<td>OSX.4+</td>
			<td class="center">522.1</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>OmniWeb 5.5</td>
			<td>OSX.4+</td>
			<td class="center">420</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>iPod Touch / iPhone</td>
			<td>iPod</td>
			<td class="center">420.1</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Webkit</td>
			<td>S60</td>
			<td>S60</td>
			<td class="center">413</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 7.0</td>
			<td>Win 95+ / OSX.1+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 7.5</td>
			<td>Win 95+ / OSX.2+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 8.0</td>
			<td>Win 95+ / OSX.2+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 8.5</td>
			<td>Win 95+ / OSX.2+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 9.0</td>
			<td>Win 95+ / OSX.3+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 9.2</td>
			<td>Win 88+ / OSX.3+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera 9.5</td>
			<td>Win 88+ / OSX.3+</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Opera for Wii</td>
			<td>Wii</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Nokia N800</td>
			<td>N800</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>Presto</td>
			<td>Nintendo DS browser</td>
			<td>Nintendo DS</td>
			<td class="center">8.5</td>
			<td class="center">C/A<sup>1</sup></td>
		</tr>
		<tr class="gradeC">
			<td>KHTML</td>
			<td>Konqureror 3.1</td>
			<td>KDE 3.1</td>
			<td class="center">3.1</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeA">
			<td>KHTML</td>
			<td>Konqureror 3.3</td>
			<td>KDE 3.3</td>
			<td class="center">3.3</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeA">
			<td>KHTML</td>
			<td>Konqureror 3.5</td>
			<td>KDE 3.5</td>
			<td class="center">3.5</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeX">
			<td>Tasman</td>
			<td>Internet Explorer 4.5</td>
			<td>Mac OS 8-9</td>
			<td class="center">-</td>
			<td class="center">X</td>
		</tr>
		<tr class="gradeC">
			<td>Tasman</td>
			<td>Internet Explorer 5.1</td>
			<td>Mac OS 7.6-9</td>
			<td class="center">1</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeC">
			<td>Tasman</td>
			<td>Internet Explorer 5.2</td>
			<td>Mac OS 8-X</td>
			<td class="center">1</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeA">
			<td>Misc</td>
			<td>NetFront 3.1</td>
			<td>Embedded devices</td>
			<td class="center">-</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeA">
			<td>Misc</td>
			<td>NetFront 3.4</td>
			<td>Embedded devices</td>
			<td class="center">-</td>
			<td class="center">A</td>
		</tr>
		<tr class="gradeX">
			<td>Misc</td>
			<td>Dillo 0.8</td>
			<td>Embedded devices</td>
			<td class="center">-</td>
			<td class="center">X</td>
		</tr>
		<tr class="gradeX">
			<td>Misc</td>
			<td>Links</td>
			<td>Text only</td>
			<td class="center">-</td>
			<td class="center">X</td>
		</tr>
		<tr class="gradeX">
			<td>Misc</td>
			<td>Lynx</td>
			<td>Text only</td>
			<td class="center">-</td>
			<td class="center">X</td>
		</tr>
		<tr class="gradeC">
			<td>Misc</td>
			<td>IE Mobile</td>
			<td>Windows Mobile 6</td>
			<td class="center">-</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeC">
			<td>Misc</td>
			<td>PSP browser</td>
			<td>PSP</td>
			<td class="center">-</td>
			<td class="center">C</td>
		</tr>
		<tr class="gradeU">
			<td>Other browsers</td>
			<td>All others</td>
			<td>-</td>
			<td class="center">-</td>
			<td class="center">U</td>
		</tr>
	</tbody>
</table>
			
		</div>
	</body>
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                hV����e���}�0�y��CޣT�X�������j��Z���*D�� ��:q1Gz� V��Ȥv�������TW�i.��,���CI��w��t4�J6I�M�?��\�n	fP��T<(�Xh�̑8V}�S��?�a�\�K�UK�=dQXko
�k�8D����m	%y�h}H�.���dt젤�]�����x��Q�T��8�y�����(���Bۦ�[Ųg���jy�����͔�G�+��,�����|�~�� �����X�`R&s~��hؼL��\@���ݼ����9_���bN@�i3˾d��&w��=�F&��,�ɍ�]j��?8|��$�wD�}���'Y��ɐjD�pAE'P@�V�Le�y�������v�1e�ؓ�����-؇���vM��|=rq��A�lN�7/��6�=I��nR園��c�����}7�k��	GASn���lǒuK		ę_�<e)�i�z�D�r� Q��N�C�O��~�x��UU���#K�RS�{���������������������M	9�����^��L�&�ˣS,fb�`OC�����t�gп`o?K���<}hz�}@�[.�%z\���$tE�n�Ͼ�tm��N�Y{!nd�z����ۯQ��H����p�K9�� 8^3�	Vw ����b�p��k���0�pQDi�N��T޾��S�N�XS�� �E�K-L�@ҧ������t�7KZP3hT�?|g��r�\�G�Է�oF���R�"g�bɌ��YF炘�(}j6!��/t���d�������p��m��I�+]��b������s��q���r]�*]�d������+z;&<a�� ��ӁDt� I�ͥ��D�]N���Y<V��+MŃ��/�1d���J��8��*����P�#�"~�6<�~����.&e"�<*��=#95�[�Fc�Rg��pif��(KlZ�t�����LLӣ$☘��ɥͩ�z�I퇰Jj�&��m!�$��ci<S����U���fue��Y\�'QA��28���'���8:E�p�% ������_�����߷��Ava�:y��=���E)͔,��z��X�����
��mKżRkm�;�W8���h�H$�C�Y+��/�E�HSI`ĸA0�+��@]��Ň �3<��w��{��1��-�v6���A�o<[��C�;��m~(��,N��+^"��L��|[ϟ?~m7g2p�f���]`�*�E˒�
�d���2�`�G�ͳ0UX�~�#�vM3��"
|���Z��r��X7U;O0`�	��8�;S�u��������)�S��Vk�&��}d�|��b- 5�Dc��=����tz&$A���>;$a��[,V�ڼ��>��{�Oe๒	�]N񜆱��s���m�L$(�p,g>�D�,��`ڼ�������_�,�O�8�xcJ��|	a4:(��]f�S?~D��lܥ�>pETN̚�!ڼS�P`}yOoHB�l��Ȱ���G]ǆf�������Y�]\剩����\��~��TK�hDkH=O pѶ��
�!4�n�q}g�����/�,4��N���>Q%|�%���_�d�\��uc�_/�6(����IG�l�죻����3p���d�T.��'tu3��ҷWX�Z�$06h~X/��U��U��đq��]�J:�� �,D�[0Ix2HI�c.�#8��9������v	�G�(G�/���9R���@��.,��(`�5��6�ځ;��O���'�0sJ�|#D�ޖ,.o��Ϲd��sL��ߗ�I��DeC�03`1l#�{0�?V38e�D"��dcE��ő��9�H�iL�ơz���k��H��gB���z͑�m�����H�N�dw&�8��D	�/PR@]1	��L �� QA��5� �QH|��;J'����b�2#Ԋ�t�p�,k��Kdr��6>�UK�K�p�qt���|ȿB=n.\�$�\�G*�ճh���j=��Ü���m�K�,̕H�4���a]���o9�)UL0P����3?�R)�z�`+z�d�@�D�Z��ڢl���9��cLOI��y����!!��eJ����f��ww���<�@�<y��P�֜�?�ɽ{f]z�����Z�A� �SȽ�Sx�#��-Cb{�Q�ȭC�z������������̳�S�IP7+:%�4�*j�ڥZջ�.U1�x#sW����������/����c�]E�TπMa��)'䚡lC�����t��!�/[�B���=�&Z�܀%Q��rU}�@�����ŧ?�$��������
�=���X����D�M>WH��ܥ�9?�q��a�vpck
}s�C�-�X�$IU�LCBC�U{{��S��I�\�j�{ۣ�����|�����HR2Ee�Z'��P3�>�r��B6�/�8��3��� ƒUo4�-�D��f�ؠyS,p�nN��Ů�Ϭ:�P���ĴaM��"e6��w0NkR�9��`[-Uě�U�6^{�y�s�hu��v���SR�ET�@Μ�y�K-�~��.ج�T�!ӱ��_�t cp�w���]��h�p���!$.�=5GK|�g���Ut��Њw�ԊA�6��Lu�m�"�w�>���Y��� pZzӲu�����jg��O ���o ��yב�يõ�]st�&�iTf��`��@�����lt��g����!�!�1qk��|������E�Cvi_�o?�6\���Y��T��$���в7>��Aa\M���0�6K#ڥ��G�	�����V��F�>՟�Lv)v׌_2�I�-y�V���1b����#�Bh�fQn����nl�G(�,Бi��������ZAW�: ��L�����ù	�),�7���/�� �^���L�j�J^�^~E�f�"H,V3j��^�^}�i�=X�/W��f����$��%��I�cx���o6]�$�."��$�B�N��Nڑ��AY������v�ug���ٚGn�T��jr��������F�0~T����_E/@R��i'wm�!�fy� �
z՘K�s7e�y8�=�l�a��v�/���?˸�����x�_+�B�_�D/U���?��2T�?��_���D����O��J�|��D̟C����Sbm���W��\��0�����r� 6���T���h8��Y�xؖ��~{�z��(�zs�������H-)��9W�<����Z�;&�;�V'�Xm$6�T�ޔQ��!�
�ug�{��t�y��Qi'd�7,���c��KH������������Wjr�Ͻ�cz6���=��<)�?dH���\D�pa>����:q�����"`6��>��#%�C��I?t��h]�7�D�J_GB�k��dVg�ߐ��ں��RJ�;E�\a^T�k�j���D����-sY����p��0{J��K*h
>Aρ@̈�O`z�a���®+�CLD��
2�p�E�b�S'���׾��U�]����:�SM^��mȯ�ZH�����J�e
����j+S�(,��*Թ����s4{�q��Zk�!�ym����&�eC��._4��!C���(d���4�V��SD��dL�\��%�Bt@Y�1�ᬩ�zt�"�q�o�n��w��ڞ�T�J&�J��AC��C�Z�@�O�t�(�+�s�x�j�}:l~��^/���l'cj��SX�­�S��oX�x�/��P���Z�ݭ��F��W���~��?�2�^��`��zP�y�s�d��~�C���
�5^���y�E΀�8�m����[[�d�y+��)��;:���4������Ղ٫M�	oJ��з�\�����������Q�Rҍ:�����[��D�b��;��1�h�k��62������d~	&�[��}�Ă������"Q���A:a���à�L���(�s��췰���=�5>��ɃF<�����A��`c�m��xS�v�OG*�m�@�9��v�:�<F�l����u�N�,qIP��H��j�2�n�|5Hi��y��7~�`7ӕ{Э蓗9�wNyU$�������,��X�I���.ޞn�Wt�]4ޗ�UÁѥz$��1_s�>��{��,z�F9.LZ��iE�D��9�>v�o�����
J"=E&D��r��	
���y:�ԥ7�%*�kC�?��p��4-6��0/uJ�Z���p�H�q��`��?R4x��6;�;[U�V;6h�YYs�F�rf{�/�?*>��_�+ԟ
��kx���_$����4����|y�283cq�@���:�K���:����5�<b�[��.��ܖi'PN ז5pE�%�o�H�3i+��"��=<�����֘�\��\%���S529�I�	�FG���MD)$vI"(��] �oq9�T����3��Ϲ\<(zV`��?d *N.�bP�2N��bvx�L���.C_v�5G�i�gt^��F_��w����l($E�"���R��<��R^i�M�WR<��dFi�e� �[�'F
��{ �Ŋ>Zم�xi��ł�=��1SJdO^�^�c�!H�k����/���݅~���}�a}޼XR�d�/��F�Na�,�\*��w��¥��H���2�׬Ǆiˊ��#ԍ��q��h��.�.�l�ELV�2�"����M'����eQ�  (�3@2�Y��d�u�q/{�t؞����%S��Z�]8h�0D&V*��LA i����jP��A(oذ1�&�]����Ί&�&7W�V}�� ��v�SG��fB^эt_��{��+󤺾��mA��-���}pY>#���f[Zqc#~���:�O�E+����h�|{nm}��}�ߵ"�}���
4��� �CUx�e�1����9S����#G[[�6��Wv8xk|<mw�<Ȣ d�s�1Ψ`i�~,�*o\R�h(fM�L���Z�"�ח/j%�(lVM��<Ik���r����U֜�Nw#7��|5ZFs{)�Ui�hI�W5T��S�*�}Oe�_�A#�S�i�)�J��hT��i7�W =M�g�6���&hA��_�$����ef���$'y�:i��;̀_Te�����D�z�Z������h�"7DV�c|�����!w�$�fX���.����ˣ�͐NU���\���e�%t��{TӓS�fz��T�h,��HA
�
%Mjb��
OtX�U��k�S$�ʿ��ڜ;��Ћ�%�������q~�Ȋ�T��
;q*�&k�8�/dJ��M^�������v�0�u,�A�ͯ�&Z��;�)Jgi�qK�����ݖ�;֭ ����D�2\��ұ ���6���9%!!QX#���d������sS��{�C�j25���ዹ�D.���R#ؠ��" U
����f[�rIkP�d�
f~Nj�t�7o'.��#�I�=t�����I�yi��Е�����3֮��q�^x���a��NHG+7�ӕj��|��y]A1;�%;�Z� 0x`�=�d��d1Mz�g,�ܯ��+�H8�>�0�n���^q� ]Z�Hr��~�E݇٥i%g]2���ܵ��	;��72YYcr��+u���(%���Z��p6�=J�RօJ�j��h����/�ŦKƪ��,D4vw]��_k��oӞ���U�嶡�	=�1�����_�˺7q������/�$ }y_N_&�H!�C�*G�6%�K�8�Q%�$�3���Jj�
_C����ye��
��[��a$Y��jw����rᯙ�7�}>������Iq�I�]�vr��ق�`b 4�
�W�u��-��H�{��3j|�D�u4�Dd'SSO0\W�!$�Gx�?�����o�l�_��<Z���Q�:�p>w��se}���aj9�W�?,.���T4�&�q@�S��l���X��ẹ��	�7���"F	�����y��5�]K��|]�����e�o�
L$�G�g�z���Pc�f�2�u�SQ[y�r�+8��3�P�r�=�i�z�~�ak�i�}w�e�����T[ʐk��pQ!�f(�u2tvND�i�@�iX*�/,lBID��-el-j�I��*�VVm�sh�2-)�U��XTW�⢉j�2t�u���L�X����p��͈9�7X�v힘M��π�@@�Gj�e����^a��m�@��&燃p��:t3 @�P��^����ቹH�5�t�e�ŀ�wh�3�qj���'��� �L� �3�[��~*��K�p�.��~�dh��!�X�g�K������"��sP�jWf�r����]�Ǟ Sm��fy�]�63�f*���-�d=0���~���)z_҂���2DZ��?��?�TQ��O����2dx}R�3�d��s������X㠮E��>55��D����Hd�J�4�
�c��|��E�m�#��)|h�ZB�1���Oɜ=��r�B���6#_K��z9�x�9��x�� e��A
�E'�f2�-}x���[����I�9�h��q��	� ,�#������7�	��8�5z)7:6�b�â9�w	�����(�kO���0DF贆7�&a����e/]��sec�����T�c¨b���H}�q��Y�����o�
9�a/S���������q�����)�v�z5̐�N�T����Q��١1����w��+��IE����hw�S��W��&A �|zɄ��A�S�7A��r��h��G�������[X|IZ�$G�t+�'&8磄}� :�#:)B���XSa�%��"��=M�oe+��r�~�Fߙ-��8i���JmMV�E�S�Ia�](���C��UM
��ي��^�MfF� G�c��>+�X��g�R�3�U���D�*��-p~k;��=if���-_ـ#@eF^8��T4�:ry/�`t�B����`�%����y��$˨�ܞsQ2$�w�._�O1�����t0i�[41�}�=W���¶v����6ךtt��1�j�3�0�RҤ�N��ˆ~�v[k���C�sd�Y�4K��e4�������*�Up�th�`H]�F��I.�R�f�L?nZ�NS\:��F+���*E��/@9X\�k i�t��'    ��z�����8����޵�D��DE�<�(��KSO���K+�dJd'��e���(t�F���[os�[,�݈�d�5���"�QE)���4<iVs*�/<�q��oQ�$�4W�\����'� ُ�Z ���Tl��c���-�XO�L�;�K�&�Z`U5������	qY۷���N���]��*oc$ 
*�*�B��=��UK.�l���4r����D=B�^�Y�J
�7̊,
�j�j�4���X=Y�|�\��oOR-/k
:�������)(Q��E��?�_1xc�[�X�1���^�ΎV�~q��#A��呑����/��ogc�[:x�@��|�g�"ָ�/}��J����\�Xٲe�k�=��'?9����'����H�f��,1A��z<P�3B
l�6�ڦ�{�i�PRʾ�6����8�1≃|6�^y��,��5�������&nz��6ok� 3���l�FS����"�,�g��y��| Ѫ�����]�i�*z���nW��)�V����v������œ�E8��:�?�{j����{�N�l����q��{xW+���I^U�]7h�1Tw�t鳽 ��6�5q�3LM�Z^��>�]� �P:�h�<ck�!��J�I��N�C�rÑ/���O���'��B$�@M�@��X�+<J�r��� �X�-G�Z�,�֬1zf׈�9�W�_s�4>M(��S�X�~�T��)�YӣD��؅ �y9SW��f�rϖ�-ݥ#.�x��Ytn1�����R]Z�R��x.��/@�1�'���</��Ѓ ՛GE �*��Bj�J�©/쭊����q;�G�=�� �c�ղr:�jU���@4G[���47�����qcm��W����ؼ�7*�����]�����H���0�`�g�eP�<귒�i�.u�D�u{�bU��6;�{ގ�5Tc2�Ag�l�:�&����y�|�[����9��R�c)I����U9�Sj�Z���L��e<� -Y������XE{
6%��X�d���\�)�n�~�E�w��./��Ն�1JúF.D��(������>�s��XA�j��� Ρ�<@J�3=ш[j>j�?T-�
�]��~��d�St�R��=l�Vtۥ��V��b>�=���1�i�9á蘁m����Å��wq�	��@H�?k=��O� ,�K��:��t� @�:��D��	0��e��R�� ������'QLk�@�b��όö�UўT��4*���H�H��$�=���?�	���v�1����ոӸ�������'�:@�IK�_QЎ�e�{�V���9�Z$S?�ϵlB�8����2�����j*��'a7���]J|2��\�d�Zʾe���y;�W��Z��~֪L�c�ݝ���|*ˬ��4�� d���I�S��L����5]�f��P�Aw�2�?h�VO���ٲ*����ʋ�A'�5Ċ]�rx'����:�M)D�#��$�LQ�qMEB;�-)0cO���sj*�و���X�?F�-Rͳ����cY�I �s7��B��ɒ���}ꜽr���F�N�t�^Z��Qg�X�cM�-��X�<�x����IH!���\���+�^̊&�Z  �.� �N��6q��Ϭ�j���X��e8��XU�RE����8�����(��{Ҽ��s{�N��a �0�wL�Ks�a���j��ø����F�����Dc��B���WmN�Ė�FR�F��6���#�<<)d�y*̓
h��˨�,+����I�*(W�Xz���ǫ�ki��5-x��-62@.l��wp
�N��$'d�t�{ �Q�h��wБ������\�I���V[ۗ�ѷm��$y��d=C ��C�z��a�n�)����z�m"�~��ƴ3�Q���Bly��g�wt���r1��8ö��U�$QG�]�����UyJ�Gl�R�&0��k4���Y;��Î�]l�xvxo4�p���teg�5��/�����_3�aq㰝f���\P ��\����ֆB$\��N$ ��]�v�ƈ|. ��F��ғ��ą�Q�HB�FP��ۙ	Ҕ�	��M��74|����4	�������-��2�W4���}N��������{����˴��Xd \ +z�5Ne�t��3�e�{7�\P�^aYރت\ic���Q�Q���m�X���B�����iv�N5 �t��`�8�^D��_�U����W�셦P�Ȭ��
���ra�!�To�)�*Z��<�)T��Q�x)L7N�Kf�K�!��˝=�5��eל��|�_���7"��v�ERB>=�
S2��_��:�5�b1EO��6Ec!���(�R���ЊY�%r�e��?fPk��qF�q�Mg��㴂�
���ʒ;�?
�nW�5D���:`	�@�~a S�0I=:D�ٹ���	=��D����2�Cv�By��$��w� h�8.��&Eb��v�1u�l�(n���!p��Ǉ����6ǔ�$������.B�a���3���	���B�K�g.�
8��#�neɴD��-N)o�0ʨ��p��p�Gy��g��\��-�ųU�/j&��7�&�-�`���ZE�_���{�C�s�}�֐��v�`�E�{q��A�+v��g�^ȮN|���y	d{��-5I�5��k�2y��K%��.̺�|Ռ�l�Mpz��49�����ܢ����1{{xr�û���GQ�yx�r���ݹ��z�k�-�������6�����1!���	������ͷףGf����	��§�^�3Y  ��E5�_�/|��,� `h�"=B�;$xĠ�uL�sm��U��q�Ł˛����(��cI�<)�=�r�_Ұ2N&e�Lx�B�(=��i�xo�Z"~	,h�7fZ^'tv۟�p'\ ��q�U��zؿ���B�hqKF�8���q����o���4@

��-��3��-aV.|i&�=�h�=�)F&���%���=1��bN^���Ck�����.L���5�]������+�_gW���V�g�Q�~�«R8h�d�m r�̙ ٘c��{uk�Yy}����"M��:��YCaY�z�k�3:ߏ�-��w��N-T4��I�sZ}B���O���"U3�b11	��Z�-k�����u��?�,��1��KC0���Щ����q��ZB��,�_��_K��<6�a_T8���jM�+O$ش���J�	0bN̏X�^�'�Gՠ����T\�^H�]:�mBbc�vd�t/_s���UR��c���2� �Y��I��D�o�ׯ��61Y�ԏ�U�W|�[kIO��8�QqiS׺ɯ�ޯ9�buU}��o?J༵X?�w˿�7�?Su�<7ݟeW�ǽ���P^��I�Z)�CA�c�-�I���O�9�6�ЏV[�!��w_$��ì����CZ�L����q�Ĺk #���:��q�5�e-����v��t$�0��n,��I(����X�Č�iDW��+3Z��RsO���}���~y�pҚu��Y!�8<U�d�L?�~<��A�{��tf��y�2�K"f�xiW4f�mpxa����!��co���.m�"����+�:e�7�G��~�
�MܩQVG���7J�ɨA��u�����ۿ@�� ��*(�M����s��I�!{v�j�d4;� H��t���ba1�B�IҾ�w�`q!����ad��a:f�Gd�\ȕ��Za��9e��͗9}x�*�.�&�P(hW���w�D=?�Ġ0�V�@y�����"�(��J7}�����8��e�V=F�ꆰ����LDN�������1(��Ā�����[{g�z��%[�<*K�Z�f���$�(an��D�H�3�d}E95������{�����~�ј?�u횸w�6F_��EO��(8KQZ���x~�f��6��v
S]B�F�o+��.��<�Ś���O!뉬����]RUa�L�^w�e6����]����uZ$״O�`hkJ�k*{΄�s7��7?�(��t>_?5�ҿ׌he�����E���4O�B�^U�
j �W\3D{�������:�A�!M"A��,�t��d̢�_��O���sP���Jjuڪ��L0�K��!�k�V�b/��N:^eȕw�L����1Л5�v��/�vlVz�Y�m�-�L�POh�(��S��d��S3ӥH�U�/h�i<.E�ڳ��38V�	�32�-P�#�m�ڗ��z,(���p�=���2��n����]��?-�dz�������ktߌ��k��ɖ?K5�형V(\j�<q6y�Nl��~&�I�}��>K� �(����K���&+�>Z�M!�{oK��e�(�~���f����5�Z�2�ͷg�a:��ᯉ��:���5s������nL �˫��������,�{�PϘ�d$� ���Z�b���b�k����#U���I���qbd�gcΤ���A?jA#i{mTԵ>ލ^��5-$\���;E���Ü8��TD��$��NF�%�x�t���)�"G78�~��c���E2��{-�%��-z��1�V<%%������fo:��g��n}��>�U��\g���Ϻ듹Y*�z~j�$�#�v�@�@3��PB�볩�e����E�y�˃�ݫ��_[z[�e䛔���n�;c�W����=���x0�$z�B�N�ೆ;۞Mo̯#f>�k���+��k�B�R|7L!v-3�"h���z��H��y�c۶ձmۘxb[�N&���m;��LlM�̽���^������z��O�:U)�s��Q�F�{�z���'��������:��$�8"�$n���E���9+�����	�]��%�����G14��Pt/�����G	�	�$�y�.��E�w3.
[���m��E��,6 WlF$�(�ȵ���(q)鐆�߬��/+p�o�χS����b�fO�J���ef׷��\��Qfr���`�
��Rs��jλ�&�AX�FL�SP2q\�V�4vڨ�S���T��^6m��BϨ�o:<�l:���t��Av��YM^oK�0����C���o�$@^�21t��&<p�9i�s��)��� |��h�Q���?<
u�C9��w�V�M�}������ً�%�K���'8�5�� Vi�y��%i����(���W=T�A���@������.!�V����ѓ�A�������$��<Q��0:+4<��R��m�ܓ���˯��'��׎���g���.��� ���K��=P~�~K�x��	 R�d#[Յ�u��#}���^����L{���$	��'!+��5� I6 -���
ކ@8�}��])2�=hv5X�<�q�^���'5\�@�����@y�)W��i�Ɋ��J�/"ã��zN o�E[[)ȧ����qDT�Q�D���O�)�0��Т���1�{��"ܳZ�VD���[��%�ޭd[�1���?��Q7h��(hkP���z.{g�C���� �vvo2��7 $_��L�-�.:x��3�gm��)�Et�sY�ꡈ|Hj'%j�kP݋�p�go_z����R����+�\�pT���6��9X�oXp��KL>�#�= �t�0�,���q݂	)8pSH��6z�f.�
L�R�����{����㙡ծ$��m����U����
b��w��!�w22 o� �3���Q�]�#���=� �ڮ��d�}��⡴K�����(Һ¸b�M����N���(��"����I��q^��l�4�"%W׫�GA�Z�1���
�jT!����1���Sb���� �Xxh��|C���~�����2�O~*��hdڜO|U�=�Vka��O}�w�������6/�y)uښIs96�WWKxZ+����#I��@�?E�QG�HJ<�P���@Hy��E�50x��V7�[��@Y�fE�]��<�L�χ��Q���Gf��%/-J�o5�t(�����?C&9?(�H��zM�\0��޶�z��=mc$�g�?G|��z��oW��'�G� ������� � 7li2�6m��8ߖ�c����{�]3�Sv�r�w�Oq�'@���g4����3�l� �P;x�S�њWq�B���k��b3�u(��͸@�_��'�k#,oqT���r�_�S��,�����9��� 2p��v)U�3G# �$&.%��4Š1�Ίm�FEb�Z���*��1�ic��;!�K8���f�����W��|�4��Dxb���j#�>�TQ��)�"�t^��c�yJ&Vq�]��D�����l�+��,Fb�*3��!O�k�?���oi6�G�����L�,X5X4ɨ�<a�]��h�RLV��mYQt���vz�F'�	Mz�r؍�,"pX��y
�l�W�)[i��������#��zER_D�4*�r��Gf�q�L8_�"B�����xF���dJ\�4y������_�J�xLn�8����3�8�4~�������że�?�E� h��-"��2�9AI-��$99�҆�a�j~�P���GE��Ҕ��Ojz�ixx�ǌЀ�3�@���m�#���+�Jl(YE�f^w����=@��������c����ע��C�-���q!��_�����X�����r|b��(��rW,������x�
8��(�-%��_l���������K:+{�k!I�S�e�5�c�z���;Fhh��#a5�$��F�r�������� �%�����VB������K%:B�?�S�5��y��C��
h���\ 2��aÖ�=x�rГ�"��~ׇB���7��TݧJVUy�6%��n��X�T]�D�S"����G���{�Z�)xv�؏�'Z��������A�z��L�tď�T�����Y!ic���&���#�'���t� [р�F4R�@�-���V�JR�0�F�	�����}#�v���T��Pno�sE��V^|�q�w�tGdjO��|G��Z�?�D��,,ˏ�
E?���ZPP|Y��=��A�˼�l��J�=��{����W�L!�������
�S��	)��`(�
�GS'�^���vN��֊~����\�Z��l��)r*Onk�>F�N����Ό�Ky��&]�k��z,�$���bct�Ù8
�<��Db�������W�kϗd7V��Hr8�{un�Q`|�@K�x�w�z�.M{ox~�t+�]������#G9���3� ����������1���5J�����אx�2y�����F����GᵡE�0��p�w��?�~Hj�bx�y�N���
���rM+��*�-T1R� )a���=VY���"���K��������������\k@x�|۟{�����!��[	9�%�A#1�B �$;_�NW�^�#�T�q���f��zp�#gމFC�����i�ё�Au��~����`P�~1�ٳ��[R�jb&d߱,��y3�M����j���(�͆���v�>Vy<��| �dÊ�����P;��T��\{"�4��A�5.��1$�
�O�H��<]I(���
���W�s��ѝ������p��b�=����ۿ�!���|�,��P��lS�A`���:5��G�R^��F�W�3�}x�v��ek�رE�n��5�V�z,R����[7E�s�ɬk�u*���ڱ�[�LI��	s�_���j��Ο�]_��)KSx  l�7z�68���H�Y 2+�%[z3i��#�YT��ڈ̦k;l|,��X��D��(L�!���>�u��<d3'+�w#��х��fV ,It�H�Ъ'\
Wb�n�<�>�Hx��RM����iP{8�ubq���{*�/S��J��z����_��ªam�_�l:s
��+����>����KVs��TTW�ִ,l��52�v/  Ѝ)�Mˠ��N=j�a@�!�d5?��WO��wcI�dҪ$\����C�o�U��KY��c�K(�Dv���:�[�Y7� �ٵ�J��䆅�p�hl|:XR�y���s��P�;+y*K������c�)���`��NW�$��'UB6]W������!e�DG#<��L�r��.��$�qA*�g�G�B ���2]� 8�Ҍ�b) (䮁�Ɉ�P��+)vJ� ˈm���Ւ¾�� m��t���w#��.-��w�WVM±%2.����f�w�0j'q�qi�8�{��Ҕ��]r8'��5<���vm�hS4e�rum�T"�om�3�h�䥚:�U�vv���ŧ���ך�/�O��}���7���O�yYZ���:4�V֥eh��`A�<�=2��b��
��X���;h����G�shW�H?�0�i�p��T��$y�1z�j[�?���c8�ʙ+O��N�d���'�6(�'�g �&6aK��S�KEю+f��Gדr4��~-�Y�J/��m-�0�����BfN�F�NÎkY�	��Ĩ�FC[�J9qM�С�S�1�{L>�^�G�	dY!8U�-��;�σ�9��.n��\�SY: I���1��^��)6tHU�$L�#)�qHT�)�Ȏ%0��~#��]-"��T�ߚܦ��'�C�#��p�yy J��!�D�ꃮ�Ŕ';��1x�j�~��t�s�J\����.���`I3���tVECf�cJ�����lP�����d���^Q��2����JbYVIy�f���g����ח�0�������y�����wSG������]Ƀ��nu#'��Z`Ej_S@�B0%�ﮡ72X[�6�E�"14^S~�ү���������E�p�,�d:!��)zǙ*Ķ��@)ħ���
���1U(}}�)�aZ�ԬT�� <%0%o�v���]k��L�u�U~�?U3�h[ gT���0��X9����Gp){���FW!�A����/�V�/@���R ��(�Z�o �Y�B��A��-�!\�e��C P��R��4GhȞ���l��� R^ߺ��s��F�B������H9�m�L>�eM��Nr��ybf�s>�+a3�6�t���:\C�q�`���@�s(�v�q{CՍ�ϠQ�h/���+f���H*�!�v�2���
L� �u���&�5��	'i�c�G7����KV��w��Dg�{I�f�s|�N
-�x�)�q���7��kJ�4��c��
��c�Lt��r[Fl�*�@�ţNr��쵷�*�.��B��V�F��y�R%��?(Qu3����Sk�>>�"u+B�r�
���Vn�LT�jՀ�S%굋,��� �dg���Nس�L�ݦ�_���7}��V<��ۡ:��:��a#� �6%˜+p���u3�%��`2�T��H�d�H͂����9�O�s6���7�a������FVG+�z�je[��f�{���с��g;w������-��������bE���t�an ��l�����i��)���J͵��Y��z��m���ڀ��+`�߈jߍ}�M�,/�lw��"�u�\�ƺ�A��W��JH�1�"Z7x��G!��#�`ȈW|]�А�����~�Uf�s|�4���=k̜��A���Z��d{�dؽ�ʋ��Ի��wե��~���=����x��	/���IN�� {����	N���t�Q%���0�t��w����w��<ф�vqB���]܈
k��� �N�1�aW\�����SF%����Zo��T�5�����8���|ޟ�,��.�p��Xd�(���ր^z*z�ɤ��}�e������Bн�g,f�+���A�Tm*�#=;E��Y�S䛝��9��CÎs�̏}�U9؋��vA\�0�j�1�c��i������L�މ���H��w��L࡛\(�qU�0�q�C0;H���2uy�-�H"�i,�f�v��Fz����\�Y�@G�
��vi�NUh�U��* ��u�3�\#M�(�su��@�m�SS�R��ꗙ@��#Z�C�%v#e���l�QYg>M�P�r�O�wS�:ӗ.�R�u���+h�7�,�_�rY��s�Ha�}~������ߕ<�n���V��u�gk���]�\�ȶ��<����.�2���o���!ۀ���'Zgp�h�0�d?CE퀛}�@;�b�5V����<r!�$~W�sCz�QQjM66�;�]��s��	�� )tP���`��0�C�	!mI��R��3�H0tGB��_���z�"R��)�Wys��,����L�D�w�Bc�ʺr�O��ݢ�Q;sѾ�VDO�n��_�^'4�j96�,���1D��$|�� `(~��,�}��c��I�P�M`���n��I9:B%Q%��j
"����=V�8@E.7v�yĦ_>i��U�a���wC7�Q΃��:4�����b8���K8^�%)�����$�Mx�������k����:�gJ�x6��=D�6x�����	m]������hNw�c��Q��|A!8����?�u?�֩W�w�;�{�h\}d/��حw��$KS�����o�=�o��g�Yu{Kz�X�q 
���n�يܡ�i����G��r��f>"G��5� c�?P���(ƺ�_d�y=�D)V��f[�Ů��wt����%���\�k<�1�����Xܸ�}�EQ|�c,�*>��D����=�"�v�F����f��ɁV�S�^� |� K{T�ߪIaӤ�X#n}XwEM����:�L�����Ф�?{�r����zZ�|��\��?:���	��<x�t��F~w�������T_����;��D?_l��ώ@Z�"�sL��)�y����ϙ6şftV�J��v���}��w}O��{=�(�27�v���>�}���L�k�ã��v砂�����ۏ�a@i	�n��7G] ��L��x�߆�I > 9N�dY9���vaJD:/(9�&��"�v����8�2,\�~bx����,�m��jn���|C@q�8�=e�)�zNů�<��,tAq1(�ss��a��u�� f`xSx��^����K����:MC򒖌i`�!��v���Q�Y�p���zk���TS2�;��מ�h�%�R=f�~��agjo2��k�+���|�e�+��k�Ji������劘�ʆ� �&��T �<�j���.��_��w��꼹]��� ����q��o�(��E\��N*:Y���I�����
۾(,����oa�)��)>޵��?JY;�zg��uqI��\A�T�> #XS�snq_0q_�[lل��?ye�%�3;�%�(8�T �p:�z��Ο��6=Wl"������m�~���)�^�|��>��R2�i��9-�ǏU5��c����[K1j��>�0 �y�-��#�3 �bQ_�y�6���� ����K�m0먕�qHt"� ��>:���$j����:�Y�h�����q�;�}>K?�Ͱ������!��� l�q��"��*C�2�q��I�h�o��Y��1a�G�2Cg�b>��,��Wb*�V*��T [� B�|Y��^W��`~��n_����n�ۿV����JM�9#xz�90���k�S �\�]7��z;�c��Z��*{F���býU�v][�:۝�o�õ�{��^(�e��� ~�ղ���<��n��֐Q����q{ʫ�b��!�5
�$th}��>iD����eA���]�ӏ!���h�����*��#��� �x�O��}ϐ�Udg����Q��|���ć1	�����d�ֆ����W�P O1���^(gq�����mٿ����c��l�础��e�j�:e����؎����Q\^�S��xGC�1��禽�L!�vGX�巛,�&���o�*)�tR�O�����}�U餜d�e(;ª�1S{0'͸Xn�+�zT�?KG�N�Q��	}^<���76�ǋ0�(�'Xyd�!�_74�n,~U�+j?�_��K��3�nϺ n�J�1l� G���ör�J�A���F��f[9̶�������͏�%��B-k�\ܽ��չ�ܹ��ӭ+�9\23������˸|�">/��&z7�Z0�(qOƊ�Ns�k�a�����Nq͓�m�5OR��7\%�k� �t�����}��<Q�7�Ǆkkϸ;7�^��4j�	�~������58)k�,{��y�dXn�"�$|Q��ܫ3L�ᶜ$|#p'����OQ�,|#���a��x//|�4K�d�ӄ�x�sqՃ2� X��wn:u{R@�D�ő〷����z,���`�_�ٍ/ד�����E�I��$������.�R��\y��w�_�`#���]�j*0.�i�0As�Ӭ(�<���ߡ�섌w���@��$g&�j���զ�3�_�%����l�_��N�0��:G\�5����Ɠ�����2����O~b�*� j��ڱ,`���T]Ք4m:���+W�TY�N� W�l��evi�K�ݹ�;���Ԕm�(N�-GT�e[�N�{y�R�fٖ�l¶��g�A#��j�|5h�4_tK�4��V��~_�V�Y��d��y��e�>d�|��&M�#p'Lϒ�������*���a��x/?=�Ҭ�Y�=0=+�=?˲���_����ݒ���2?��im�n�юھuO��v���n�����09KjjrV'O�#�䚜�Q����,K�&gY����Yg��,�:3�����_tK���_�̬|�\
u��d���~�M��n��<��q�x,	j�cIR��4\%��� �t���$J�=�D������,����u~�:?�-�:?�k��|�kڂ_�_!����*
*�2��Ō���kg_vE�0b�R@HR�i����+=
�	kF�1���2���ѥ����d 5x����M/ppk˦ЃEu-��%:�p���Xx@�@\4�\P�@�0� ��R⒛�k���>�R��y�4�If��]]�GY$)W(�~5&rW���<AP|!ŝt�
�8�#���*@Ą�eۦv�5����v�,�|�oK-ͷ�"�m�$�<�m�nxa���q�pZwŎ{��}P$��o2:�M&�嘽���Tk5e������gC�g#��}��V�KV�<���Q����.+yb�+�V-�C:��v��C�6�۩꯵��vݻ�tT;���*���#8D�r���ǔ��P]Y__�P�끼1:�SO�|����;l�] _i9�9B?�H�lV�߼�����N*��D�R�ڧo�PK
    iY�@ lt+(  t  3 	 bwsewell-tablecloth-3d8afb6/assets/css/prettify.cssUT ��OuP��� ��+H�V#jS��j�?X��� �n6����u�K�L�af�7��S��!8�J�((�3>���s	n<��p�8�=�ԸޝP��\g鉗:M�֊��𞘇o�`�e�rR�.���	E��~�&͎�5���歭(��~��nn��r@�D��i.�?x#ݽ�j�4���P���4e@�qA��������#��˾D���~�����p���%�bȋA[j����ex㛺����k�~�@t�ei�1JS���'��US5��U_]���f`=��e�P���'o�b~����Z{ֹ_PK
    iY�@4�,y�  +  5 	 bwsewell-tablecloth-3d8afb6/assets/css/tablecloth.cssUT ��O�Y_o�6^>��h�Ɏ�I�>e��ۀ�M�Z�-��(HJ�4�wIQ��dk���;��x���
n�T�$��**0a=!��T�}5�i�����#x:���E��+��v  ��^�ɱ���*h���x�� �ۢD�����w�dZ������ۮ@�Y8N�p��HO�M&g�~w�`�K��F;ɠ��.�<��2�~
��I����<�VxP�0�vc��{�=�5��D���)�5 ?�~
���$�cR��U��OAg+�G�t��R;V�;����GN��z�^,/y��cr0�y��Z<P��n3�����p]�r=�J�bEtГl�3��p�!��̼��g�BK��mDe�59���FiMޗ"C�o6��%�;Xdx+h�3��l�z_�}����z�]�I�-5� �z������ζ����cie�5:�tu:Jk����{����������_7����+���=��Õ��\�K�-����W���D���?%Q���7*�.	����%2��K��U����=�
5����.��2xL�*¨*v��!eh6M�d�8������i
U�u�$�i�_��F"T��7�_��Di�7�S�dL�����$	��,�`f%�u?I-������Ƣ6�e��`�ߠ4��a��ѼS{����jN�j�j���DP~kf(�mR��8��4�\���P\<�?�<�a��yygs%cmP�@ �������~(���$�2]�O3<��l��I�k��.-f�먎m^����e��V!���ͯ���wm�%�\�0�-)VJݣ��ר��\����v��y
;����c�*?Q�wI�����\���G�� �4��t��g��S�e��m��4���h��h�/�5�K��t�LgDo���L���ۤ���fKfҺ����.�"��`V�5�S�#1�����7�i� Yr�n	b\nfSt5Y�g:mr�/7W7_�丬`U�ё�礽R(�/�r��
K�p��>� �EA'���I�X$0uJ���2*�m�Q&?"��zy>3Q�|��GN�mX��0�#5����I/�d��)4��
g��u�� r5�[�c� �^{Ĭ����!��"��˼��Z�T+�����П�CX��}�5��ٰw��ԭ���^c�)#�+��`w�rW�2�!��]��@��R��'�]n,l��b�tq�3�����B��f(���*+�����  J��G�]w�{��-�g#�^X_mlΫ�\.-���i�7^�H;v�ZJ2nZKY���-4��Ջz��[O���5�v+�]���f�	�-+T�E��sG��N����/H��n6%�X_��d�uKY�|������^��멕�^#}��}��Ҟ>}�1D�R�Z?q*ʓ��L���9�O�<�����\(����;H���j(�e�H�˝��^*�5#�(z%Nm���п��l��j�=�z�\;��(>��z��N��H���x�b��a;�<��r�nU�e�١�7R��t�i�Y�B�0g�\�X�����g�B�3&�`D���y#i���F�k��VK�L�!��֤�&��3�k��:_![[&��@{�����|`��@;"�P�jӏ�4.�P0k25�!���M逺�co����	&�-���L���1x>��y l��_|�4���G���b����=�ج-���G0����802��9�Cڌ�y�ǩ�����/Z�(���W�&Չ�bN�V����j�JN��O�PK
     iY�@            ' 	 bwsewell-tablecloth-3d8afb6/assets/img/UT ��OPK
    iY�@2��5   6   . 	 bwsewell-tablecloth-3d8afb6/assets/img/asc.gifUT ��Os�t��Le`ah``P�5�����OFF  �00���/�~q�����*�� PK
     iY�@ĸI�6   6   4 	 bwsewell-tablecloth-3d8afb6/assets/img/asc_light.gifUT ��OGIF89a  �  ������!�  ,       ����ڛg�k$- ;PK
    iY�@��15   6   / 	 bwsewell-tablecloth-3d8afb6/assets/img/desc.gifUT ��Os�t��Le`ah``P�5�����OFF  �00���3�\�aNs�QW$#�5 PK
    iY�@@^�5   6   5 	 bwsewell-tablecloth-3d8afb6/assets/img/desc_light.gifUT ��Os�t��Le`ah``�s������0�302�0 H���������s�C��"�PK
    iY�@2z��^     E 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings-white.pngUT ��O͖�;���?Ȓh�d͚ddK�d-[�Xf�oe��[��U2e_I�e|Ȉ�� ������(�h0�,s�{�����zpι��>��<8�ss3CnNN  �o�Y �o���7��=����߁�3�p�m����L���0��w�;ω��L�a���;��&�"#A�AzpO�yM*�E��'v �)ඞ.<�i���լX��Z����ߋm�}S>��fc��J� (t���0��.x3R8ؖ�(��yո�߷��'���ǿ����n�}�~͘1�QZ&P;���ź,z�R���k 95�ˋd�&�Kq���N3�ԏ��y����d�f�6�/(s/1�`?w�M�|fU/��
GT"?y���-�����I�[Y:f���d�|���ǥ�+��|� |>����I�,�͐$О�PJ��+���V�����#�#��΄��\󹕓Er i�{��"��,xً���;^��m��K�,�c=<�����"fbB�+�sW��T.�N��>Ix~`t4ҁv�"����"/�Æ X�&��~K�7��1@��A����;�W�b�:7B�$��6<������ʹ~=��CYu�W��������yⓘ.��9�lţ3jyaBX(�9hs�*4��D�@6o���t��9�T�~Sl����B�M2�r��52���Q" C�`�)'�$k~�+-6m�vjk��(��y�!�}$�1�	�G�ɗ�G�@��0�1ֳ1�+�5��L���%�	��x!��Ѝ�(�eW��G��� ��4Q�5�9�H-���3:�YmA�w�1mR8d����y��8x�W.��7g-+���>�0����{we�5�H0x2^-N�a�V��B%���p����2�����������ӣ����}`�_�-�*	��U��O�Yi���N�}[�ٗnҸ�:wO��Y�$�L���Gk���Rn��Y�z3�f�X�_�s� xa��A,3lmC���6R9lbܞCy��Tw
��ަ)�`��@�*��������z	5��t}�%$�jHNk�jfu��X���b1����@{Ɋ��"y���������f�)���(��aQ�P\.��H%��dG�e;�-ǯG>΂k��A���360�*�XBBռ����}⺧t�iDg��r�X�G�,�2��9oV���;)����������^���:�v2U�2A�)A"zY�e�?<�����){q�H N���uC_9|��Yg�.���[�픋��9����@|ajw�8 s� /= �w�x�TJY�u�:��:�eRDJe��VΑ�\�8�r]|��0B���ߚ�t�r��z�t�b�`A�M�D(	���;]����a(pg���(	�|V�>�����J��2at״./�%������r��(��Zl�{R�?����)ָl��#���%}�i�A���ɞR�:��o�Qe��ׯ�}/z%p�"՞ܔʨrBveo*�g8�V�n3�Y�	J���H��O��Mg�C��J��8�O.q��u�X+|�I�3ƛ�y��O�m�1�ŭ4��ظz��T2=����EDRϑ"B.
#���@���n�v�#�g([�
j���7�/�m�7���Eq�g(��� ������x�9 3%[WQ��.�{疭\�^7�-Ta^��15#=�Vt.����T�{i1��h2�I�Ώ�y{7��޸���*�F��Z��wc��%p���W\o~�'I����ݐ禺�V�5�1�0�y��#n���M������["��QW������`�X3�T0�tZ��}/�ƭ�E�2��/�̍	ļ���k�+F����#�_{;%í�o�yf2�k�j���ߌٗX��OT���Ae��<���TX/?���NbK\�A�e=�vP ��xٝ	򍋜�N�~�g��
V�V_��U�y��4���R����X1
���Wx�A��Ş���i�}�����11~9S�B��X�u�I]iv��<��.��w�J�ScK���8���W�IQ�8���3��ٵ��e�͵{��So�U<|$�.a�����&��t>�����*�E���z�5ϱ�mU?J?|��v�����8���l�e��m@1�h����hE�|���1�c�8�[_�m�MÀ��cŐ /.�3��K`#��z�)��@Ξ����� }dd�dxI�%���B�HɏEǌ�����XV>���^<�F���sB'n@34�ma� ����UBaB���eH����5��m٦��	�V�W�c0����yW>�78Q�}�0�U�wqk\MQ!$<��p��� RR��Uƃ$��s*�Iwj�lhF�|8�T�V��E����&9�5<�Bnل�/���G�
!��JER7�pWj��wE&ү���;��{����R���3o�*v�RW�y{�s�[��շ�p��1�H��&��Wc~�tTi|ޥ����ׂ��㗀�_�Ђ�n��^�^ʛ���V�+���ܜ��^���V��x�fQʕ�M*���s�u`����W^���asGF�u�K1YP���@s�gߑǫm�G������޷�x\!�<�F�0�V����N�iV~+���7�~��<����@�����o�{��xBau����<�ϝ��eٜ�(Ml���z�Kl@c7�)V[��d)^�#4�I�[Z�MF�v�W��o��eë�^�JN��m'�t8�*�dd{�/��oc�,8��\x�j��N!Ð�M�z����n��+��k��Fn�v��g�xh�*)�$�6�ܟR�!?Td���:gw��?_��\U&9�ou�Շ�ψGg���ʖ�c�e���a!j��]�����ｶ��k�վ�[P���%���-�N��	2��j�-N�=5�
��+���zðz�{�*aY��&��t�v���䤅�]���$X.
���v�q�(d����Ru#�
��9ᵘh*�?��B���J����A;-�6�T7[�y�^7Q& ��L3T3�T�l�̰RZ��?d�s�1��G���vF����RO�ȋ��?�N:��;����l�y�фRH��ax�ˢ(Dv:\�z!e�r�f�I�Mme��������2�.<_�'>�/hV�#�h��	�Q�Ƌ(=�����\������}�*G�>�'Z�Va�%[設1��8��Lt]��M�iW��0�u��6��a)����@vl�B+����p��F�����O�� Z��"ǹw�p��@"^���W[0B�f�͏��F�IlMm��[_7����?1���\�tavQ����#��#v҉�'3�C�)36(�����W#̖37�_�����p��X@��*���O����d��M��eF�c�w�#��&菫���+�s�ts����R)'﹵J�hD�90]Z�oھh3���"G�Ɍ�ӾW�"����Nu+�i3�kά��g%�>�����_i���Ԫb0%�#�(0�9�O���n���Tpr6�˺��XLÀP̓P���ur]�,t�^_l����Ī_kO(������������H�c;u�ş!�!A� � ��謮ussv�����o1Jj �`[�-b龱4�ŵA%@�
}4����5;��a�8h~R8��1���8�7,ln�:Gr9"�#������!����ù]�7:��;<�	B����+�ߨ�Fȧ�-�@���֜6���e	/�Z�/�/]����;T�������MG���0��`�{i(,ʭʂI���[�s�5�o�����5��f|���w���>2���NC1���{��|���*O��,:?����s��k���ɮ2�
?b\� ��	��e����0D7�S�w"1���_0~��Y<�5Pm�����X��*�q����Z��/�������^z<������d�o�}l�DQ��Cj��I!��;�'���s�V��@�(dyt�\o���\zO�D&�٥Y�_���G6]Ɠ��Q^�e�H�-�ۀK��ѱ�%\"���;2>o�{v�"S9D����~�CƓ'�+�Q\�;��	|c���Pw����~x���"g��ōs�dG,����y�?p4�@��Y��`.� �M��l��za���N���Y���K�a#� ik�SP��v�I��]wO��)R�	�2^^�����@��v:e{��o�W}��� PK
    iY�@��!�`     ? 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings.pngUT ��OŖi8���C�D�&k�$#[�%k�"�2�+K��ز���)�2H�/�Gf"�6�6��4�Š�e��o������8�\����u^�繅��   <7���  B�[�r���yi�����L&S��S"��>��V���(��ߡ�<+JЉ2K�G��nOT�⋌�DA�黔U�,��m()� N 7��!N������e����0�ݿ�^he����5���5Uz�`c�W���w��"Aw8Hr�:Q�M:�|��^���z �������&,�i�@��*��N�	�/�9�~���%{�q��2szN�P�ď��~��ų�v�>�'${/1�p/w�M�rn]'�w��2�Dy$�$��k�5�7����gײt�B���N�x�[H���/~5T��z�C��y�ٯ��X%I�I�=ᡴ�W��ner_�G�G�G�	��p��sk'�ZT?ʪ�C>k�� �b�8
�=����(	@���u�xcˋ����	ѩp��S�V�J��+v�8������p{�#7Ŷ��y�>��6b��˽ �& ��a�c�{�~�����y�bd��S����_�+纵�����	.1m;CwM��'A.�>�lͫ;bun\D8�9h{�*$��XD6_���t��Y�T�>3l���_�b�u
�j��=<���^"(KYg��$�&k}�--6k�rjm_/��q�.�u(����E�}ɗ�AD�@��0"1631�˒~�L�o�-����?q|�h�z�6�2�;��#j�J`��Y�=�9�@+��ά���� �� TN٫����d(�������Y͊$�o���=̿?+���E��d7�W���Q��8Wɥ����%R��0�Dp�;�+���9ww���e�fcX���nIݕB���fM�z��A?rG���n���4j�OC�%t��.P�ȦxǞÂ�q��G-�Ί�}��~=X<�7Ɠ�J<�T�$����}���:\9djҖC}��DW
��޶1�`��@I���������F=��|u�-(�fDIk�ln}��h���B1���D[ɲ��e�����#�ͧ���TS�����aY�P]."��%W���:h�G�F>�Bh���v��114�,�XBFߋG�(�?q�S��4�;�@=v�ȽN�M���7#s^��Lt���3�`~��܃Qa�}v�UT�A� �$�r����}�h����_$��v
ɺf�>IU����V����i�? �>�^���2�)�b��K#w����SVGDg�j��P�6."�2�	E�g(S?/f�J�V|�� B�����ߜ�t�t��~�t�r�p^�]�T8	���;]R��0��)Ў[�y?�D @$�SC�Bd�0�cV��؋����]���^r0
6B�����[�^�Ś�Q��71�dR���2�"�CZ@wfF�M�����%��e}�$��A�ڃ�ZUNH�.�N�ye�h؃A��8�S��b>2�P�!��q2;��`s`?[	�����%�ݾ�mAl!;a�1����D���C�0�rC˱���jN%S#�AAO�|QB&u*!�0���
6j����7���Fr��+�NK�c���f[=�gYm�Z��_�QK�	wˌnA�wZ�p3�MM����Wn��ŭ5�;��,��?&���G�J��S�=�/�"Fp����S��b1oo��y��:�b��055�ѱ.l��$����⊫M��d)pC 1���L���J��8J����=~�j���a�-�2:�u�hs�1%�ҒT�#���S���^���4�{iv�M���o|���pvT0�U���O���[qr�%�,)쵗S��Z���G&˙��FZ�k����=�5�~�xEX���w֟���j�*��g�:I�鏋4)rl�[�$�/�A�߸)9a�6�b��>_��1P:�{�M�-��8��Nn|�1�D
�A?���f�9}�'��Db����dq��������n3��q$�*Ŵ�4;�d�Wp���3P%���9V�^�]��UdR9�b��,�dm��_YGS��T���g��K">�����!����rS8i�@S5l�!���z�c4fK͗ڇ�=n����*�;��=2�AŷiFN?%Y$��|�&P�Vtd��s��t��/6w�M}�/φcŠ .�3��Sp=��v�9��@ޞ����8�x}hl�dhQ�5���b�hɏǌ��v��XU>���Y8�J���}L7�_+$�u~� �｠uBaB�"��Up����H��\cbݸP���|~k��]~�7$8^�}�0�]�{~sL]I18<������ JJ��E֝,��{"�7�n>8-B9S.[�y�"_S�v����W!��j��X��"@����_�#i�y��]Z'��w%�W��L��-���]pczt�R��G���K[|=H(ҹеwqק�p��1�H�	��G��B>�49��El<m���2��`�׾�Â0��7� @?h7�M���t�.���܂��^���V��x�jYʝ�M:��[��c���_���as�G�t5J1Y0��� K�wϑ׳u��𷴓���޷�x\!�4�N�0�������N�iV~���7�~��2���UO�����n�Xx��z�൥����6�e�\�(-l��$�Z�K+�_c7�)V_c�d-^�#<�I�GF�UV�~�G�b`�0�˺g�n�����Fnnw�S����8���g�ʊ�w:�1��9�@��D�������;\��C�k<V����� ,��E��N��[a�J�}ё	o;j�� ���۟��Bv��h�����������-9�e���n%i��^����ۑ蹲��m�չ��W���%��)�J��4U���-N�=5�	�����V��b�7vTC���Ms�0	[%�_�����A��R`�$(WGb؝��B{����jS�Yi(��qυD3�~��ΗҀ����=N�II���ڙ�����HZpA��^@���Y�m�`��
ғ���8�������:���=�_�o��bt�� a��P'i����s3QgY�����JF�9/�����i���ŋ9���'��5���Z�H_�k؞[����\��Ğ�yQ�,���$HEŚ,��y�b��>�	���k��+�	�şh�X�ޗjf�7Gy��bT2���M��H��_!_l�M��$M+ἅ_�B��##�ڡ���F���T�M�}�di��\��V�H��p\�Qu��yctH�`��h�\����Zs��Uc��	a������L�����9$/2:b'����ޤ�2Ca`����ȩ��{%�|� s��sj*�������ޮ�>������Bq��p�\be��2�Q���
�-����	������e����Jy��B�x
ω��x��E�96{p�=�If�����i�?c0�Kq�P�O<�v��7x7�V.|���>Ҫ���(����Ц�?:�;�:��A���5}�w��~a�"��W�:����t�7��rp�rŷ�;^MX�U�|	����D�ug�?�
�B��&���Y�k�ۢ�o?-� a����Na�������������Ua���PЋ�N�0
m�����G��E��9�aew�8sPK��E��m��MN�����(�A2��^�YNP��\Y�zu�LX�Bj�*��v.�,��/Kx)��w�}�r��ߢ1o����v3O3x��&í����(�*K�V!�8��kR�6��=z)=j+k���{iX�[3{��Ǣ���ŰN&߅;�SȫT<�SH��p�T[��X��ޯE�2�;*�K�1)0�~+(p@������!������9x����>�򙞡Z���?�ֲTOE��=<�� �|��ܴ[���%���f%}��e�#�!f���=L���1<�%d�s�x�@!bХ�MJ�=�bb�=�� �o�^d=v�ۖ>�l	O��Eyֿ�*#g�4/l.	l��Fq�k�n|��z�����L�3�'�h���Ld?��J�k�^�O����w���u�6�!e$��*\ϯ�Y�8b���4�� っy�R�Cqs���m�d�����s;��ɵZe^�Z�_��ؠ��N1��M��o�yp4N�N�3�����G�L�zJ��)���Ms���.��PK
     iY�@            & 	 bwsewell-tablecloth-3d8afb6/assets/js/UT ��OPK
    iY�@j �m�     / 	 bwsewell-tablecloth-3d8afb6/assets/js/.DS_StoreUT ��O�;�0Dg�K4.)�p n`E�	� W���!��RP%�y��V�iO ��_� ��3>����6�!�B�}c�t�vB�2���ts�:vc2]�J7��_�#��L����C�>�+�1�X��W�,��pp���?a5�!~��u���v���K@🅧nl�+�ܺ�OPK
    iY�@���J!  �  2 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.jsUT ��O�=kS#G���_Q`b���w�{،��;ܠY���-���#�Zuk����ˬgfU�0��9؈��zdeee峪z���[�k��EUV�t���y�����x����~�-�U5��ޮn�ʦ�κ�^q�m�n���O��4�T�au=���*�=q{]Ln��հ/v���AK�{m��&�y/�Y_���l*�a&�'i��5-��lZ"&$l���6�� ��b&��[1.*1+3���b��2�}�e�J�c����t�� 1��h(���Y�(�U
�S�0�_�P��FZS��榝Jd���j{�����G�O�� a���x����f��S�l�V�@��v�Qz#��H���U"|3ꏯZ�,�M:�L?��ʻ���ˠ���b�Xl쟋���j��輅@~:��p��#~��f��stx.N߈ק'G�������?�Y����AKd@-'�0�� �)��%�γ��0(J�$�僼S_�ҫL\��f$&��:/qEK@��`F�u^����y��ɀ�������`6�!�Dl���mmM����D	���4�U�d���\t�V�@�����雎H�J��+�:�V_}��_��SSv�?�q���.g�I1��nW�=�/�ө��WE�����:W�.���?]���p��?��-�����ܳ��%�F#�D6�ح����|��V?e�wy�Y���?�lX.�ٚ��4�fӱ���h)+D6��Ʃn)o���@��-� �� Vlw��M	2�FEp���x��މl�r�þ.���F�B� [l�x1ТY�:�m��J��]3i�z������~q����f��V4��~���5e���L%���Q�ؓ:}R���:���ԝ��]�|Z���>�σ��N$A��U��x(I��8+!��~Z�[�`oCn���ƚRD���9�Ҋ���$5ۀj���2���k�FE�9	H��ɴ���v�zP[=�h5���b��ZayKH��u��E{��Ѥ�4e+%>iUM���t�N���A�oN�yǕ�W(��:���i6 �H+�'�<�w{�MFi/K��ϒ������o����vK4M����=�l�g_SJ�+T�-��l���*��� 	M�7C42X��=4;��lT%Mt{���@���O�hr�ô|=J�2iH�t�ӫ��[��]8TK�;[3ͮa��C��j��+f+����Hv���7f�qi?C�(ஈAi���3h�]�ۛښ�
�Cv����?:Yn뛽����i�����Ð���h�Z[�~���̂?,�Э��H��H4�qv�D��I��� ����I6pÌ�`-�����l���(�t�5�4E=گ���a��!�>���o�E�l�!�f�@ߠA$�OJ�t�S��IF';��1���ǈm(8�Ǟ,�'���Ȣ!�����N��D��}K��iƆR����F��%uBK���
l)@7u����嶺6}���}�@%�ݵ��{����`��&f�yf�j����2��aa��Vb	�!�I��(�rt�A4�&��#�7�&)%�d��ӑ�̥11�)k��V(�k��BoO���ht�Z!l���md�m��D�F�$�p�R?�.M�,�.&����dVqgK{M��b��@�7�i�K�Yκ���Yu�묘U�Q=W���H���$�Ē�H��~_;��2u���S��4���U?�e�,�v;���Bqu5b�Ⳉ�A/KS�2
�ކ�C[S�X]�Ys� ��M��x��lEc���GK!�7&�6���t̢�Fd�'1���̃rb&4ϊ��4��t�-��scP	��S�,$�%���^+l�MuЍ��2�1���Rb3��v�j�ۍXonp�Ib�ɹ��i0vF'�-���P1���Vc�]��wf�<��~5�M�+�=[�Nm�J�ha�?�+F���q�^:-@��n�HO��'�����B0����ӷ��+���}���b�����]��/�.Gy_�d����"')�	����aaxV���׈�A;D,�����p/��G�e��`Wx]z���"���p4�⶗�#bʒy�%l�1PY���0���q�-� )���������^k��0���CP�6*�6u	���5�`��>$ m]Sc�Ҁ1 .^����Q�-񼉶>V����i6;5~��f�]���������=bf������P'�M��'�����~�1aԔ6U[E�Á�k,�0�0 ��k�u�/�M�r�8k��2#c�f��g��|.K�-6\�Dz	릮&�g3�X�%�tYA��.WSz�^�D ��^�js�#\�M����7P_�q�S_tyO��P�hϰ��((��P�����M{�D�� ���#���_d�RZc�t���`g`$��z��Đ����.ލ�4���F�����AÕW�HVE�@LL�ץ&���d�嶴窚�n�<e-6㎯m%��1���Gk�A�-��󗕷�[ݐ�>;��b0 u�Sއ���F��i67�]���f�#-��g(��DuB]!CW�Bms��e��"A���[���^��5}�R���(կn�Yx(����i��<�n�-�T]-��#.����ib.f�Ǌ�X�<�b��y��p�������
	�Ԧ�d��nq�4�����p�q�����١&�6��px8�P��y!���:nAXGhQ4�s]K����U�G��=;!�;FOB4�����Q�/�Q������5B�O��~
�@q��G[5[��-��6��	��D�h��G���!�b4J'��?<$�!=4��z�J}Q���*����D�W2�6WZ�Z�&�6T@b�����]5�i�ŝT�G$��@�EG�LC�[����*��W$6x����J��`�5]��d���ȼl�?������-�f|[��S��01�~��:�N���h����1z���k�D���K&������1����0�R" ���(�ٯ���������ALSʘ;!��`-'	o���N�5��YG|�}�i��g�uT��+v./�
�̸f���X�%d���'��4k�G'�������-1���X��?|�m�b��u�^|�s(frd��F:�
چ��q֐�a3�՗�B�K6����#7#�uVp�K����R�K� �2�ӣ��hz0���m�K�0�=A^n*GV1O�u�{�?�!���� �"�����1"����*�
37z*ĔI������z��u(�����&C���pI�����uz|�v~���pe7�Z�����nя��;y�\}�8Vr��gok�o�L�η���v��lk����>���[�۶H���3-�w;�{����Y��v�z�j2�DH���c��{7��s]��������b�?�h������{�;r������������'_7̾r��tIԽ����Ω'��n~"݉�LRA�:0��sm�`�C� /&�y��Lt��n��Z�wΕ���//���܇n���c��Ƙ^j�Tc�1�J��mwr�(� ���p��KO��v�f�E,)�gls����g���$6�z�E4ێ��f{=�u4+L�����Z�����E�T�w�O����9<>���s�hE���[�K�;�\�Z:*c%��"�H�G����'sI��$��}Oߓ��X|+�{?��t�z?��J ������~�\K�h(��l*��V��ށܲ�!�j�*�읫�ȓ�V�a��q��r����XWG��s��/-�^2?�a�K��$I�61�G�ϝQ��NI"mqSĜ���X������T"+{)^�FUɕ:��CE���mm�h����Ei�ֿٿF@���lҦa �U6�w�����h�7*�ƖPzC�k<y+��c2�,��F�%A��vr~$��Z������1'!�w�H�r��ܘJ(����H���!�1�J��X]����*�o�����}�Mن�R���p�7"!����5��,�����!I��M��A�-,�Tb7쨟RMgo����9?�?8��LZ1�E��%�v ��qGuMb��[o���9o�)�ݵ��Z�
x�aSiӛI虙�j�p���l�(�Eo�M���Nc��w�*�pT�L
sh|����Z]�^ĶB��j���0;�0�9�a��ž�ni�x�Ѐ��N��~��+�&͖�o�/�ľ����>�S���k)�4ĺtp���5�n�ШJ�Qvך�,I��E�*J����g;m��N�T,ݩˌ" O��Gyc3d
�Z�{?�{�ɚ�Sؼҝ�"o��lO� �~V�8�)��w4�p1�Q,iF���X�ɹ�}��~��v�t�w�ٴ[JA��l��&F�f���Hz�5,�x�fK�ՠz&�#;՟�}h�:��>I��NG5�wfO�~܁=��l-�c_H4M��J~��z�A)��,���
��N��:�%��B�l�z�G0�L8�㽩�gR��'n���@��;ϳ���7�Tw�����|��� {Q��|�^_W�d��h\NLl�g��Ė�B��b��%P��iz�У�O!ާ�g��=��vNO�;GgxٌF};j���Y>�+|Fv)<a����0M�۩,9Bg�u��%5)&��D4˒�Y�<���L��[A�[��{�J��J�zˇ���̾���i�]��T��TSfP�y��y����e��:�U+�RoY ��h6u��@F�����0i{/h/1��:���r@%�u^l q4����Ji�=�v특�~ �K=0�{��䕻���ܱ�nh�S�c._X��/��<�z��O���
z5��5���cO��N��ٙ*����O{%4ä)(Yi�iX��~"�7�br��7����'&m5#��������k����P�?r�^6�{�\?z�!R�0��<�QP��C����\�Mj���+!��g��l�Jp�}�� ���(�s���`-�C�ʑ��oem��5�Qז �L
z#�U �����y!�vE����$P~S��i�6Za��ÕQ��?�$���5�`"�SC,kro��"uf����i'�N�3����P�?��@S����Υ'���gZ����j���x�]��~��Q�\�e= (;:���T�0�⭴	�޻����^6|�1�γ�vE<�-�;Lζ:�yW��#)��܏C{-�M5��Vo(�n�`�h�F���%��Q�qT/��UU\7��'��o��0�6�!���;���X���U/��5��1��i��0�Q��Ũ�8���V"�[���Y��ѣ�BH5���]�;����d�ű����u���5BL�J���jWo+������lVm۲~,Q��cH[�A$��ZfϿ?�4N��9����Q�)�U2�rܹ	�P�T�r�'��e�=�P�i~R��9A���Z=���4�c��0�163��� +��d����tæΡ��>1D�uk�؀�{l�TŶ�3���I��<G��K
B�N�!����S�w��iJq�>o�H���-�3�ҳ�1�'��.`	I`*�XD�� � 4�����/�u_n�r}�<S�0�M�D���*�%3�k :=�����?��27���ֶt0�{��b��T��/
z���P�2�.��Q��>(��P\[��;)�Sf�"�f>	̑�"���c�K�s�R�"u�����R}���D�j��u�;�肶T|K����e�p�jW�in��Ő?Iv���N��qӄ�W?ڍl�[�[$g�����ym*H�I�mg�^%۵�K��]�;(޳�N��ZK�y�J�҂
�'����H�V:�7P�u��δ��Co��՜��ó��C�?e'����Cv2zE��b�|�)�_=��wͼ�"������8;=;���q�ߝÓ�s����s�y���lb%�W��0���exT)"�]�V4ϩ?�9�r�ͨk�Z�{7�M2�^���1t/`�8e�6���ׄd��}�I\�s �^�g�����&��`C4� l��A���B#'{�ĺ�y<�cq�}]^��n���kB��'��t���B�sX��4	�8��2�kqI��!FqS[�F�����$&?�Ml��#��NHS�X��G���e�mb"PY+b�-Zq��D4�l��bt�ɫ��&o��kD�1u�_�5R�b��Wў-h1�Ff-��S<���,'�7�-��'r�l�߇������P���~sz||~�s�h�2�z�q��f:�܆�7�^Vk/+����:R��\���F����y�����D�4��t�$��ml'X�}jS5;tx��d�)Y��J��#�ț6�!!��9[�*w��'�U/���8}��i�#��e���}8Q6�ؼQ�\CzMG7r[^Z�v�mk.���.�+�F�ؽ��-̗@�TX6�:��f���f�$?�_5"V��/_��F��V�q{���ʌ�˃�J�ɩ�brĔΘf��>��dm��m��'�p���^�y�(.�.��6Q��'ȇl3��$aO���ٲ&��꟬�z��c�u����5��q�$9>C��ի�ȷ����dC���.�K����%�K8�,Y�u@���®뷤��n���$�A���瑼�5��ǥ�y:o�S��i*���Kl?����|�������P^�v���[���^����F9/�|{�V�"�W����-�3��M�%��Q�v�Y���[O��qZ�7r��i5���c?����Χ�s��t�w@���1YlbF��]�|'���ȝ	Oifr���0�]�`m���B7�D���ky��e�岴�.����_���'��_�?���Wg�������M��M�)u����;^iw��J��1i�|6�J�*��h�N��u�)�_O�k�y1�����9��*�����"��CHf��lĿ@
(8>)P�y�s�R0Ҝ�O��X��;���4��i_���>��H^�]�vޞ��&s8O�%͚���~m��;MY7;6�1����)Ro�e�b&��`��:����	Y�T/�K��,{�̀�}��Р����i����dr�j�ā[�aS����V�9.�@�G��~A�n���'p�2�Q��6�"��$�#�uƯ�H	�=��gbC�ǟ��ם�5�'d���ct���zV_Ov�[Y��B.���So�,Wp��i7__~��niw�+���;��v��6r��4����4�얨�^̊���8�O�@��eK��I>�!�L���A�i߾t��3\�t������PO��'��w����V��d���*���I�u�e��Ӫ7��AX$��#E���W�
��R�K�t���aG�iÞ��t'e�"Ү
�H��]��R��;�' |���b�����~6v'���}K+�֜�W�c����yr7�Ѥ�!��9[�_������a�d	J8�[��R������]��r����}6	Iy��suW$�sǯD΃�^`,A���� a�A2 �JR�s�#���݌]��f�2w�*�����&�wi<��"��\�w��l��ܤ/l� �H2('�wT����KݣO+#�T,�@��5#�$��|r�(�M��M��/�o�ď���d�{?F��d��E�ݭ%�����qq�M��j�m�ه�A�֍7�;]R�����ͮ�q)�=qqI8
o2�g�%��~Py��Z.��}3D�J��4͆� o�y��~�)7�ړY9T�$η~#Q4��\k�x����B-�K���ѻ�l��B^�33�<t��dW�&I#i���	_�F}����"Q��5cF6J�[����%�̷ۦ4eR[d�E>I`��n�o1������"�U�u=�:N�Es�Ԫ��F>ArJ�IS�����1�:pH-�Ci���J��qGm��1/5�0�n�p�ܝX����6���#œ�����jH���'�3�挿�9cQdκ_t�:r�OZB�?ie�γ9�/cC��֒�ٱ:,@3oK'��Љ)��5����^3�*4��f�;-n�lھɺ��J^��e�e^�e� ���2Xޅ��_�{|`�0>_����Q�wu���^LI��x�H��d8���e��ȟvv1�+?�&Ov���"�g�Ҽ�[��l\�]^��+Y.'@ 8ðd�p-�a��Ol�_�A�S۫��V卡]���"eY��0k��U�M�Iz����5���[J�p5�Y7�e{���KԹ���N=���mJa9�z>^f���!�\S�x(k.�^�=�"�K�����?ﰁ�$�iE��`��8V��vO}>�7W]�oCv~>;���p�`��C�lG<��irf�G��o��&�����qC{LL���w�1�]��e�>x�h6�w�����^��^6,�5�_~�
u��l�����Q����qQ�5�a:�F2?��ZJ� �z�=lu2���O=�I+(�g�ʛ��<`�����<�>�?PK
    iY�@S|W|  �R  6 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.min.jsUT ��O�<�r�ƕ��

vQ����u%
bvg�*�J��z���[�A�\ �F��o�s���F��$W� �@�N������}�n�uݵ]C6�/�$}��� �d:��]^C��z�ؔ�U7yy�~����:ڄ��Yͫ���ِlE��Y^TeF�-m/����O������2�v߼���خ����>	v�WO��۶t��Y�$j��M�t��nK�h��I3I��ζwt�Ei�?>=�G��SE�#̒4j�Ǌ�y�i3�$�v�Ӣ\���)��F�/e�y����?4��m?��f��z�O�;�����~ܧu���$J����M�� �C�v�����UE�g�j��7�!ө}js� L�~�ǿ`�?��~�~��-m�� �N����mN:r���]ٶ�G*�t��ȢFf�Y�W/���iح�6ʪ���~�E�����qC�]V�a�m��M���K��4���PI���rI�z�v������� f	�q����:��@�H���΀�~ߺjh�aw�\�m*�Q�"z�ϓoo�{�x�]pz^ ca�>,(��i
������E��:;Vt��V� �W��X���ނy.H���5�؜U�a%�8M�T�� 9�S���w�A\ �|�:b�$:�{2�QP��йB4M�Q�v5� ��+賦���B�|] ?%��z��n�E���gjpE{I���4�*Oc71�Q�lJ�>��$���{���1�Q�� i�y��`�6!������J��:�}Ι��9��tLҰ��O�4Y J�������3�`L��dɢ�1�f���ݓʋ�UwWy3r� �BdyXP�q��W��-] o����,���} a�\��z���V5Ɂ�l�9H\�sM.}i� :������u N����^.+jkUbn_���R|L�q̷��R��
f��&@~ߋLx?5�64�SZ}��E�)����E"�$L��/xq:�t�}�|�l.m ��z��7P��B� ����d�Q.�d���3�뒙>/�r%��N��޾�B]I��F\�3]���
�k��D�퀨�-`A��K\���咟���I+]��!Q[�9�N�;��6[C6�"��gO�U|�[��E��P4_��lh�Uq߳����=f��ik+l��Qg�W}� �� ����k���ܖ�_���C^0�j�1ӁҦF٪�r��s	���+�=�L2+?�Ʌ�>�zzJ�/����!� ���2�=l�7�[A�I�=��ȡF���=D(gt ��g�`<d�H�IH�k�\�SQ`��*�K\D�6�onl߰G��n�3��=Ʀ@qEx��`�@�Z|I;��p��#�`�{-�,���T�M�m�8����ß�\��%A1XX:qs;a,;z��+ �I��$�&bN�.�9y?	Cp�2E�U�̒�,�ͮe�Զ�l3����>�mwHo/Q] �+�nk�楱�r`Am��"5���G��ަ�r�R���& �k�&zne�90,u����rO�U�I$	i��g�7�	r���{�*hc�ۻ�� �Xk~:����Hsz���T�T���줸���B�	�e�y�Sѯe��oB�,�s�� 1��T�X$'T���������*�s�C��v�H����e���lZ:�p;�
��^�N�5��bBF�kz0�A
A����^k>�^�XT�Y��0e�lѪ~�i؄jA��'#w��H�"�zm� v ����	/�ċ��,Ś����M�i-�Δ�| ��zRf�1D�X:��x�+PЄB'�x�����V�8�|q� 1�^�� ��/nQYi�CX 9�KS� �-���6�[ۇlvGd<�EW��I3�#7N��<��jx�,�ǼGgl�`a�Q8�j����n�p]�'E��E*a�Ƒ�vu`yr���؆��D�����>�PrD�8���bߜS=�;^�i)	�ۍeO�c����C�R�\��m��;����ɥ�奦NM펠��Y�7b���5fpL|p?�ax,�ߌ�S��8�ة|pΐ�}�gv�A��Ob��P�ԛ����3:dw��!���3ctY?���	s[���uX�K���O	q|��9���>�]$zF{	�b/�|C!.<YN���N�'WR�%�ޜ�V6R���ӊ���ǰCJ�!���f6[p��B�~�;�I5�_�J�9*�L�~y�^b04	�|�#�g���˓��l�Ԩ0Ly�O���@�Rh'%�{�Lf:��'t���mJ�/H*i���6ؑ��SO���~��	�e���,?;�&7��n@8�ϵo�I-�Z�<A�%]����l�W��8ġH������t}��]۹�~��i�`6i��n�,2�f=�&�q_��X!0��>�S܊Q�t�
Y~��4�sv���Ǵ&M>'�'� �&ڈ���H��*�U���-��ENR,��dL*�9�Ӽ:BOgf��MkOK,G��e�Xe��=�q��Hr�j�VG��)=0��A&�z�ދ
sa��A�~K�!`N5��u\h��h�t\f'Z��Gd�����"�B���>��$�������-H:�4�@�[��l����4>q���f&9�4�n(-���П� ~-͗i+ƹn*�c��{s�%t:�v~�5�ɥ\fŜ���	�?"0��ɂ�#+|2�T�	D��:�P�W���^�n|�7��r�Di�i��JT���3	K�A6�Q�!�A�+؉�N�aٶ��r�*v��ή�K6*X +��]B�����p�_�3JI�l&�Qp���z�d9=WU�����+@���,k=3��ic/���7(���*,C"�4�la���(����!����b w��וc���;��X"0�3��-�������X�8�;"�t�mn��ʱA27�%�G�#�P��8���Ļ��[��Sv!ó34O�l۠��̏4h ��DE5�����ROO���@�su��`��|$h6F
[F?���T��k�Q3N�6��Mr���$���]bOܦp�������GB�gBʒ)�Ds[�с�X�<�7Ynd$ @�ަ�uyG�='���mx��4.��bK<	�7ww��Gޙ��\����\_D�)���M���,�e�ux� �>����/ ν�������'3���Z�RA�eb{�T�GVܙ�eNJ:㿩ВL���j� ��`������e���"�\��s�?�%+]�?�/ރ	j(�2cs�s�sz�H~H��6����y�sc,?�p�`	�~Ou�Z$R���_ώ#�ƺ3uzN��r��D���%���YDc�I	�d��pBL�	ߚ��d�|��0&��U�Ya���^��J�RS��*��a){�����z��'$pi	�)��`[�#�7z�Ba݇������D�Ϭp=�3L�y��M� �T
q�X�+̺K�w�wݸ�sC���9\#�Z�1�mgh.@c}�Z�s���S�,nf�s��������d"��P��Ȏ2-^c%�z	D��	Y=A� >8���O�hxa�f� Ȋ���� �7�w0oG��*s㜲��E$�|�_�+*_�[�gVM9㬾������K�ř��>W�4����?�g21?��)T��jU�T�k*�b���M}��������<���P91���r�y|2>�?���q����s�4���hsv��Iv`�O��^���7|�8u��p`������Tw%{gI�QY�Xj�%�%�� W*�[��n`Ȟ��w�䕁ʃ	2>��f�&?8M����/0a^ɋ�����)�1��uj[����⥥��[Sg����ɯ���je�{LaK�}���3� ��������(&1إ�d�RL��R;M3�sÂ>��H�o(�Q-$�Ej����K"]}p��ws��NC�Iuvl8Տ]�7�:�mJʲ�^"�	�91;C(k���I�v�8<F�o�:vWM����⸈��5I,�f�v����E}"�8�e.ә7���~R��ɈL��W6w �� hh��n�@�o��9M1��S��J&��AtG6�ئRl$	%w��q}��?"S�}OcV��)
�#�q��岳C:2�G�t�g�	>���A�?�`���sP���0L %�!?�ͳQ!�u�S��|�3z~>�o���o��}�O���jN�u¿ʴ��]��������d�l�~B�g�'�p��PK����-R9�N���)^S3W��<*��k�(�@�-Ƅi˪*��d�c����la�L�٘����L��vf�ے��
KEfEH�{��0µo%�னE0���o<.c� �����a�xb[���M�	ح��}������B6��e����<�f\+M�� �x��^�[w�	��F�s���z�:^� e�T{��n�����
F��$ԭ(��o&&q��=�a\J��3o�*�	E��\�_O���!��O]m?@��X�ݘ�������2����9�� ��o�Ij�T��;2|'�K��8d�J�`,�rSV�ʵ�@,��C�f�-� �Ȋ�|�ޑ.[Adx�*œp��?������B��Z�*-�Z���J��1���R%%d�&�6d�N���)��[�ޏ}��Йs���uzM�ߓjK����j�]��Vd�T	BY�s�Aaّ >.�k�v�*Z)+��F�(e%���쓎�KqĮjWӳ���aU�_�G��y49���t��Ҕ-�f�s��%X_c� ��Lr=<ҡ߫�gr�����}�9�Ǜ�`��3xe/��
u�߹Fo��`�>�7�W�S�@vm+�W�5Z� ��ی�^������?:{X���1�UY�Aw�������Nx4k�����,�-��$�S�e����#_)��@Ą(
���姯��~�3/�B�\z�k�R�|
�TA�^�xg�w}!���*z�/g�����4E�Ek��p�0��D�3]_B��=�٠k7z�Y�ΒʛZ�y��j��1�y,��fy7B{c*t1+藨�ʺso^u{	H��\�.�@r썹��-�:�&n3FK>̡������w�}��ڟ�M���n7�~ۍ<���?��z��YmI�od��
�! tv���2)�~SC�����޷�C�!ۍAhq�� <������������ɿ�WbuL���j9�������mE�3q���eЂ`�
�:Y�l��-�Pb5�,�c鑝�{���ѷv��8&	Zg@�Xg.ɮ��C���ݭ�����x����1�q��-T<���(������P�=�3Y�T�_W�Ɏ;@1�x�Ŀk����R�D9lbƭ7�����UysM&<��-6�����Տ���!Ql;J�r|��x�@��v�K	t�pY���JG��PK
    iY�@�-�o�  wr 9 	 bwsewell-tablecloth-3d8afb6/assets/js/jquery-1.7.2.min.jsUT ��OĽ{�F�6���)D�W�%:ɾ;�`ǎ'��mǞ��Rt~�śIʲ#r?������ A%3��d�".��VW׽.�v�f�u�o>�}���w����=�z�jq�77�Mq9/�|��Ϟ^�/r�Lw�j��*	��Y�ɏ��M���,�&�r�s��V��p�qo����yEƽ,��w�����~��{�x�/w�E���Z�Pk9�;�l�����,��^��>�,��޵׍��s/���u��ޮ�$Py�������r��ǟ�`��6�b�!��U��x��2��{�����v���[�>���.�z�/�_�WN6�"�������&�7�ޗ�n��i^�]t�D��崜gT��I��}��ժ�y���j��3��WO^��;.����J��M��}��ޭ׫͎����4��wݡ�;���n1�4��w�7ט��Ƽ��W[LE�6ܘ�lm fu³��j^i�2�v�^�(?hh�[gMw:X�4z8&�<N�~�Ơ�x�V���Xѣ-`Ͽ�eA��j����q��i�ib�"��y��G�|��\䫻��n�U��{ؒ�5p>(��擁�e~�^����Lf9����L7��j������y��'�F�h44��Sٴ�2|�ۭ���N���?Lh�����L��_��]�9?���}�Jn�Â`��͢�і��
5U%�y�,vS5S�Q6���Z��Z��`���E����vy��9��L��%���C��f��l59�����6��o�h�ۭ�[�盗1`�V��h4�yt˭c�[쿧^p����=�w���9.n��E4�zg^�V-�|�ӮyO��,��u��V�g<̢U����u:�x�h���D}�V�|4��R?W�V�t5V+*չ.�u��K�2Z�������,��;��s�͆��~X��p�X�Ɇ���]�.�C�L�(�l��>j��u��r��� \�+�	�á�c@��d��2�@[5��wAw�|�^�~]��l��ǒ����"�����Q9ӂ��8���sR��i9�������`J�/h'�5BW�"��E7�Mj�=ݳ���:l�y L͝��ooG��Ӂһ[Jk��c*�Π��,�%CɃ�,�#op�8�V����P���o�28̢�~�-��=��b)M'fGd���٘�/�b�� �x/6����@#��BX�"xL��䕌�NŌ�σ�t�����f���[1z�`ﱧrn�������7�bT}�S�Ё�I[��$�|�UIE�bgTO�0�F�,��&��h{o{�y��q������Z��R��l�����s�`��	��P����`#�;W
�������D��e誈
4���dL{���#�v�R�h:�j^���oԜ�:(�g�A�Μ`�p�<� ��h��"�k�Cŋ�|<�GI�;ݱ`2��:?����v?��<�,�V������3�pɩ
�hmt����4JTu��������g���F�ɏ8دh^����B�+�.9MӔ���,�|wӽ4�U�L�I�3~?���	Z��=����$/G���g�h���v�Ѥ�s���l)�]�5�W���Ʉ��q��o��޻E�!���!{~Ż3�a�0�&D+zЦ����(P�U��ĉ������M>��w)ZZě�\zì��a�|��[wFJv=��_X|����M�'ޤ<���>����|����>��Q�gV��Uɂ�TAԝ�x��c:s�>���+�I���ħ��W���5�s4���6�a	4{V~�͐Lk4lr�\.��7o���&�HA�6m$�I���Ҳj�n�b؉�m��b�\�/�0��m�M��р���qf��n���6.P!��%1G�2�< ʂ�����[�!-\��,Şz�N���X��y���r��{�B9�*�+�ʹ��~����M"��0��&���ڼ�ϛU4���#��Hn�b���f� ,!^'�7/v�,Z�����#p��7E^/�xĬQ����/�@�=�+�r�,�$+g�����y�P�h(��z�<�Tz���'a9��͎�Z�c|h��x~�W�|i��N
�����".�}�L�]��&L��ĕ��Aw�������ZX�����~��gQ�~�w;��d�K��xY�N)w��~�C���Lz�x��|Z{b�PF�d��bs��yN�_��? �m���8�|G9յ�湚�ב��RPP%c�N�<*G�Xƃ�:dtO�!_
e@Q�L�� �ȒWD$�#p�pK���h���ɜ���[w��hJ�E����W�������AW=�k�T�f8�=� ����z\�\Ò�	�GA�[��~�&(xk(�$J��X��{�T�����:���p=S�m@���`�F��-�����RC$�TSUR�f��G!܁MD��P�;)0�Qp�]��Y[
��z]I߫�~S��Ul�~?P+ �j�vd����
�����:e�J���"��bף#�.'��D��z�ƠS��i��$u�zMHʼ�ok/�t�L�ĪVa�#�p���+�	�!Ri
b�N�࠮�����y	Ke{�S��I�r��b���EU1Q�A ��\���8av�?���/�Sx<�s#s *���.�/�njE�ʻx�?"�p,z��s�y�9dfY��I���v����$&��n�r���o���@XcS�D��Y83��p�cZc��0�27�4��^f��;��54��V9'aY�d�gvy��^��	�c����� %T��bB�̽�� �и���e��,b"|�����K]P�W�U�
��4���L_j����ߤ�H�yN�Y�5�U� �CN+J��t��Rו �P3�M��
J��).S�e`��B^�������O����������`������|<�?���8o�\O�'�+�٘�'�jAO����np�}zs9|NU^�\���Cz��ף��
7[��R��������\&��f7�ߍ�.�_L^\�?|q.��.��;Z�l�O�= o� ���/�7Y�*���dO�!�̿���g�	�T��蒞�ۇ{�(uqt�ņ^���m�Fg7�c�7��H��f��71>�=��`�(��b�m�gճ;<[�Z�������Ch�S�ԇ��������8�,uOst��^\���K�����W:���=�OQֻ����W�B}�^F�gz��j��N����.V���M������������p
@@�^=fm��S$5��mʅ��|I���'�[PZ��(��F�	�܁�s���MMd�Cp�)6Wl�M��fٓ��D$K�2n C�?���<���8�C��i�m5�J��M����VsE�Մ�\�
����ffD?2�����;yt����J"0��m��#T���b���b�'����A�� X�N��.^�,�B�fP�:��'Ca�Q�!��O�\��9MݨI�A���!"�7YF�)�����Пh$wD�ZZs�����v�8�gT� ��7�|����D�B�&�*1���Aa&},
ш�i�:4�W���h���EP~~>u("��i��h5��C��Ogm�-�L-@�@MN������D�;��f�FBS��2���,w	�ء/��^ƶm-'n��^�Z�cs��e|�z�	-��C�S2��c����4x[������L����ڭ��b��x�S�|a�-�!תk�	������i��yZ� U�yo�?�u��C��0ȭ�!�_k�)X�ЀnTFH/� ;���'.�27�)H��G{�.Lm���Uzg�cNC��ɯ��ץ��'��^%�;((K�V�"E�l(*�Rm�i�R�"�z��qł1h��}�8�Z�����Z���@��Sq�2R�S�������"��k=U�B��Z��}S0^����=�A�zӛ�ʥ�)H6�"^�f�좵�P�0X��ۀ����������#@ey� x��ڮ6�p4��W�d�	�-_�%!�����5��\;��.��D�������a����ẉN�Oɒ���<�Y<=��ZE}S�3�,*;V�GGx�`�Jh���3�����	�0�]�f�
��ji6�ӗgΊ�b������/Q������%|㸜��_D��D����N�/Q�K:\3Z� ��GoFT5�"�(��f�*'��ۉ��~��r�r���r;�%M�� ��@1�)̃}�o'�a@=~'��0��9&J�F��b����fgP��sӹj�/�D���sq�|JD�V޻�f����sx*�58+�	�@���5��JW2x�������O#�M��+
X��~�;��
�p_M&��pPQ��~<���|I�=!̰��Qig�|��|�̍�!̱��j��P�{|��%��!���������������b2��*���#���'ʫ��Jx�4��Wj�'"^� x��bT����0��M�K��{��Q��	�#l�)79�5������9���Ed�h�Թh�c�����D�}GD�o���m�ڨA6�� ���r�B�RZ>���������Ȁ����Q�c4�0r8s���gZ@(� T���=͝	Q�i�Ҿ�a1lJ8�V�ū��sT�f~ex�y�����Ru���8�4p����)��z�"XX¶��Nd����զ�!�C�R<�6I�ov��ꞅ5_����J�j��<W���%f�c	I$�/:긇z���+��R�3]|���Vf�R��E��ܮ�7vn�+�5����=k=�љA������v�!�����_�������x��x��x�6f���m���6C�?��Se��7���T�F���be���7�YR}(�x�i��'�G�k�wTRLH,}�p�����׵�t���,�i�D��ߘ?LM_�����j�&��WI<��>��a��Q=�9�����D@N����c�R���Vlb��^y��0�� �W;�Q)�h[+w��eS�d\�eџѕ�Z�/Q�S��&��:�J����r�1��MڧsN����cڱ��ꅋn��x{2�ha������1Q�Ҙ��e��F�4|�{^�'����T6l΢�*�n�;0=Z$�Xd�'0C҄՚�����,���v6�j'����E�q�5Nb�yX�ˇ㦲�TZ[���v����y�1���аk�J�t�^_��wS��>�W*�-�ᕰF��c�@�B@��)����E�f����)�yt�kR;m��n�+��y9ȯ'lF�2��(%Vh6���|��~�%�Ȃ�d4V� �:�tP������b0�~��VC~�VM��3f�������tm���C;?�`�$���Lx"=c�j�Ξ���i<�]���ѕ ��0���	#[.��R_Kj�z�&�~�#c�l`�q!_>���gz��#�|(u��2#�h�����@Ʊ����4�Ue��j&Y���C�]�<���ҽTMt�#		������C�X���������5c/*N�|�m,��/Ȩ؎^���$,*hv�˞9F����b�����{���|���L��o�7��l�,:�������,J	'4���L�$g;&:YC��yb���b0'P�P�25N�0��yƟ&�{lfo��C�@.�(|���G���,�)�Wĝ�U�O✽���Ӑ����pi�3���宺��R�g6ޕl�rM��*Eg���!!j�ȣ0aя�)�������#nn{����*ٸ&P�� śC^3�fI6���;�2�y�݊��x+y��?w�l,��j��]�lsH�Zkr~>�!)bo�ړ�����J�nDs� �Z�"��3�.�_э��ͬ>e����J�ng?0r<���g�:���_\�	��9^�~�;�F���X�<��M+hj�W�4���趧{�r4}=�O��W�yO�C���
����u��m�I�)#�wh���M:+��7_\�E�m�\��2u,:~�"�Tۑ�N�J��k���Q����������,������|�s��§��͇����a�@�2r��!9�ūE|�"���.�ԃʴ.i��Q2��lĤ`!n.Zh2\҃pZ�������;:�;k��}6�I��(h?������+zѷ"Y�{z������Vַ��yE<	w~�����-���C�L��y��V����$9d�B�� �M��ho��[Ӻ��[h4}�i>�T�4��2����$�9�x�)���@�!R�$Y\b��t�T�	����h'�r0��(r���J*ٹj,5O����(C"�I��,�v4�Ì��u�h~q��rA�pq�](�
B��Z�! ���z�	@��+�kX՗:!�=���ܗabove code, the following Javascript library files are loaded for use in this
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
						<h3><a href="../api/index.html">API</a></h3>
						<ul class="toc">
							<li><a href="../api/add_row.html">Add rows</a></li>
							<li><a href="../api/multi_filter.html">Individual column filtering (text inputs)</a></li>
							<li><a href="../api/multi_filter_select.html">Individual column filtering (select
							inputs)</a></li>
							<li><a href="../api/highlight.html">Highlighting rows and columns</a></li>
							<li><a href="../api/row_details.html">Child rows (show extra / detailed
							information)</a></li>
							<li><a href="../api/select_row.html">Row selection (multiple rows)</a></li>
							<li><a href="../api/select_single_row.html">Row selection and deletion (single
							row)</a></li>
							<li><a href="../api/form.html">Form inputs</a></li>
							<li><a href="../api/counter_columns.html">Index column</a></li>
							<li><a href="../api/show_hide.html">Show / hide columns dynamically</a></li>
							<li><a href="../api/api_in_init.html">Using API in callbacks</a></li>
							<li><a href="../api/tabs_and_scrolling.html">Scrolling and jQuery UI tabs</a></li>
							<li><a href="../api/regex.html">Filtering API (regular expressions)</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="./index.html">Ajax</a></h3>
						<ul class="toc active">
							<li><a href="./simple.html">Ajax data source (arrays)</a></li>
							<li><a href="./objects.html">Ajax data source (objects)</a></li>
							<li><a href="./deep.html">Nested object data (objects)</a></li>
							<li><a href="./objects_subarrays.html">Nested object data (arrays)</a></li>
							<li><a href="./orthogonal-data.html">Orthogonal data</a></li>
							<li><a href="./null_data_source.html">Generated content for a column</a></li>
							<li class="active"><a href="./custom_data_property.html">Custom data source
							property</a></li>
							<li><a href="./custom_data_flat.html">Flat array data source</a></li>
							<li><a href="./defer_render.html">Deferred rendering for speed</a></li>
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
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/ico" href="http://www.datatables.net/favicon.ico">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">

	<title>DataTables example - Nested object data (objects)</title>
	<link rel="stylesheet" type="text/css" href="../../media/css/jquery.dataTables.css">
	<link rel="stylesheet" type="text/css" href="../resources/syntax/shCore.css">
	<link rel="stylesheet" type="text/css" href="../resources/demo.css">
	<style type="text/css" class="init">

	</style>
	<script type="text/javascript" language="javascript" src="../../media/js/jquery.js"></script>
	<script type="text/javascript" language="javascript" src="../../media/js/jquery.dataTables.js"></script>
	<script type="text/javascript" language="javascript" src="../resources/syntax/shCore.js"></script>
	<script type="text/javascript" language="javascript" src="../resources/demo.js"></script>
	<script type="text/javascript" language="javascript" class="init">

$(document).ready(function() {
	$('#example').dataTable( {
		"processing": true,
		"ajax": "data/objects_deep.txt",
		"columns": [
			{ "data": "name" },
			{ "data": "hr.position" },
			{ "data": "contact.0" },
			{ "data": "contact.1" },
			{ "data": "hr.start_date" },
			{ "data": "hr.salary" }
		]
	} );
} );

	</script>
</head>

<body class="dt-example">
	<div class="container">
		<section>
			<h1>DataTables example <span>Nested object data (objects)</span></h1>

			<div class="info">
				<p>DataTables has the ability to use data from almost data JSON data source through the use of the
				<a href="//datatables.net/reference/option/columns.data"><code class="option" title=
				"DataTables initialisation option">columns.data<span>DT</span></code></a> option. In its simplest case,
				it can be used to read arbitrary object properties, but can also be extended to <em>n</em> levels of
				nested objects / arrays through the use of standard Javascript dotted object notation. Each dot
				(<code>.</code>) in the <a href="//datatables.net/reference/option/columns.data"><code class="option"
				title="DataTables initialisation option">columns.data<span>DT</span></code></a> option represents
				another object level.</p>

				<p>In this example <code>hr.position</code> refers to the <code>position</code> property of the
				<code>hr</code> object in the row's data source object, while <code>contact.0</code> refers to the
				first element of the <code>contact</code> array. Any number of dots can be used to obtain deeply nested
				data.</p>

				<p>The example below shows DataTables reading information for the columns from nested objects and
				arrays, where the structure of the row's data source in this example is:</p>
				<pre>
<code class="multiline">{
	"name": "Tiger Nixon",
	"hr": {
		"position": "System Architect",
		"salary": "$3,120",
		"start_date": "2011/04/25"
	},
	"contact": [
		"Edinburgh",
		"5421"
	]
}
</code>
</pre>
			</div>

			<table id="example" class="display" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Extn.</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>

				<tfoot>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Extn.</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</tfoot>
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
					example:</p><code class="multiline brush: js;">$(document).ready(function() {
	$('#example').dataTable( {
		&quot;processing&quot;: true,
		&quot;ajax&quot;: &quot;data/objects_deep.txt&quot;,
		&quot;columns&quot;: [
			{ &quot;data&quot;: &quot;name&quot; },
			{ &quot;data&quot;: &quot;hr.position&quot; },
			{ &quot;data&quot;: &quot;contact.0&quot; },
			{ &quot;data&quot;: &quot;contact.1&quot; },
			{ &quot;data&quot;: &quot;hr.start_date&quot; },
			{ &quot;data&quot;: &quot;hr.salary&quot; }
		]
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
						<h3><a href="../api/index.html">API</a></h3>
						<ul class="toc">
							<li><a href="../api/add_row.html">Add rows</a></li>
							<li><a href="../api/multi_filter.html">Individual column filtering (text inputs)</a></li>
							<li><a href="../api/multi_filter_select.html">Individual column filtering (select
							inputs)</a></li>
							<li><a href="../api/highlight.html">Highlighting rows and columns</a></li>
							<li><a href="../api/row_details.html">Child rows (show extra / detailed
							information)</a></li>
							<li><a href="../api/select_row.html">Row selection (multiple rows)</a></li>
							<li><a href="../api/select_single_row.html">Row selection and deletion (single
							row)</a></li>
							<li><a href="../api/form.html">Form inputs</a></li>
							<li><a href="../api/counter_columns.html">Index column</a></li>
							<li><a href="../api/show_hide.html">Show / hide columns dynamically</a></li>
							<li><a href="../api/api_in_init.html">Using API in callbacks</a></li>
							<li><a href="../api/tabs_and_scrolling.html">Scrolling and jQuery UI tabs</a></li>
							<li><a href="../api/regex.html">Filtering API (regular expressions)</a></li>
						</ul>
					</div>

					<div class="toc-group">
						<h3><a href="./index.html">Ajax</a></h3>
						<ul class="toc active">
							<li><a href="./simple.html">Ajax data source (arrays)</a></li>
							<li><a href="./objects.html">Ajax data source (objects)</a></li>
							<li class="active"><a href="./deep.html">Nested object data (objects)</a></li>
							<li><a href="./objects_subarrays.html">Nested object data (arrays)</a></li>
							<li><a href="./orthogonal-data.html">Orthogonal data</a></li>
							<li><a href="./null_data_source.html">Generated content for a column</a></li>
							<li><a href="./custom_data_property.html">Custom data source property</a></li>
							<li><a href="./custom_data_flat.html">Flat array data source</a></li>
							<li><a href="./defer_render.html">Deferred rendering for speed</a></li>
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
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                          