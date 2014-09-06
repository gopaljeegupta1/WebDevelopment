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
�k�8D����m	%y�h}H�.���dt젤�]�����x��Q�T��8�y�����(���Bۦ�[Ųg���jy�
��mKżRkm�;�W8���h�H$�C�Y+��/�E�HSI`ĸA0�+��@]��Ň �3<��w��{��1��-�v6���A�o<[��C�;��m~(��,N��+^"��L��|[ϟ?~m7g2p�f���]`�*�E˒�
�d���2�`�G�ͳ
|���Z��r��X7U;O0`�	��8�;S�u��������)�S��Vk�&��}d�|��b- 5�Dc��=����tz&$A���>;$a��[,V�ڼ��>��{�Oe๒	�]N񜆱��s���m�L$(�p,g>�D�,��`ڼ�������_�,�O�8�xcJ��|	a4:(��]f�S?~D��lܥ�>pETN̚�!ڼS�P`}yOoHB�l��Ȱ���G]ǆf�������Y�]\剩����\��~��TK�hDkH=O pѶ��
�!4�n�q}g�����/�,4��N���>Q%|�%���_�d�\��uc�_/�6(����IG�l�죻����3p���d�T.��'tu3��ҷWX�Z�$06h~X/��U��U��đq��]�J:�� �,D�[0Ix2HI�c.�#8��9������v	�G�(G�/���9R���@��
�=���X����D�M>WH��ܥ�9?�q��a�vpck
}s�C�-�X�$IU�LCBC�U{{��S��I�\�j�{ۣ�����|�����HR2Ee�Z'��P3�>�r��B6�/�8��3��� ƒUo4�-�D��f�ؠyS,p�nN��Ů�Ϭ:�P���ĴaM��"e6��w0NkR�9��`[-Uě�U�6^{�y�s�hu��v���SR�ET�@Μ�y�K-�~��.ج�T�!ӱ��_�t cp�w�
z՘K�s7e�y8�=�l�a��v�/���?˸��
�ug�{��t�y��Qi'd�7,���c��KH������������Wjr�Ͻ�cz6���=��<)�?dH���\D�pa>����:q�����"`6��>��#%�C��I?t��h]�7�D�J_GB�k��dVg�ߐ��ں��RJ�;E�\a^T�k�j���D����-sY����p��0{J��K*h
>Aρ@̈�O`z�a���®+�CLD��
2�p�E�b
����j+S�(,��*Թ����s4{�q��Zk�!�ym����&
�5^���y�E΀�8�m����[[�d�y+��)��;:���4������Ղ٫M�	oJ��з�\�����������Q�Rҍ:�����
J"=E&D��r��	
���y:�ԥ7�%*�kC�?��p��4-6��0/uJ�Z���p�H�q��`��?R4x��6;�;[U�V;6h�YYs�F�rf{�/�?*>��_�+ԟ
��kx���_$����4����|y�283cq�@���:�K���:����5�<b�[��.��ܖi'PN ז5pE�%�o�H�3i+��"��=<�����֘�\��\%���S529�I�	�FG���MD)$vI"(��] �oq9�T
��{ �Ŋ>Zم�xi��ł�=��1SJdO^�^�c�!H�
4��� �CUx�e�1����9S����#G[[�6��Wv8xk|<mw�<Ȣ d�s�1Ψ`i�~,�*o\R�h(fM�L���Z�"�ח/j%�(lVM��<Ik���r����U֜�Nw#7��|5ZFs{)�Ui�hI�W5T��S�*�}Oe�_�A#�S�i�)�J��hT��i7�W =M�g�6���&hA��_�$����ef���$'y�:i��;̀_Te�����D�z�Z������h�"7DV�c|�����!w�$�fX���.����ˣ�͐NU���\���e�%t��{TӓS�fz��T�h,��HA
�
%Mjb��
OtX�U��k�S$�ʿ��ڜ;��Ћ�%�������q~�Ȋ�T��
;q*�&k�8�/dJ��M^�������v�0�u,�A�ͯ�&Z��;�)Jgi�qK�����ݖ�;֭ ����D�2\��ұ ���6���9%!!QX#���d������sS��{�C�j25���ዹ�D.���R#ؠ��" U
����f[�rIkP�d�
f~Nj�t�7o'.��#�I�=t�����I�yi��Е�����3֮��q�^x���a��NHG+7�ӕj��|��y]A1;�%;�Z� 0x`�=�d��d1Mz�g,�ܯ��+�H8�>�0�n���^q� ]Z�Hr��~�E݇٥i%g]2���ܵ��	;��72YYcr��+u���(%���Z��p6�=J�RօJ�j��h����/�ŦKƪ��,D4vw]��_k��oӞ���U�嶡�	=�1�����_�˺7q������/�$ }y_N_&�H!�C�*G�6%�K�8�Q%�$�3���Jj�
_C����ye��
��[��a$Y��jw����rᯙ�7�}>������Iq�I�]�vr��ق�`b 4�
�W�u��-��H�{��3j|�D�u4�Dd'SSO0\W�!$�Gx�?�����o�l�_��<Z���Q�:�p>w��se}���aj9�W�?,.���T4�&�q@�S��l���X��ẹ��	�7���"F	�����y��5�]K
L$�G�g�z���Pc�f�2�u�SQ[y�r�+8��3�P�r�=�i�z�~�ak�i�}w�e�����T[ʐk��pQ!�f(�u2tvND�i�@�iX*�/,lBID��-el-j�I��*�VVm�sh�2-)�U��XTW�⢉j�2t�u���L�X����p��͈9�7X�v힘M��π�@@�Gj�e�����^a��m�@��&燃p��:t3 @�P��^����ቹH�5�t�e�ŀ�wh�3�q
�c��|��E�m�#��)|h�ZB�1���Oɜ=��r�B���6#_K��z9�x�9��x�� e��A
�E'�f2�-}x���[����I�9�h��q��	� ,�#������7�	��8�5z)7:6�b�â9�w	�����(�kO���0DF贆7�&a����e/]��sec������T�c¨b���H}�q��Y�����o�
9�a/S���������q�����)�v�z5̐�N�T����Q��١1����w��+��IE����hw�S��W��&A
��ي��^�MfF� G�c��>+�X��g�R�3�U���D�*��-p~k;�
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
�
�nW�5D���:`	�@�~a S�0I
8��#�neɴD��-N)o�0ʨ��p��p�Gy��g��\��-�ųU�/j&��7�&�-�`���ZE�_���{�C�s�}�֐��v�`�E�{q��A�+v��g�^ȮN|���y	d{��-5I�5��k�2y��K%��.̺�|Ռ�l�Mpz��49�����ܢ����1{{xr�û���GQ�yx�r���ݹ��z�k�-�������6�����1!���	������ͷףGf����	��§�^�3Y  ��E5�_�/|��,� `h�"=B�;$xĠ�uL��sm��U��q�Ł˛����(��cI�<)�=�r�_Ұ2N&e�Lx�B�(=��i�xo�Z"~	,h�7

��-��3��-aV.|i&�=�h�=�)F&���%���=1��bN^���Ck�����.L���5�]������
�_gW���V�g�Q�~�«R8h�d�m r�̙ ٘c��{uk�Yy}����"M��:��YCaY�z�k
�MܩQVG���7J�ɨA��u�����ۿ@�� ��*(�M����s��I�!{v�j�d4;� H��t���ba1�B�IҾ�w�`q!����ad��a:f�Gd�\ȕ��Za��9e��͗9}x�*�.�&�P(hW���w�D=?�Ġ0�V�@y�����"�(��J7}�����8��e�V=F�ꆰ����LDN�������1(��Ā�����[{g�z��%[�<*K�Z�f���$�(an��D�H�3�d}E95������{�����~�ј?�u횸w�6F_��EO��(8KQZ���x~�f��6��v
S]B�F�o+��.��<�Ś���O!뉬����]RUa�L�^w�e6����]����uZ$״
j �W\3D{�������:�A�!M"A��,�t��d̢�_��O���sP���Jjuڪ��L0�K��!�k�V�b/��N:^eȕw�L����1Л5�v��/�vlVz�Y�m�-�L�POh�(��S��d��S3ӥH�U�/h�i<.E�ڳ��38
[���m��E��,6 WlF$�(�ȵ���(q)鐆�߬��/+p�o�χS����b�fO�J���ef׷��\��Qfr���`�
��Rs��jλ�&�AX�FL�SP2q\�V�4vڨ�S���T��^6m��BϨ�o:<�l:���t��Av��YM^oK�0����C���o�$@^�21t��&<p�9i�s��)��� |��h�Q���?<
u�
ކ@8�}��])2�=hv5X�<�q�^���'5\�@�����@y�)W��i�Ɋ��J�/"ã��zN o�
L�R�����{����㙡ծ$��m����U����
b��w��!�w22 o� �3���Q�]�#���=� �ڮ��d�}��⡴K�����(Һ¸b�M����N���(��"����I��q^��l�4�"%W׫�GA�Z�1���
�jT!����1���Sb���� �Xxh��|C���~�����2�O~*��hdڜO|U�=�Vka��O}�w�������6/�y)uښIs96�WWKxZ+����#I��@�?E�QG�HJ<�P���@Hy��E�50x��V7�[��@Y�fE�]��<�L�χ��Q���Gf��%/-J�o5�t(�����?C&9?(�H��zM�\0��޶�z��=mc$�g�?G|��z��oW��'�G� ������� � 7li2�6m��8ߖ�c����{�]3�Sv�r�w�Oq�'@���g4����3�l� �P;x�S�њWq�B���k��b3�u(��͸@�_��'�k#,oqT���r�_�S��,�����9��� 2p��v)U�3G# �$&.%��4Š1�Ίm�FEb�Z���*��1�ic��;!�K8���f�����W��|�4��Dxb���j#�>�TQ��)�"�t^��c�yJ&Vq�]��D�����l�+��,Fb�*3��!O�k�?���oi6�G�����L�,X5X4ɨ�<a�]��h�RLV��mYQt���vz�F'�	Mz�r؍�,"pX��y
�l�W�)[i��������#��zER_D�4*�r��Gf�q�L8_�"B�����xF���dJ\�4y������_�J�xLn�8����3�8�4~�������że�?�E� h��-"��2�9AI-��$99�҆�a�j~�P���GE��Ҕ��Ojz�ixx�ǌЀ�3�@���m�#���+�Jl(YE�f^w����
8��(�-%��_l�
h���\ 2��aÖ�=x�rГ�"��~ׇB���7��TݧJVUy�6%��n��X�T]�D�S"����G���{�Z�)xv�؏�'Z��������A�z��L�tď�T�����Y!ic���&���#�'���t� [р�F4R�@�-���V�JR�0�F�	�����}#�v���T��Pno�sE��V^|�q�w�tGdjO��|G��Z�?�D��,,ˏ�
E?���ZPP|Y��=��A�˼�l��J�=��{����W�L!�������
�S��	)��`(�
�GS'�^���vN��֊~����\�Z��l��)r*Onk�>F�N����Ό�Ky��&]�k��z,�$���bct�Ù8
�<��Db�������W�kϗd7V��Hr8�{un�Q`|�@K�x�w�z�.M{ox~�t+�]������#G9���3� ����������1���5J�����אx�2y�����
���rM+��*�-T1R� )a���=VY���"���K��������������\k@x�|۟{�����!��[	9�%�A#1�B �$;_�NW�^�#�T�q���f��zp�#gމFC�����i�ё�Au�
�O�H��<]I(���
���W�s��ѝ������p��b�=����ۿ�!���|�,��P��lS�A`���:5��G�R^��F�W�3�}x�v��ek�رE�n��5�V�z,R����[7E�s�ɬk�u*���ڱ�[�LI��	s�_���j��Ο�]_��)KSx  l�7z�68���H�Y 2+�%[z3i��#�YT��ڈ̦k;l|,��X��D��(L�!���>�u��<d3'+�w#��х��fV ,It�H�Ъ'\
Wb�n�<�>�Hx��RM����iP{8�ubq���{*�/S��J��z����_��ªam�_�l:s
��+����>����KVs��TTW�ִ,l��52�v/  Ѝ)�Mˠ��N=j�a@�!�d5?��WO��wcI�dҪ$\����C�o�U��
��X���;h����G�shW�H?�0�i�p��T��$
���1U(}}�)�aZ�ԬT�� <%0%o�v���]k��L�u�U~�?U3�h[ gT���0��X9����Gp){���FW!�A����/�V�/@���R ��(�Z�o �Y��B��A��-�!\�e��C P�
L� �u���&�5��	'i�c�G7����KV��w��Dg�{I�f�s|�N
-�x�)�q���7��kJ�4��c��
��c�Lt��r[Fl�*�@�ţNr��쵷�*�.��B��V�F��y�R%��?(Qu3����Sk�>>�"u+B�r�
��
k��� �N�1�aW\�����SF%����Zo��T�5���
��vi�NU
"����=V�8@E.7v�yĦ_>i��U�a
���n�يܡ�i����G��r��f>"G��5� c�?P���(ƺ�_d�y=�D)V��f[�Ů��wt����%���\�k<�1�����Xܸ�}�EQ|�c,�*
۾(,����oa�)��)>޵��?JY;�zg��uqI��\A�T�> #XS�snq_0q_�[lل��?ye�%�3;�%�(8�T �p:�z��Ο��6=Wl"������m�~���)�^�|��>��R2�i��9-�ǏU5��c����[K1j��>�0 �y�-��#�3 �bQ_�y�6���� ����K�m0먕�qHt"� ��>:���$j����:�Y�h�����q�;�}>K?�Ͱ������!
�$th}��>iD����eA���]�ӏ!���h�����*��#��� �x�O��}ϐ�Udg����Q��|���ć1	�����d�
u��d���~�M��n��<��q�x,	j�cIR��4\%��� �t���$J�=�D������,����u~�:?�-�:?�k��|�kڂ_�_!����*
*�2��Ō���kg_vE�0b�R@HR�i����+=
�	kF�1���2���ѥ����d 5x����M/ppk˦ЃEu-��%:�p���Xx@�@\4�\P�@�0� ��R⒛�k���>�R��y�4�If��]]�GY$)W(�~5&rW���<AP|!ŝt�
�8�#���*@Ą�eۦv�5����v�,�|�oK-ͷ�"�m�$�<�m�nxa���q�pZwŎ{��}P$��o2:�M&�嘽���Tk5e������gC�g#��}��V�KV�<���Q����.+yb�+�V-�C:��v��C�6�۩꯵��vݻ�tT;���*���#8D�r���ǔ��P]Y__�P�끼1:�SO�|����;l�] _i9�9B?�H�lV�߼�����N*��D�R�ڧo�PK
    iY�@ lt+(  t  3 	 bwsewell-tablecloth-3d8afb6/assets/css/prettify.cssUT ��OuP��� ��+H�V#jS��j�?X��� �n6����u�K�L�af�7��S��!8�J�((�3>���s	n<��p�8�=�ԸޝP��\g鉗:M�֊��𞘇o�`�e�rR�.���	E��~�&͎�5���歭(��~��nn��r@�D��i.�?x#ݽ�j�4���P���4e@�qA��������#��˾D���~�����p���%�bȋA[j����ex㛺����k�~�@t�ei�1JS���'��US5��U_]���f`=��e�P���'o�b~����Z{ֹ_PK
    iY�@4�,y�  +  5 	 bwsewell-tablecloth-3d8afb6/assets/css/tablecloth.cssUT ��O�Y_o�6^>��h�Ɏ�I�>e��ۀ�M�Z�-��(HJ�4�wIQ��dk���;��x���
n�T�$��**0a=!��T�}5�i�����#x:���E��+��v  ��^�ɱ���*h���x�� �ۢD�����w�dZ������ۮ@�Y8N�p��HO�M&g�~w�`�K��F;ɠ��.�<��2�~
��I����<�VxP�0�vc��{�=�5��D���)�5 ?�~
���$�cR��U��OAg+�G�t��R;V�;����GN��z�^,/y��cr0�y��Z<P��n3�����p]�r=�J�bEtГl�3��p�!��̼��g�
5����.��2xL�*¨*v��!eh6M�d�8������i
U�u�$�i�_��F"T��7�_��Di�7�S�dL�����$	��,�`f%�u?I-������Ƣ6�e��`�ߠ4��a��ѼS{����jN�j�j���DP~kf(�mR��8��4�\���P\
;����c�*?Q�wI�����\���G�� �4��t��g��S�e��m��4�
K�p��>� �EA'���I�X$0uJ���2*�m�Q&?"��zy>3Q�|��GN�mX��0�#5����I/�d��)4��
g��u�� r5�[�c� �^{Ĭ����!��"��˼��Z�T+�����П�CX��}�5��ٰw��ԭ���^c�)#�+��`w�rW�2�!��]��@��R��'�]n,l��b�tq�3�����B��f(���*+������  J��G�]w�{��-�g#�^X_mlΫ�\.-���i�7^�H;v�ZJ2nZKY���-4��Ջz��[O���5�v+�]���f�	�-+T�E��sG��N����/H��n6%�X_��d�uKY�|������^��멕�^#}��}��Ҟ>}�1D�R�Z?q*ʓ��L���9�O�<�����\(����;H���j(�e�H�˝��^*�5#�(z%Nm���п��l��j�=�z�\;��(>��z��N��H���x�b��a;�<��r�nU�e�١�7R��t�i�Y�B�0g�\�X�����g�B�3&�`D���y#i���F�k��VK�L�!��֤�&��3�k��:_![[&��@{�����|`��@;"�P�jӏ�4.�P0k25�!���M逺�co����	&�-���L���1x>��y l��_|�4���G���b����=�ج-���G0����802��9�Cڌ�y�ǩ�����/Z�(���W�&Չ�bN�V����j�JN��O�PK
     iY�@            ' 	 bwsewell-tablecloth-3d8afb6/assets/img/UT ��OPK
    iY�@2��5   6   . 	 bwsewell-tablecloth-3d8afb6/assets/img/asc.gifUT ��Os�t��Le`ah``P�5�����OFF  �00���/�~q�����*�� PK
     iY�@ĸI�6   6   4 	 bwsewell-tablecloth-3d8afb6/assets/img/asc_light.gifUT ��OGIF89a  �  ������!�  ,       
    iY�@��15   6   / 	 bwsewell-tablecloth-3d8afb6/assets/img/desc.gifUT ��Os�t��Le`ah``P�5�����OFF  �00���3�\�aNs�QW$#�5 PK
    iY�@@^�5   6   5 	 bwsewell-tablecloth-3d8afb6/assets/img/desc_light.gifUT ��Os�t��Le`ah``�s������0�302�0 H���������
    iY�@2z��^     E 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings-white.pngUT ��O͖�;���?Ȓh�d͚ddK�d-[�Xf�oe��[��U2e_I�e|Ȉ�� ������(�h0�,s�{�����zpι��>��<8�ss3CnNN  �o�Y �o���7��=����߁�3�p�m����L���0��w�;ω��L�a���;��&�"#A�AzpO�yM*�E��'v �)ඞ.<�i���լX��Z����ߋm�}S>��fc��J� (t���0��.x3R8ؖ�(��yո�߷��'���ǿ����n�}�~͘1�QZ&P;���ź,z�R���k 95�ˋd�&�Kq���N3�ԏ��y����d�f�6�/(s/1�`?w�M�|fU/��
GT"?y���-�����I�[Y:f���d�|���ǥ�+��|� |>����I�,�͐$О�PJ��+���V�����#�#��΄��\󹕓Er i�{��"��,xً���;^
��ަ)�`��@�*��������z	5��t}�%$�jHNk�jfu��X���b1����@{Ɋ��"y���������f�)���(��aQ�P\.��H%��dG�e;�-ǯG>΂k�
#���@���n�v�#�g([�
j���7�/�m�7���Eq�g(��� ������x�9 3%[WQ��.�{疭\�^7�-Ta^��15#=�Vt.����T�{i1��h2�I�Ώ�y{7��޸���*�F��Z��wc��%p���W\o~�'I����ݐ禺�V�5�1�0�y��#n���M������["��QW������`�X3�T0�tZ��}/�ƭ�E�2��/�̍	ļ���k�+F����#�_{;%í�o�
V�V_��U�y��4���R����X1
���Wx�A��Ş���i�}�����11~
!��JER7�pWj��wE&ү���;��{����R���3o�*v�RW�y{�s�[��շ�p��1�H��&��Wc~�tTi|ޥ����ׂ��㗀�_�Ђ�n��^�^ʛ���V�+���ܜ��^���V��x�fQʕ�M*���s�u`����W^���asGF�u�K1YP���@s�gߑǫm�G������޷�x\!�<�F�0�V����N�iV~+���7�~��<����@�����o�{��xBau����<�ϝ��eٜ�(Ml���z�Kl@c7�)V[��d)^�#4�I�[Z�MF�v�W��o��eë�^�JN��m'�t8�*�dd{�/��oc�,8��\x�j��N!Ð�M�z����n��+��k��Fn�v��g�xh�*)�$�6�ܟR�!?Td���:gw��?_��\U&9�ou�Շ�ψGg���ʖ�c�e����a!j��]�����ｶ��k�վ�[P���%���-�N��	2��j�-N�=5�
��+���zðz�{�*aY��&��t�v���䤅�]���$X.
���v�q�(d����Ru#�
��9ᵘh*�?��B���J����A;-�6�T7[�y�^7Q& ��L3T3
}4����5;��a�8h~R8��1���8�7,ln�:Gr9"�#���
?b\� ��	��e����0D7�S�w"1���_0~��Y<�5Pm�����X��*�q����Z��/�������^z<������d�o�}l�DQ��Cj��I!��;�'���s�V��@�(dyt�\o���\zO�D&�٥Y�_���G6]Ɠ��Q^
    iY�@��!�`     ? 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings.pngUT ��OŖi8�
�=����(	@���u�xcˋ����	ѩp��S�V�J��+
�j��=<���^"(KYg��$�&k}�--6k�rjm_/��q�.�u(����E�}ɗ�AD�@��0"1631�˒~�L�o�-����?q|�h�z�6�2�;��#j�J`��Y�=�9�@+�
��޶1�`��@I���������F=��|u�-(�fDIk�ln}��h���B1���D[ɲ��e�����#�ͧ���TS�����aY�P]."��%W���:h�G�F>�Bh���v��114�,�XBFߋG�
ɺf�>IU����V����i�? �>�^���2�)�b��K#w��
6B�����[�^�Ś�Q��71�dR���2�"�CZ@wfF�M�����%��e}�$��A�ڃ�ZUNH�.�N�ye�h؃A��8�S��b>2�P�!��q2;��`s`?[	�����%�ݾ�mAl!;a�1����D���C�0�rC˱���jN%S#�AAO�|QB&u*!�0���
6j����7���Fr��+�NK�c���f[=�gYm�Z��_�QK�	wˌnA�wZ�p3�MM����Wn��ŭ5�;��,��?&���G�J��S�=�/�"Fp����S��b1oo��y��:�b��055�ѱ.l��$����⊫M��d)pC 1���L���J��8J����=~�j���a�-�2:�u�hs�1%�ҒT�#���S���^���4�{iv�M���o|���pvT0�U���O���[qr�%�,)쵗S��Z���G&˙��FZ�k����=�5�~�xEX���w֟���j�*��g�:I�鏋4)rl�[�$�/�A�߸)9a�6�b��>_��1P:�{�M�-��8��Nn|�1�D
�A?���f�9}�'��Db����dq��������n3��q$�*Ŵ�4;�d�Wp���3P%���9V�^�]��UdR9�b��,�dm��_YGS��T���g��K">�����!����rS8i�@S5l�!���z�c4fK͗ڇ�=n����*�;��=2�AŷiFN?%Y$��|�&P�Vtd��s��t��/6w�M}�/φcŠ .�3��Sp=��v�9��@ޞ����8�x}hl�dhQ�5���b�hɏǌ��v
ғ���8�������:���=�_�o��bt�� a��P'i����s3QgY�����JF�9/�����i���ŋ9���'��5���Z�H_�k؞[����\��Ğ�yQ�,���$HEŚ,��y�b��>�	���k��+�	�şh�X�ޗjf�7Gy��bT2���M��H��_!_l�M��$M+ἅ_�B��##�ڡ���F���T�M�}�di��\��V�H��p\�Qu��yctH�`��h�\����Zs��Uc��	a������L�����9$/2:b'����ޤ�2Ca`����ȩ��{%�|� s��sj*�������ޮ�>������Bq��p�\be��2�Q���
�-����	������e����Jy��B�x
ω��x��E�96{p�=�If�����i�?c0�Kq�P�O<�v��7x7�V.|���>Ҫ���(����Ц�?
�B��&���Y�k�ۢ�o?-� a����Na�������������Ua���PЋ�N�0
m�����G��E��9�aew�8sPK��E��m��MN�����(�A2��^�YNP��\Y�zu�LX�Bj�*��v.�,��/Kx)��w�}�r��ߢ1o����v3O3x��&í����(�*K�V!�8��kR�6��=z)=j+k���{iX�[3{��Ǣ���ŰN&߅;�SȫT<�SH��p�T[��X��ޯE�2�;*�K�1)0�~+(p@������!������9x����>�򙞡Z���?�ֲTOE��=<�� �|��ܴ[���%���f%}��e�#�!f���=L���1<�%d�s�x�@!bХ�MJ�=�bb�=�� �o�^d=v�ۖ>�l	O��Eyֿ�*#g�4/l.	l��Fq�k�n|��z�����L�3�'�h��
     iY�@            & 	 bwsewell-tablecloth-3d8afb6/assets/js/UT ��OPK
    iY�@j �m�     / 	 bwsewell-tablecloth-3d8afb6/assets/js/.DS_StoreUT ��O�;�0Dg�K4.)�p n`E�	� W���!��RP%�y��V�iO ��_� ��3>����6�!�B�}c�t�vB�2���ts�:vc2]�J7��_�#��L����C�>�+�1�X��W�,��pp���?a5�!~��u���v���K@🅧nl�+�ܺ�OPK
    iY�@���J!  �  2 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.jsUT ��O�=kS#G���_Q`b���w�{،��;ܠY���-���#�Zuk����ˬgfU�0��9؈��zdeee峪z���[�k��EUV�t���y�����x����~�-�U5��ޮn�ʦ���κ�^q�m�n���O��4�T�au=���*�=q{]Ln��հ/v���AK�{m��&�y/�Y_���l*�a&�'i��5-��lZ"&$l���6�� ��b&��[1.*1+3���b��2�}�e�J�c����t�� 1��h(���Y�(�U
�S�0�_�P��FZS��榝Jd���j{�����G�O�� a���x����f��S�l�V�@��v�Qz#��H���U"|3ꏯZ�,�M:�L?��ʻ���ˠ��
�Cv����?:Yn뛽����i�����Ð���h�Z[�~���̂?,�Э��H��H4�qv�D��I��� ����I6pÌ�`-�����l���(�t�5�4E=گ���a��!�>���o�E�l�!�f�@ߠA$�OJ�t�S��IF';��1���ǈm(8�Ǟ,�'���Ȣ!�����N��D��}K��iƆR����F��%uBK���
l)@7u����嶺6}���}�@%�ݵ��{����`��&f�yf�j����2��aa��Vb	�!�I��(�rt�A4�&��#�7�&)%�d��ӑ�̥11�)k�
�ކ�C[S�X
	�Ԧ�d��nq�4�����p�q�����١&�6��px8�P��y!���:nAXGhQ4�s]K����U�G��=;!�;FOB4�����Q�/�Q������5B�O��~
�@q��G[5[��-��6��	��D�h��G���!�b4J'��?<$�!=4��z�J}Q���*����D�W2�6WZ�Z�&�6T@b�����]5�i�ŝT�G$���@�EG�LC�[����*��W$6x����J��`�5]��d���ȼl�?������-�f|[��S��01�~��:�N���h����1z���k�D���K&������1����0�R" ���(�ٯ���������ALSʘ;!��`-'	o���N�5��YG|�}�i��g�uT��+v./�
�̸f���X�%d���'��4k�G'�������-1���X��?|�m�b��u�^|�s(frd��F:�
چ��q֐�a3�՗�B�K6����#7#�uV
37z*ĔI������z��u(�����&C���pI�����uz|�v~���pe7�Z�����nя��;y�\}�8Vr��gok�o�L�η�
x�aSiӛI虙�j�p���l�(�Eo�M���Nc��w�*�pT�L
sh|����Z]�^ĶB��j���0;�0�9�a��ž�ni�x�Ѐ��N��~��+�&͖�o�/�ľ�
�Z�{?�{�ɚ�Sؼҝ�"o��lO� �~V�8�)��w4�p1�Q,iF���X�ɹ�}��~��v�t�w�ٴ[JA��l��&F�f���Hz�5,�x�fK�ՠz&�#;՟�}h�:��>I��NG5�wfO�~܁=��l-�c_H4M��J~��z�A)��,���
��N��:�%��B�l�z�G0�L8�㽩�gR��'n���@��;ϳ���7�Tw�����|��� {Q��|�^_W�d��h\NLl�g��Ė�B��b��%P��iz�У�O!ާ�g��=��vNO�;GgxٌF};j���Y>�+|Fv)<a����0M�۩,9Bg�u��%5
z5��5���cO��N��ٙ*����O{%4ä)(Yi�iX��~"�7�br��7����'&m5#��������k����P�?r�^6�{�\?z�!R�0��<�QP��C����\�Mj���+!��g��l�Jp�}�� ���(�s���`-�C�ʑ��oem��5�Qז �L
z#�U �����y!�vE����$P~S��i�6Za��ÕQ��?�$���5�`"�SC,k
B�N�!����S�w��iJq�>o�H���-�3�ҳ�1�'��.`	I`*�XD�� �
z���P�2�.��Q��>(��P\[��;)�Sf�"�f>	̑�"���c�K�s�R�"u�����R}���D�j��u�;�肶T|K����e�p�jW�in��Ő?Iv���N��qӄ�W?ڍl�[�[$g�����ym*H�I�mg�^%۵�K��]�;(޳�N��ZK�y�J�҂
�'����H�V:�7P�
(8>)P�y�s�R0Ҝ�O��X��;���4��i_���>��H^�]�vޞ��&s8O�%͚���~m��;MY7;6�1����)Ro�e�b&��`��:����	Y�T/�K��,{�̀�}��Р����i����dr�j�ā[�aS����V�9.�@�G��~A�n���'p�2�Q��6�"��$�#�uƯ�H	�=��gbC�ǟ��ם�5�'d���ct���zV_Ov�[Y��B.���So�,Wp��i7__~��niw�+���;��v��6r��4����4�얨�^̊���8�O�@��eK��I>�!�L���A�i߾t��3\�t������PO��'��w����V��d���*���I�u�e��Ӫ7��AX$��#E���W�
��R�K�t���aG�iÞ��t'e�"Ү
�H��]��R��;�' |���b�����~6v'���}K+�֜�W�c����yr7�Ѥ�!��9[�_������
o2�g�%��~Py��Z.��}3D�J�
u��l�����Q����qQ�5�a:�F2?��ZJ� �z�=lu2���O=�I+(�g�ʛ��<`�����<�>�?PK
    iY�@S|W|  �R  6 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.min.jsUT ��O�<�r�ƕ��

vQ����u%
bvg�*�J��z���[
������E��:;Vt��V� �W��X���ނy.H���5�؜U�a%�8M�T�� 9�S���w�A\ �|�:b�$:�{2�QP��йB4M�Q�v5� ��+賦���B�|] ?%��z��n�E���gjpE{I���4�*Oc71�Q�lJ�>��$���{���1�Q�� i�y��`�6!������J��:�}Ι��9��tLҰ��O�4Y J�������3�`L��dɢ�1�f���ݓʋ�UwWy3r� �BdyXP�q��W��-] o����,���} a�\��z���V5Ɂ�l�9H\�sM.}i� :������u N����^.+jkUbn_���R|L�q̷�
f��&@~ߋLx?5�64�SZ}��
�k��D�퀨�-`A��K\���咟���I+]��!Q[�9�N�;��6[C6�"��gO�U|�[��E��P4_��lh�Uq߳����=f��ik+l��Qg�W}� �� ����k���ܖ�_���C^0�j�1ӁҦF٪�r��s	���+�=�L2+?�Ʌ�>�zzJ�/����!� ���2�=l�7�[A�I�=��ȡF���=D(gt ��g�`<d�H�IH�k�\�SQ`��*�K\D�6�onl߰G��n�3��=Ʀ@qEx��`�@�Z|I;��p��#�`�{-�,���T�M�m�8����ß�\��%A1XX:qs;a,;z��+ 
��^�N�5��bBF�kz0�A
A����^k>�^�XT�Y��
Y~��4�sv���Ǵ&M>'�'� �&ڈ���H��*�U���-��ENR,��dL*�9�Ӽ:BOgf��MkOK,G��e�Xe��=�q��Hr�j�VG��)=0��A&�z�ދ
sa��A�~K�!`N5��u\h��h�t\f'Z��Gd�����"�B���>��$�������-H:�4�@�[��l����4>q���f&9�4�n(-���П� ~-͗i+ƹn*�c��{s�%t:�v~�5�ɥ\fŜ���	�?"0��ɂ�#+|2�T�	D��:�P�W���^�n|�7��r�Di�i��JT���3	K�A6�Q�!�A�+؉�N�aٶ��r�*v��ή�K6*X +��]B�����p�_�3JI�l&�Qp���z�d9=WU�����+@���,k=3��ic/���7(���*,C"�4�la��
[F?���T��k�Q3N�
q�X�+̺K�w�wݸ�sC���9\#�Z�1�mgh.@c}�Z�s���S�,nf�s��������d"��P��Ȏ2-^c%�z	D��	Y=A� >8���O�hxa�f� Ȋ���� �7�w0oG��*s㜲��E$�|�_�+
�#�q
KEfEH�{��0µo%�னE0���o<
F��$ԭ(��o&&q��=�a\J��3o�*�	E��\�_O���!��O]m?@��X�ݘ�������2����9�� ��o�Ij�T��;2|'�K��8d�J�`,�rSV�ʵ�@,��C�f�-� �Ȋ�|�ޑ.[Adx�*œp��?������B��Z�*-�Z���J��1���R%%d�&�6d�N���)��[�ޏ}��Йs���uzM�ߓjK����j�]��Vd�T	BY�s�Aaّ >.�k�v�*Z)+��F�(e%���쓎�Kq
u�߹Fo��`�>�7�W�S�@vm+�W�5Z� ��ی�^������?:{X���1�UY�Aw�������Nx4k�����,�-��$�S�e����#_)��@Ą(

�TA�^�xg�w}!���*z�/g�����4E�Ek��p�0��D�3]_B��=�٠k7z�Y�ΒʛZ�y��j��1�y,��fy7B{c*t1+藨�ʺso^u{	H��\�.�@r썹��-�:�&n3FK>̡������w�}��ڟ�M���n7�~ۍ<���?��z��YmI�od��
�! tv���2)�
�:Y�l��-�Pb5�,�c鑝�{���ѷv��8&	Zg@�Xg.ɮ��C���ݭ�����x����1�q
    iY�@�-�o�  wr 9 	 bwsewell-tablecloth-3d8afb6/assets/js/jquery-1.7.2.min.jsUT ��OĽ{�F�6���)D�W�%:ɾ;�`ǎ'��mǞ��Rt~�śIʲ#r?������ A%3��d�".��VW׽.�v�f�u�o>�}���w����=�z�jq�77�Mq9/�|��Ϟ^�/r�Lw�j��*	��Y�ɏ��M���,�&�r�s��V��p�qo����yEƽ,��w�����~��{�x�/w�E���Z�Pk9�;�l�����,��^��>�,��޵׍��s/���u��ޮ�$Py�������r��ǟ�`��6�b�!��U��x��2��{�����v���[�>���.�z�/�_�WN6�"�������&�7�ޗ�n��i^�]t�D��崜gT��I��}��ժ�y���j��3��WO^��;.����J��M��}��ޭ׫͎����4��wݡ�;���n1�4��w�7ט��Ƽ��W[LE�6ܘ�lm fu³��j^i�2�v�^�(?hh�[gMw:X�4z8&�<N�~�Ơ�x�V���Xѣ-`Ͽ�eA��j����q��i�ib�"��y��G�|��\䫻��n�U��{ؒ�5p>(��擁�e~�^����Lf9����L7��j������y��'�F�h44��Sٴ�2|�ۭ���N���?Lh�����L��_��]�9?���}�Jn�Â`��͢�і��
5U%�y�,vS5S�Q6���Z��Z��`���E����vy��9��L��%���C��f��l59�����6��o�h�ۭ�[�盗1`�V��h4�yt˭c�[쿧^p����=�w���9.n��E4�zg^�V-�|�ӮyO��,��u��V�g<̢U����u:�x�h���D}�V�|4��R?W�V�t5V+*չ.�u��K�2Z�������,��;��s�͆��~X��p�X�Ɇ���]�.�
�������D
4���dL{���#�v�R�h:�j^���oԜ�:(�g�A�Μ`�p�<� ��h��"�k�Cŋ�|<�GI�;ݱ`2��:?����v?��<�,�V������3�pɩ
�hmt����4JTu��������g���F�ɏ8دh^����B�+�.9MӔ���,�|wӽ4�U�L�I�3~?���	Z��=����$/G���g�h���v�Ѥ�s���l)�]�5�W���Ʉ��q��o��޻E�!���!{~Ż3�a�0�&D+zЦ����(P�U��ĉ������M>��w)ZZě�\zì��a�|��[wFJv=��_X|����M�'ޤ<���>����|����>��Q�gV��Uɂ�TAԝ�x��c:s�>���+�I���ħ��W���5�s4���6�a	4{V~�͐Lk4lr�\.��7o���&�HA�6m$�I���Ҳj�n�b؉�m��b�\�/�0��m�M��р���qf��n���6.P!��%1G�2�< ʂ�����[�!-\��,Şz�N���X��y���r��{�B9�*�+�ʹ��~����M"��0��&���ڼ�ϛU4���#��Hn�b���f� ,!^'�7/v�,Z�����#p��7E^/�xĬQ����/�@�=�+�r�,�$+g�����y�P�h(��z�<�Tz���'a9��͎�Z�c|h��x~�W�|i��N
�����".�}�L�]��&L��ĕ��Aw�������ZX�����~��gQ�~�w;��d�K��xY�N)w��~�C���Lz�x��|Z{
e@Q�L�� �ȒWD$�#p�pK���h���ɜ���[w��hJ�E����W�������AW=�k�T�f8�=� ����z\�
��z]I߫�~S��Ul�~?P+ �j�vd����
�����:e�
b�N�࠮�����y	Ke{�S��I�r��b���EU1Q�A ��\���8av�?���/�Sx<�s#s *���.�/�njE�ʻx�?"�p,z��s�y�9dfY��I���v����$&��n�r���o���@XcS�D��Y83��p�cZc��0�27�4��^f��;��54��V9'aY�d�gvy��^��	�c����� %T��bB�̽�� �и���e��,b"|�����K]P�W�U�
��4���L_j����ߤ�H�yN�Y�5�U� �CN+J��t��Rו �P3�M��
J��).S�e`��B^�������O����������`������|<�?
7[��R��������\&��f7�ߍ�.�_L^\�?|q.��.��;Z�l�O�= o� ���/�7Y�*���dO�!�̿���g�	�T��蒞�ۇ{�(uqt�ņ^���m�Fg7�c�7��H��f��71>�=��`�(��b�m�gճ;<[�Z�������Ch�S�ԇ��������8�,uOst��^\���K�����W:���=�OQֻ����W�B}�^F�gz��j��N����.V���M����
@@�^=fm��S$5��mʅ��|I���'�[PZ��(��F�	�܁�s�
����ffD?2�����;yt����J"0��m��#T���b���b�'����A�� X�N��.^�,�B�fP�:���'Ca�Q�!��O�\��9MݨI�A���!"�7YF�)�����Пh$wD�ZZs�����v�8�gT� ��7�|����D�B�&�*1���Aa&},
ш�i�:4�W���h���EP~~>u("��i��h5��C��Ogm�-�L-@�@M
��ji6�ӗgΊ�b������/Q������%|㸜��_D��D����N�/Q�K:\3Z� ��GoFT5�"�(��f�*
X��~�;��
�p_M&��pPQ��~<���|I�=!̰��Qig�|��|�̍�!̱��j��P�{|��%��!���������������b2��*���#���'ʫ��Jx�4��Wj�'"^� x��bT����0��M�K��{��Q��	�#l�)79�5������9���Ed
����u��m�I�)#�wh���M:+��7_\�E�m�\��2u,:~�"�Tۑ�N�J��k���Q����������,������|�s��§��͇����a�@�2r��!9�ūE|�"���.�ԃʴ.i��Q2��lĤ`!n.Zh2\҃pZ�������;:�;k��}6�I��(h?������+zѷ"Y�{z������Vַ��yE<	w~�����-���C�L��y��V����$9d�B�� �M��ho��[Ӻ��[h4}�i>�T�4��2����$�9�x�)���@�!R�$Y\
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