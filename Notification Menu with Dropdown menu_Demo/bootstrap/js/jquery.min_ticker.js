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
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                hV¹—ÿe”¦}«0Öy™ğCŞ£TìX‡¦ø»™Ùj­ÖZı¨™*Dñã ƒÃ:q1Gzû Võ‹È¤v÷ìä²§‘ŒTWÙi.›é,øû†CIáşw¶æ¬t4ŠJ6IïMŒ?¨­\Ün	fPŸĞT<(´XhøÌ‘8V}©S”Š?¨a\¹KîUKÓ=dQXko
İkÙ8D¦ËËm	%yåh}H«.íÄıdtì ¤ò]“­ØÛá™xéëQøTñê8•yºÃÀ¢Ù(³ŒİBÛ¦§[Å²gšª®jyØì¼ûˆîÍ”¬G +š—,² à|Å~ Ÿ”‚ëX¨`R&s~¥ÁhØ¼LñÅ\@»–úİ¼µ†¤Ÿ9_˜ bN@¹i3Ë¾dœÇ&wÛÎ=ËF&™,ñÉÇ]jš€?8|±Î$…wD}ƒæ'YÜŞÉjDşpAE'P@ìVˆLeØyÖÛáÇĞ¸vÄ1e°Ø“ıºƒ´š-Ø‡ü²ÈvM­×|=rqóÁAÅlNÂ7/Œ™6ï›=I–ŞnRåœ’Üücò¦ãÅ­²}7÷kñÊ	GASnšáşlÇ’uK		Ä™_—<e)¨iÕzŸD„rû QƒŸN—C—OŒè~Óx’™UU„¬#K·RSô{óòÛéÈî·•øâšç£½÷ö¤¦ ¯©ğM	9ÑùáÓÊ^òL&¶Ë£S,fb„`OCÊø–ĞËt‹gĞ¿`o?KŒõÎ<}hz·}@¦[.%z\ ù®$tEŞnØÏ¾ˆtmûºNØY{!nd¼zèíõóÛ¯QŞÿH‚¬àßpK9» 8^3Ñ	Vw Àä•İÅbêpÆ÷kˆ¤0ÚpQDiÿN÷ TŞ¾àÄSŞNçXS†Ÿ “E¬K-L‘@Ò§Á½š°†÷tî7KZP3hT?|g‹ÉrÄ\ãG‹Ô·ûoF¶ÆÔR£"g×bÉŒ€İYFç‚˜à(}j6!Ÿ¹/tÑı¨d¢‹ùøŠ’p®Œm¬§Iô+]çˆæŒb™€¡àØÜs‘©qìºËÆr]×*]ó¤®dúâ”ÖğäÌ+z;&<a‹Ü ¨™ÓDtÀ I©Í¥ğëD¾]N¯™Y<V¿Æ+MÅƒéñ/Å1d†…æJ…Ğ8¤Ë*Èö ŞPœ#‡"~6<­~œ¥ƒ™.&e"ê<*óĞ=#95ò[÷Fc›Rg¦Ìpif²¯(KlZºt¼îËñïLLÓ£$â˜˜‚£É¥Í©ÙzÎIí‡°Jjê&°¡m!í$‰Êci<S‹„ŞëU‹™fueèÓY\·'QAğÿ28¨ñ×'á¯ó¼õ8:EØpµ% à‚ŠûËÚ_ÀŒÑêİß·øè”Avaä:yêœ×=¨ÖñE)Í”,ˆ—z‘ñXó²ïøÑ
ÅÛmKÅ¼Rkmò;ÚW8ÿÛˆhéH$ÌC€Y+äñ/»EƒHSI`Ä¸A0+Äí@]³öÅ‡ Ã3<ñw“ñ{¸¶1«¸-ıv6ş³¼A¢o<[ÆÍC­;¹Ám~(¸Œ,NÑŞ+^"Ùë¡LÂ†ªê˜|[ÏŸ?~m7g2pİfİ²Ú]`ª*ÇEË’éŠ
ÃdøÅü2ã`®GóÍ³0UXÜ~Î#ºvM3€Æ"
|±š…Zåër …X7U;O0`	Ä8”;SÀuü˜£’¿·)ÑSÜ×Vk&¸İ}dƒ|Óòb- 5ëDcïÑ=ñütz&$Aåòá>;$aóú[,VÄÚ¼½…>ßò{„Oeà¹’	]Nñœ†±¬»sè—âm¢L$(ãp,g>×D·,ø`Ú¼«¾üøòßÕ_õ,î¯OÂ8ŸxcJ®À|	a4:(–„]f¯S?~DÁÈlÜ¥ß>pETNÌšŞ!Ú¼SĞP`}yOoHBlñÅÈ°‘ú‹G]Ç†f¥›ÉÁÍöÔYí]\å‰©­Ïñó\éê~…ªTK™hDkH=O pÑ¶„ª
š!4ön•q}gí‚û‘ÀŸ/ú,4·ÎNÀÀ•>Q%|Ç%½ı…_­dù\ù™uc•_/Œ6(ÿ€çIGç…l»ì£»¯Š³ß3pı d©T.†’'tu3’¬Ò·WX¾Zå$06h~X/¤ÆUôU¶ò¢Ä‘q‹İ]¡J:‚‡ ¼,D•[0Ix2HI­c.Õ#8ëÌ9¸¨®¨áév	òG–(G˜/ƒšº9RÜÎæ@À….,´Ø(`–5—š6÷Ú;ù‡O„ÿÀ'Æ0sJº|#DÓŞ–,.oùíÏ¹dı‘sLƒß—šIÛóDeC·03`1l#{0í™?V38e×D"’édcEı¯Å‘œş9ƒHÀiLËÆ¡zŠüšk°˜H¨¤gBê“ÑzÍ‘úmà—® öHµNÁdw&ç8·¸D	·/PR@]1	šŠL û› QA÷‘5— ¥QH|ĞøÂš;J'à¹ş¹b¡2#ÔŠñtÒpä,kèæKdr»Ó6>ÄUK¤Kãp°qt‚É|È¿B=n.\ô$»\µG*âÕ³håéÔj=øæÃœ¬ëÉm¾K§,Ì•HÓ4ì´a]œªùo9æ°)UL0Pê–¬¤3?šR)í¾zä`+zİd@DıZğõÚ¢lıºØ9ÕäcLOI“³y¯¢£³!!Á·eJ¢ŞÎ÷fÏww…òö<Ü@¸<yçâ—Pã¸Öœˆ?÷É½{f]zËûö»ïZ‚A ÑSÈ½ƒSxÅ#¤ç-Cb{ƒQÁÈ­C£z©“˜¦ÓùœÀÓÄàÏÌ³ŸSªIP7+:%ª4*jÅÚ¥ZÕ»Ô.U1µx#sWëËô÷Ÿ÷Ÿ¬¿/ªïôô†cï]EƒTÏ€MaˆĞ)'äš¡lC¢“›÷…tñ®!ã¨/[„BêÌ=‰&ZÓÜ€%QæÒrU}—@Êæù¥òÅ§?Å$¿¸¨°º‹¯
œ=ÊÇâX”À‡ÜDşM>WHè²«Ü¥ƒ9?ÑqÒÕavpck
}sœC†-¬X°$IUÀLCBCÂU{{›SÚIœ\™jõ{Û£ù€æÀ|ÔÌÓİäHR2EeZ'½òP3½>ºrê·B6‡/á8‡ß3†ŸÖ Æ’Uo4Î-ÈDĞûf¶Ø yS,p‹nNÁ–Å®ì´Ï¬:ŠPß¸ªÄ´aM—ë£"e6ã´éw0NkR—9áô`[-UÄ›ÃUõ6^{Èy½s®hu°ÎvÍÒ÷SR¡ETÀ@ÎœyK-·~Àñ¶.Ø¬°T£!Ó±­Ç_Ñt cpğwççÍ]§øhèpšâá!$.ª=5GK|µgƒ™¥UtæÉĞŠwšÔŠAĞ6Û…Luèmå"wğ>×ÿçYšÇÿ pZzÓ²u”¢ ájg€áO å„ƒo ·Ğy×‘ÄÙŠÃµï]st…&úiTfó…–`ÏŞ@¬Şö‚ÌltèØgô²¾î!É!Ô1qkÍÆ|¶»‰âÎüEƒCvi_Âo?†6\¤ÅùY£»T¶Š$–ˆĞ²7>ËèŒAa\M”†0ñ6K#Ú¥°ãG£	¸™ø²¢V¶ŠFü>ÕŸÆLv)v×Œ_2ŸI­-yˆV»çÌ1búĞõİ#©BhÅfQnˆ½µónl¢G(•,Ğ‘iÅÀ²º–€°İZAW¸: ¥óLåÒùñÃ¹	Ø),Ñ7ÌÇê¡/öÉ Î^£á™ÇL½j–J^°^~EŞf¼"H,V3jâê³^‘^}Ìi•=Xø/Wô—f¨˜Àğ¶$™«%ñíIåcxÀÜo6]ã$£."µ$ÏBêNÂÀNÚ‘¢›AYãÔÜÎ¡ìvÜug¥­ÙšGnÎTŸßjrô–Š¯¦Û›œF»0~T„ÿ‰î_E/@R­Ài'wmÇ!şfyÿ Ø
zÕ˜Kéµs7eÈy8ƒ=Ïl±aËìv¡/§ó˜×?Ë¸ää¬ÅÇ†xÛ_+™B‹_©D/UÉàô?É®2Tô?š¹_­»ÒD „·÷O–™JÉ|¤°DÌŸC¿¹ÃñSbm¥è¥úWƒîº\€é0±¸“»•ræ 6ªÍŸTƒ¶•h8¶‚YİxØ–˜Ï~{èz‡Ê(ızs´ıº”¥îıH-)ÓÏ9WÛ<¦ÿöZş;&£;í·V'ŒXm$6ç¯T©Ş”QàÃ!
Õug‘{ªèt£yÇïQi'd¡7,ùªc©”KHêÿ˜óãÕğı£¦˜ÌWjr¢Ï½©cz6Œ»é=ëÓ<)„?dH–©ã\DÃpa>¢Óş¼:q“«¬"`6ÈÑ>¬Ì#%öC«¿I?tÀh]¸7ÊDÃJ_GBk©ádVgÁßóëÚºà®RJÜ;E¦\a^Tk¶jø¾ÑD˜—ñô-sYşó‚ùpã’0{JßñK*h
>AÏ@ÌˆŞO`z“aœ°´Â®+ÈCLD±Ä
2ºpâE§b°S'ÿÌË×¾»õUÀ]Õóû¢:ÄSM^ÒÿmÈ¯äZH€§ÂÜÇJœe
´·ÜÄj+Sÿ(,‘æ*Ô¹Œ‡¤Ûs4{üqµÛZkÊ!±ym·Äë¸é&¹eCš¤._4·ü!CĞòØ(dú×4²V´ÏSD«’dLú\¡¬%Bt@YÖ1Óá¬©¬ztú"ÇqÃoÎn±ñwÛÚÚİTºJ&£J‰ŞACÒúCÃZ¬@­OÕtê(Ü+øs‚x¨j}:l~®É^/èÜÜl'cjèèSXˆÂ­‚SôìoXÊx×/ŠˆP¹ãÛZÿİ­ã—İFüéWˆ¶õ~»È?•2Ü^“ˆ`úázPÌyïs€d‹Å~ëC£Û‡
ü5^œ£¼yßEÎ€ã˜8‹m¶ Òë[[ádÒy+¹•)…Î;:„¶Ó4ƒ¦‰šÓèÕ‚Ù«M¯	oJÑÛĞ·‹\ßœ­ú”‘ş„Æñ§ÅQ€RÒ:£öÿ[ŸÉDób³ì;ëì1ãh‰k—¢62ùÀ„’d~	& [Òô}¶Ä‚¨”Ğá¨É"Q‚‡ÀA:aÁ†åÃ ıLåõ·(ŠsÄğì·°¾ÁØ=ã5>ÁÉƒF<°ÈÁÉãA¯™`c€m•xSév¯OG*ñ†m@Ş9òÌvÄ:î¹<FléŸæôÃu‰NÏ,qIP»‚Hÿæj»2ßn˜|5Hiº¥y—¨7~†`7Ó•{Ğ­è“—9ñwNyU$±ä¾Ìèûó,à†XèI–ßİ.ŞnæWtò]4Ş—éUÃÑ¥z$µÕ1_s®>›¤{®µ,zïF9.LZã‘ëiEÉD°Œ9ì>vèo…¾¬¬™
J"=E&D¢àr¬	
Á”Ôy:âÔ¥7©%*òkCÂ?Çp×ù4-6ÆÓ0/uJëZ®¼ËpœH¾qè—à`Œ‘?R4x´¥îš¦6;;[UĞV;6hãYYsËFórf{ˆ/İ?*>–ü_ñ+ÔŸ
§¦kx†ıÂ_$ÔÌÌ€4¸Ñïì|yä283cqÕ@¢¦»:ŠKÍİÛ:¡é®Ë5Ú<bö[õ¡.äÜÜ–i'PN ×–5pE¶%ñoÈH÷3i+ïå°"å°Ú=<‰’†·Ö˜\¨¥\%Ú÷îS529I¼	ÓFG¾†ãMD)$vI"(¤·] «oq9áT… ·ê3üÏ¹\<(zV`õÓ?d *N.ÂbP´2Nª bvxíLÏÇå´.C_v’5G¯igt^¾êF_…ÜwàÍÀl($Eø"…Çâ–RŒ’<‚¶R^i•MŞWR<şÅdFiàeè ë[Ú'F
’æ{ –ÅŠ>ZÙ…¯xi™‰Å‚÷=ÔĞ1SJdO^Ç^¡c©!HËk®ıëì/ÿ‘›İ…~’Œá}ía}Ş¼XR±d¹/ŠÛFâNaï¢,è\*‚…wÇÏÂ¥Í²H•½à2“×¬Ç„iËŠçÒ#Ôó¹÷qü÷håÓ.º.l¯ELVÔ2‚"ÆøûäM'¤äŠÂeQ×  (Í3@2°YÁĞd•uœq/{­tØ¾ş¾ü%SòıZ¥]8hø0D&V*•‘LA i¾ÿ‘ÕjP¥±A(oØ°1¬&½]ş˜ÖşÎŠ&Â&7W’V}–‹ ‹¡v«SG›ÔfB^Ñt_àí{‘ó„©+ó¤º¾—ÿmA‘Ö-ÇÓì}pY>#ôìôf[Zqc#~ô’:ŠO†E+áŠëÿ¹hü|{nm}–ù}Íßµ"Ï}·€‹
4¡“û ´CUxàe®1úŠâ«ß9SÈÆËË#G[[®6‹Wv8xk|<mwÖ<È¢ dòsõ1Î¨`i~,è*o\R¡h(fMÅLşçËZå"¢×—/j%­(lVM÷Œ<Ikö×Ìr‹ºšãUÖœÍNw#7¡„|5ZFs{)«UiÁhI¶W5TªâSè*‡}Oeó_™A#äS´i•)¾J¬ÅhT×Öi7 W =MÓg6îÕÆ&hAïù_Ä$¨¤ş³efÿÓâ$'yè:iÆñ;Í€_Te È–¢ÀDızàZğºõ—èÔhÔ"7DVøc|†ƒæÉ!wÅ$®fX¥.°¨‰ßË£“ÍNUÄèÈ\¦¡Òe%tÊÉ{TÓ“SÍfzúèT„h,ßÕHA
Ã
%MjbÉÂ
OtXúU´ïkî•S$™Ê¿¥Úœ;¢°Ğ‹„%Å»©¡ƒÉÊq~”ÈŠóTÿØ
;q*’&kª8¬/dJ¬‚M^ĞÆóŸ‹–öv¾0–u,±AÚÍ¯ó&Z”ô;Ö)Jgi—qK€Š‚¯Ôİ–€;Ö­ …ÂÅD¹2\òä•Ò± Çü’6¦£ğ9%!!QX#Ôãádœ¯Œ˜®ñsSı{˜CĞj25Œäãá‹¹D.—ˆäR#Ø „Â" U
ŒªÀÂf[ã¯rIkPÍd®
f~Nj§tË7o'.ï¿Á#¿I‘=tÓÁ´¢óIñ®yiÜÀĞ•¸¸Óëä3Ö®’qó^xáÕóa£êNHG+7ŸÓ•j™ü|òìªy]A1;‹%;èZ  0x`ö=±dıÀd1Mzåg,¥Ü¯ô+H8Ğ>µ0 nŸ•Ø^q» ]Z£HrÕõ~™Eİ‡Ù¥i%g]2ØçÁÜµ¼ô	;éü72YYcrø§+uû‹(%ßõöZ‰p6=JîRÖ…JŸjñŒÇh®‘èç/êÅ¦KÆªÓâ,D4vw]Òü_kÆÊoÓ™İÒU×å¶¡æ‘	=Ù1ÓÚéßë_¶Ëº7q·¥½“¨Ú/¬$ }y_N_&‰H!éCà *G…6%İK¡8ıQ%Å$é3¯ü¯Jjä
_C‰§æye¥¹
‰ğ[ÓÀa$Y¹ëjw¿Ò×Ôrá¯™©7Û}>óŒú¢¹ÅIqùI¤]ÁvrˆÙ‚µ`b 4Ö
ÙWæuˆ´-°şH¢{†æ3j|èDå•u4÷Dd'SSO0\W‹!$©Gxó?Ãÿı¸‘o×lÀ_¿¯<Z®ÓèQ™:¶p>w¾ãse}ª÷îaj9ñº²Wö?,.¿èÏT4Í&Ûq@ÜSüë¸lÄàÊXÍËeÌ£íè	Ì7æõ£"F	¨ÃäËóy—ú5Ø]KµÜ|]ƒ÷óÀÕeóoè
L$âG‘gÁz¤­ŠPc¦fù2àu¿SQ[y¹r‡+8ªƒ3ƒPşr‡=Şi”z´~›akÑiò}w„e£úº¿ÏT[ÊkÁâpQ!°f(¦u2tvNDÜiÈ@øiX*ë/,lBIDîı-el-j²I³†*¹VVm¸shì2-)•UŒˆXTW²â¢‰j÷2t»uúüÛLÅX¶§¯®p±áÍˆ9Ó7X‘ví˜Mµ¸Ï€Œ@@›Gj„e–†ôí´^aı‡m@÷«&ç‡ƒpûë:t3 @ÊPÒó^´å¨á‰¹HŒ5²t†e×Å€›whÍ3¹qjŒºˆ'ÚÉø êL° ß3Û[˜ã˜~*êKÄp’.«¸~ôdhŸú!¾X¢gæK–•ó™øÀÔ"›ÃsP¢jWf»ršËÿ]Ç Sm÷ÿfy]²63€f*¦½-àd=0¡šÄ~¢ş¢)z_Ò‚ı™ã2DZ¤£?ÀÕ?šTQÙÇO„ö³ª2dx}R¹3´d¿£s½÷«¹§Xã ®EáÈ>55şîDù½ÃĞHd÷J4
­cõÉ|ŠE’mÑ#ôò•)|h¼ZB¾1òÜ”OÉœ=†ÕrÌB®”’6#_K×Şz9Áx9‡Èx‚ó eÍ›A
áE'¸f2Ù-}x˜ Æ[ÇëõõI—9h¦qºÎ	¾ ,Á#“šš«‡ì7š	˜¡8­5z)7:6ˆbèÃ¢9ûw	ØÇœËÜ(ãkOË†0DFè´†7‘&aı×³óe/]¢Ïsec¤Ùí»õãT£cÂ¨b°®ïH}ä·qüšYÓûØÏÜo—
9×a/SÔ‡Îı±€®¾İqùØãûœ)öv½z5ÌÙNÈT—ßßäQ†ØÙ¡1Åñ¦Åwîù+»ç®IE“—Ñhwô†S„şWôï&A º|zÉ„À«AÜSä7AÍÁræ²Èhì¨GğöºñõÒğ[X|IZÎ$G…t+ï'&8ç£„} :í#:)B¬XSa %ÂÅ"˜Ó=Móoe+úòˆr–~Fß™-˜¿8i”ôáJmMV¯E×S—Ia‡](ˆğ†C©÷UM
òÆÙŠáå^îMfFÖ GãŠcáü>+ˆX­“gÛR¨3‘U¶’ğDÍ*²¨-p~k;¤Ö=if•¹-_Ù€#@eF^8ƒªT4ôˆ:ry/ö`têB¥æıà`¤%û°ü¤yïê$Ë¨©ÜsQ2$Àw._è›O1¶ˆ­ú´t0i®[41Î}š=W«şÂ¶vŸ Şò¡6×šttë¢1Şj´30ıRÒ¤áNÛúË†~„v[kñ³¤C—sdÏYÑ4K´ße4¢¡ä‚ã³¸ *¢Up°th·`H]‡Fô¸I.†RófïL?nZ…NS\:ª†F+™µˆ*EÊş/@9X\Ğk iğtšé'    ·Ğz§›—Ç8‚‡ÒôŞµ‡D”åDEè<’(†àKSO¯òK+âdJd'ÔÖe¤Åß(tûF‡²…[os„[,ØİˆÈdÄ5çà"õQE)¤‘½4<iVs*˜/<Åq»˜oQ„$£4Wİ\Æ‡å”è'û ÙòZ ËÊÌTl´ğc›ö¦-¾XOÍLÛ;¿KË&÷Z`U5­ıâû	qYÛ·ªÅúNÉÉô]Í×*oc$ 
*„*—BÒÙ=Á¾UK.ûlû€¶4rê÷ë¨ŞD=B‚^Yò°J
”7ÌŠ,
šjèj‘4ØÒÃX=YÁ|ã\®oOR-/k
:â´ÏëüÒÊ)(QÆñ¤E®ü?Š_1xcû[òXÕ1•‡Õ^¯ÎVú~qü´#A™Âå‘‘œ¹Ÿ¾/Üèogcú[:xó@‰Ì|Ågâ"Ö¸ø/}îî®JÒïşü\˜XÙ²eÅkè=ÿ'?9³ûĞ÷'¹¿–˜H¼fÒÿ,1Açõz<Pá3B
lÍ6²Ú¦×{¹i¤PRÊ¾•6ôå«åÊ8¹1â‰ƒ|6Ü^yË,Ìñ5ÏõËâÛÿ„&nzï˜ğ6ok¼ 3…©®lÎFS´¶¿º"‹,Ôgäğy©ı| Ñª¢›çÔ]ûi *z®–”nW¾ˆ)óV–“–vš¦äó‡ÆÜÅ“éE8êÀ:ß?®{j½µÑş{ñNËlÛş»¬q¯î{xW+û»–I^U§]7hé1Twîté³½ ƒÉ6 5qØ3LMíZ^¥ò>¹] ƒP:Õh¤<ckî!†şJúIêNËC‹rÃ‘/º£‘OÄ››'‰¤B$‹@M–@ÂâX¬+<Jùr³ğ Xù-GÄZĞ,¨Ö¬1zf×ˆ„9äŒWñ´_s 4>M(‘¶S“X“~ŞT†É)‹YÓ£DÏõØ… ìy9SWìÙf·rÏ–¡-İ¥#.öx’…Ytn1¯«¸¬âR]ZÕRî¾êx.Õÿ/@£1å'—Œô</óÅĞƒ Õ›GE ¨*£”Bj‹JÂ©/ì­Š–—˜Àq;ùG…=’¸ íc“Õ²r:jUôßì@4G[şı©47‰‡¨‚qcmø¸W»’¸õØ¼¬7*‹³÷´ò]’Œ—ÒHØíÃ0ä`gûePñ<ê·’Ñi·.uÔDõu{ÂbU„ƒ6;‡{Ş·5Tc2ñAglş:·&×Áä‚óy§|[âüüìª9ÕêRÇc)IÖêŒ’U9ŠSj Z¸²íL¾Še<ä -Y±”øá°¾XE{
6%ßòXÃd ·\Á)‡n³~®EÕw‰./ããÕ†¢1JÃºF.D¸†(½ş€’ëç>ósİ÷XAşj¸‚Ù Î¡€<@JÛ3=Ñˆ[j>jÇ?T-É
ú]·í~•çdÙSt”R¤•=l©VtÛ¥Ê´V´¤b>ú=ßÑû1¿i¦9Ã¡è˜mäöäÑÃ…¥…wqç	İñ@Hò?k=ÿÒOş ,øKú±:ÿÆt¶ @Ü:ÎèD¤…	0³Ìeú„R²É Î¨°€­ß'QLkß@Ïb£•ÏŒÃ¶ÕUÑT¬†4*ÄÎñH¬H¥$Û=Ââä¾?×	»¿ñvû1ÿ¶¾™Õ¸Ó¸ˆôèğŠôĞ'˜:@öIKŠ_QĞƒe…{ÖVø¤ğ¬9°Z$S?ÈÏµlBÂŒ©8èæßË2›˜­’Új*²Ñ'a7ü•]J|2¸“\dÂZÊ¾eò›à y;ÅW‚¬Z­ç~ÖªL£cİŸşÀ|*Ë¬ùë4ìÄ dŠìßI­SƒL• Å5]—f…ªPÊAw¿2î¼?h°VOûÎ×Ù²*ÿŠàÊ‹¬A'®5ÄŠ]Ãrx'ÇĞ÷Š:¤M)DÍ#«„$’LQÄqMEB;«-)0cO‚ŸÏsj*â¡Ùˆ‚›ÅXê?F-RÍ³¥˜­cYÍI ªs7¶ìBö˜É’ÉÏü}êœ½r®…F¨Nóté^Z˜ëQgò”XcM•-ËüX±<Óx¸˜¨øIH!ıÃâ\û™¦+ú^ÌŠ&èZ  Ú.„ çN‰6q½ÒÏ¬íŸjèıÔXğ¾e8àXUªREá¢Ÿ¸8‘–üİë(¡{Ò¼ŒÉs{«N¼a É0îwLğKs‹aóı¨j‘°Ã¸”²ÙÒF¸´é´ßé¢DcØÇBçƒêêWmN‹Ä–ğ±FR”FÕâ6çÄ#¤<<)déy*Ì“
h¼ïË¨ÏÂ•,+ğùÀI´*(W´Xzª˜Ç«¾ki›«5-x‹†-62@.l¶’wp
™NÒÔ$'dÀt”{ ıQøhĞıwĞ‘ƒ´äÚè•‹\»IœûâV[Û—ØÑ·m¡$yèùd=C ÙËCÏzö±aÏn×)»×¸¤z¼m"œ~§¶Æ´3ÓQ¡½›BlyÙÆgÙwtÂéá·r1£Ì8Ã¶¦‹Uò$QG‹]¼¸§ßUyJ›Gl¢Rë&0Êğk4¿—òY;øÔÃê]lúxvxo4ñpù¤Åtegş5‹û/‹ËÇ€®_3şaqã°fÀÁ”\P ÷\±‘éº÷Ö†B$\¬»N$ ¯„]èv¤Æˆ|. çÌF›“Ò“ŠÆÄ…ÅQ£HBå¡FPíÛ™	Ò”Ÿ	ÿŒM’Ø74|‡«Æó4	ÒÿÖûÂÙø-¬©2ç‹W4ÜØÅ}Nõ÷¿š¬—Î{õªïşË´ ¬Xd \ +z­5Ne›tˆè3ì”e‘{7å\P¹^aYŞƒØª\icÊÄâQÇQ“ÑÈmšXúıÎB§´ÉİİiváN5 ¡tˆÒ`Ÿ8š^D¢Ç_ÓUà—øÂWşì…¦P¶È¬Î
§˜îra¼!ÿTo¹)¯*ZÀš<Ş)T—“Q–x)L7ÂˆNÓKfùK³!­ÑË=í5ìÊe×œ¤œ|‡_¹—Ü7"vçERB>=õ
S2ü¥ÂŠ_µ­:•5‚b1EOû°6Ec!“ìñ(R¤‚±ĞŠYõ%rÆeÿ‚?fPk¢ˆqF·qMgµéã´‚©
º‹Ê’;ş?
®nWÃ5Dçéé:`	@š~a Sµ0I=:DÁÙ¹µ÷Ñ	=Œ†D÷¬´Ÿ2ñ¡CvèBy—è‚$ëÀwó hö8.ñ‹&EbÆèv‚1u±l(n¶äé¿!pŸãÇ‡ŸØ½­6Ç”°$¾‰ˆä°†‚.Bôaıù¿3ù¸ğ	£ƒBäK½g.ø
8†˜#´neÉ´Dâñ´-N)o¬0Ê¨‘ópâópGy–Òg£\¦ñ-ÎÅ³U‹/j&§Ñ7Ç&‹-í`™²ZEä_¡÷ó{ŸCüs}ñ°ÖÉÀvÌ`ƒEß{qø²A©+v¸ãgô^È®N|İ‰Åy	d{ÊÇ-5Iÿ5„k»2yŞÏK%üÉ.Ìº€|ÕŒÁl¨Mpz’¨49ÇµéæİÜ¢²¹Ûğ1{{xr¸Ã»Á¡åGQúyxÜrõ°·İ¹ı½z½kù-ã×éîüÿÆ6ª÷ôî¨î1!æïî	ùãïîíËÍ·×£GfÙÍú¸	‹ëÂ§©^ÿ3Y  ÌÆE5÷_Ø/|§ ,¿ `h"=Bè;$xÄ ’uLí¦sm¬úU•ôq½ÅË›ŠÆö(£äcI”<)‹=Árå_Ò°2N&e·Lx¢Bü(=øìi¿xoZ"~	,hÙ7fZ^'tvÛŸÕp'\ î¼ÙqÃU‰×zØ¿òÙıB¢hqKFñ‡8ÌıĞq¹ªú®o³ÊŠ4@

ÀÃ-’¯3Üí-aV.|i&ı=ıh“=)F&üüÜ%ªŒÌ=1ƒbN^˜£‡Ckş¶¡¾†.L­±Ì5¾]„½ôÄü+˜_gW§½ıVìgßQß~ªÂ«R8hå…d‡m rÌ™ Ù˜cŠ…{ukYy}ïç÷²"M„´:ŞùYCaY¢z—k3:ßé-¹„w­ªN-T4±¾IÛsZ}B××O¯ñø"U3Îb11	šœZÑ-kˆ¥æÀ×uŸí?Ÿ,Ñî¹1ŒœKC0óó¨ò¯Ğ©ù£ùñq»ÊZBÿ½,ô_ñÖ_KÌÑ<6Şa_T8â°æjMà+O$Ø´û€‘JÔ	0bNÌXş^ä'¬GÕ š¯ûŸT\½^Hù]:çmBbc¦vdÆt/_sœ ÿURÓôcÔğê2Ã èY×ØIËåDÛoå×¯ËÜ61YÍÔ©UÊW|â[kIOïŸ8ÏQqiS×ºÉ¯ãŞ¯9ÍbuU}ëóo?Jà¼µX?æwË¿¿7¿?Su‡<7İŸeW¥Ç½ëÍ¯P^äóI³Z)ÆCAç‘c’-úIùõØOÈ96›ĞV[Œ!˜Ìw_$ÈúÃ¬ÑÀ‚ÿCZƒL›ÔÃØqœÄ¹k #Ø‡–:‰q´5Úe-‚¤v ‚t$€0¶Øn,ïÏI(âïú‹XÕÄŒ¹iDW°Ù+3ZöìRsO«õ}Æéà~yòpÒšu”ßY!’8<U¼dÑL?Â~<‡A‡{ÆÔtfÓÉy…2ÀK"fšxiW4fİmpxa™ı¥å!ûäcoÁŞê.mâ"şˆı+à:e¢7´Gü—~Ò
œMÜ©QVGŸíé7JşÉ¨Aßßu½óôÍÛ¿@üú  îº*(æ°M£¶şsæäI !{vÆj¤d4;¯ Hüİtíù®ba1ÇBã³IÒ¾wÎ`q!àä­˜adàa:f¯Gdµ\È•´éZa»ã9eäêÍ—9}x¹*Æ.À&›P(hWˆ„ŠwÅD=?ÊÄ 0õVí@y•¤ş¬ñ"Ğ(ú©J7}òÆù¸í8Æüe‘V=Fßê†°û®LDNƒ½ã«´Œÿ±1(ªï¢Ä€ „ğ¢ÂÏ[{gìzØÃ%[Ê<*K¢Zªf™ÍÑ$ş(an¼œDòH€3ùd}E95‚Š¦“Å{ñö–½ˆ~˜Ñ˜?å…uíš¸wÏ6F_EO¨˜(8KQZÁ¢ôx~¨fàÛ6ƒòv
S]BüFƒo+»·.Á˜<¾Åšù˜ O!ë‰¬±ïÍÌ]RUaçL^wÛe6“òí]„øÛuZ$×´Oı`hkJøk*{Î„Às7×ù7?ˆ(‚Şt>_?5İÒ¿×Œhe†ƒ¼µEŒƒ«4OÅBß^U€
j W\3D{ØÀÎë–ÙÊÀ:µAÍ!M"Aåí,ÂtôÂdÌ¢©_¥±OˆœsP’ş JjuÚª·ÇL0«K—Ê!ÎkåVb/áìN:^eÈ•w×Lë¢ÁŠ1Ğ›5ğv¡à/¯vlVzóY¤m…-çLƒPOh¨(ÖÔSÜæd¥µS3Ó¥HÌU¥/hî·i<.EçÚ³Øğ38Vá	™32ª-Pà#ˆmâÚ—şÚz,(†»ó¢põ=››¸2ô“náğ€¢]èà?-ùdz¬ÑÃôü¬ktßŒ¹kîØÉ–?K5îí˜•V(\jòª°<q6yĞNlı­~&×I¨}’ñ>Kó¦ ­(ŠÑÀKÀõ•&+’>Z‚M!•{oKÅÔe®(ƒ~¤ ¯fƒÑğ‹5¦ZÔ2•Í·g“a:•Úá¯‰ôå:¥§ó5sÿÙüıÇânL  Ë«ïÿ¡ºŠ‡ËË,—{öPÏ˜±d$… ÔÊZ–b€ğbæk«ô¨”#U¦‚åI¤º¢qbd§gcÎ¤×şA?jA#i{mTÔµ>Ş^Íç»5-$\¥«–;EÃò‰İÃœ8ÂŞTD¯ç$™NF %xt‚ãîˆ)"G78­~öc×Ä÷E2±æ{-ù%¯ã-zİê1òV<%%¼öõƒ†fo:¨g§n}ÛÛ>·Uü«\gåÛÑÏºë“¹Y*¿z~jô$Ë#Ÿvü@İ@3÷¨PBèë³©Öe”€ôîEïy¬Ëƒõİ«Òñ_[z[êeä›”†«ƒnõ;cœW°Ûïæ=·Á»x0û$z×BïN€à³†;ÛMoÌ¯#f>Ûkü”¯+š¼kB×R|7L!v-3˜"hàø˜zçèH£­y¸cÛ¶Õ±mÛ˜xb[ÛN&¶“‰m;ÛÉLlMğ›Ì½÷ı¾^ı¬õ¬ş·zŸ³Oí:U)£s‡ÉQÛF‡{z„ê§Ô'‘µÊÁ×õåÏ:¢ãš$ú8"í¸$nù•ŒE–‰Ë9+Óÿç×ó	]Ûß%åÈĞù×G14ÉğPt/û¾±˜ĞG	‹	‰$Ñy‹.—EÒw3.
[´•”mª¨EÆè,6 WlF$À(šÈµéşá‰(q)é†¼ß¬±”/+pæoÈÏ‡SãĞ —bÈfOÏJŠõ¬ef×·äì\è­Qfrèà“`±
«şRs¤…jÎ»&‚AXàFLØSP2q\âVŠ4vÚ¨àS´‘ìTøá^6m• BÏ¨—o:<‘l:®£ütØÒAvãéYM^oK0ÉÆÇõC‹«o™$@^ê21tµÊ&<pã9iÔsƒÈ)Ãİ´ |üÃhñQÉ™ƒ?<
uºC9ÇÜwàV¾Mğ}áïµ•ù²Ù‹%ıKç°ş'8×5²³ Vi¬yÊ%iª¸‰ñ‡(–ÇÍW=TïAö¢@¶§‹öÑĞ.!öV…“é„ÜÑ“AöÚá±ÎÁØÒ$ƒ‘<QñÑ0:+4<ïÉR‡—m•Ü“ûşëË¯ã×'î“ò×§Šãg÷Îÿ.Øı« š¿Kœş=P~Ê~K¨x¬•	 RÔd#[Õ…‡u·Ç#}ÏÀ^ø‚€ŠL{¾²ã$	¥õ'!+»ˆ5¯ I6 -¬ÊÍ
Ş†@8¸}ÀÊ])2¾=hv5X»<¢q«^ÉñÆ'5\@ßğúâšê@yò†)WÌñi£ÉŠîéJŸ/"Ã£úâzN o¯E[[)È§«í¥¨¬qDT–QªDşºÛO’)0½ÙĞ¢´ªã1É{´ñ"Ü³Z¦VDĞÀ¯[›ğ%ÎŞ­d[1ûÕá‡?íêQ7hÀª(hkP´‰Æz.{g‹C¾ğÌ ñvvo2½ì7 $_³ÁL„-….:xÈé 3œgmÜ¹)ÔEtœsYËê¡ˆ|Hj'%jÒkPİ‹Ôp¥go_zÿé¸±Rôåâ+„\¬pT§Á6’¯9X˜oXp·ğKL>ä#“= çt´0¸,±±qİ‚	)8pSH½˜6záf.û
LøRÁôİŞó—{ªûöÅã™¡Õ®$½šmÔÿ²ÿUĞÓìß
b¯Êw±Â!‹w22 o® ğ3¿´ÂQ]„#óûì= ˜Ú®èÙd€}”çâ¡´K“ş˜ÖÜ(ÒºÂ¸bİM±œŠ–Nôè‹Ğ(»™"øŞÍãI—¯q^ßálÀ4Ğ"%W×«ºGA¼Zˆ1è†½
 jT!Œ°ñ™ë1º´ŒSb¾ê‹ú ·Xxhöß|CŠ¨¨~¥ßñìô2èO~*Á×hdÚœO|U®=–Vka­£O}Êw“¼¯ô±6/…y)uÚšIs96ŠWWKxZ+ŸøõÔ#Iæ@ï?E²QGÂHJ<ÃPÔí™@HyïÃE¤50xÚâV7[ãº@YİfE²]óı<ÅLõÏ‡ŠÏQúüÌGfÅÌ%/-JØo5ƒt(Á©èˆ?C&9?(–HŞzM›\0¿‘Ş¶ŒzÅğ=mc$Àg˜?G|íïzàşoWÃì'‡GÚ ÆùÌı£âï ¯ 7li2ã6mæÎ8ß–½c£ûÕ{]3şSvrıw¯Oqö'@²‚¢g4ªŒÂê3élò ¬P;x°SŠÑšWqõBæõ£kÚöb3äu(…Í¸@°_şŠ'×k#,oqT›­Ør_àSº¹,©ƒßĞî•9²Ş 2p±‚v)U¦3G# ¡$&.%åÀ4Å 1î¿ÎŠmFEbÁZ“Ÿ«*ûî1Äicë§;!–K8½„•f´•êÒÚWš­|4ÉDxb©ï¶j#©>…TQÿ’)¦"ãt^Á—cÑyJ&Vq¢]Ÿ“D•«áŠîÜl–+Ê×,Fb©*3ˆÒ!OÜká?÷ÖÜoi6ÕG •ƒøŠL¹,X5X4É¨Å<aï]”‚h’RLVÑÃmYQtä›ùvz‘F'	Mzò»rØÊÂ’,"pXŒ±y
l“Wİ)[i²¸¥ˆş¢#òìzER_D£4*¤r˜çGf§qƒL8_ß"BÕ½êxFœ¸™dJ\ä4y•Ÿ©¬_¬J“xLn“8Ëµ†…38í4~›¥¹ŒåüÅ¼eå?ÇEã hÚá-"¿Ö2‡9AI-µı$99¯Ò†–aÃj~¨P°ôğGEÀøÒ”ßÍOjzİixxâÇŒĞ€ó3š@ßèmú#¬Ÿ+ÓJl(YEf^w “Šø=@÷œ½È÷½öcïš‘”·«Í×¢ö÷C™-×ÄÍq!Âİ_Ñş×ÉX‘££ĞÑr|bı¥(ÙÀrW,´Œ…¼æôxë
8÷¨(†-%ç¸Õ_lÇ³––‡¹øÍÚK:+{æk!IìSÃe“5¶cÊz†½;FhhĞÏ#a5Â$î»ÑF§r£ŒæìÃñåÅ %–åêéãVB­ôÖêÊÇK%:BÁ?üS»5‘…yª‰Cİã
h®šˆ\ 2èïaÃ–Ğ=x¹rĞ“Ì"¦¤~×‡BÔÓÜ7úÚTİ§JVUy¢6%¹n‘ÄXÑT]²DĞS"¼®ÓáGåä{ıZç)xvÄØÁ'Z‰ÁáÌÁ‘¯A—zÉÍL×tÄºT¾éøº–Y!icßó÷&¡…Ğ#ı'æßtŒ [Ñ€ F4R@î-™¤åV…JRĞ0‡Fª	¡¢¢£Ó}#…vú·”T°àPnoÄsEÍüV^|³q»wtGdjO¶Í|G˜ÔZ¸?ÁDî,,ËÛ
E?Îî£ó¬ZPP|Y«¼=—«AôË¼ÇläÙJ¯=’û{ø‘ÒåWÃL!³ƒ„«
»S†Ô	)ÑÒ`(ˆ
³GS'½^ëávN™µÖŠ~¶·´–\ˆZóñlı)r*Onkñ³>F“NƒÚàæÎŒ‰KyŠ¾&]“k·Çz,ò$¼Ñò‚bctÑÃ™8
ß<§DbÎçÑï–—·¯WºkÏ—d7VİÜHr8¼{un™Q`|„@Kúxéw¶z¦.M{ox~Ìt+Â]„ÇøóÔ€#G9‡ìê3Ã ƒıìæú›–¯1Ëé©5JÔ˜‘§×x§2yıá®ø½—F©®éGáµ¡E“0ìßpåw–?­~Hj¤bxyËNı÷
äüçrM+ßå*‹-T1R“ )aÖâ=VYâ²ÅÌ"›ÑÌK²¡†œú¬å—ïÂ÷Ïêğ‡\k@xó|ÛŸ{¡ÂÏõ‘!°“[	9¬%§A#1ıB »$;_ÓNWî„^ÿ#î¶Tíq¨÷Şf—zp¶#gŞ‰FCõÃô±ÃiÓÑ‘ÜAu£¶~¤ÈÍõ`P‹~1çÙ³éÙ[R³jb&dß±,º†y3õM×õ“ÛjÈÅù(×Í†»ä®vÍ>Vy<½¯| údÃŠ¥‹™º²P;”»TçÁ\{"Í4—ÈAò5.±1$ï
¼O€HÛß<]I(–ƒ
²¶úW°sª”Ñï‡•–¬‹ÀpÎúb§=Á¼…Û¿Å!¼¦ª|â,…òPÅ“lSÎA`°ˆ÷:5¾²G¼R^êFÎW¹3ğ}x‚vÊÅek£Ø±E’n½5¤V­z,Rº‹¥”[7EısƒÉ¬kşu*ÕÏÚ±â[¥LIŞÑ	s«_÷ºìjõÎŸ¶]_Œÿ)KSx  l£7zŒ68”ßHÀY 2+%[z3i§¬#ĞYT®ŒÚˆÌ¦k;l|,ğ÷X œD©ÿ(LÒ!‹µø>¬u ã<d3'+é®w#´õÑ…ôàfV ,It„HæĞª'\
WbØn§<³>§HxŸ˜RMää×¬iP{8®ubq‡´‰{*ì/S®¹JŠœzõ¦¤±_›ªÂªam…_•l:s
¶éŸ+¸ÆË>³¿ˆóKVs«ÇTTWëÖ´,l¤È52ğv/  Ğ)©MË ‰øN=jÌa@Š!²d5?­à«WO–ğwcIdÒª$\±Éß·C¿oU™§KY”÷cK(‘Dv»Øç:’[¤Y7˜ ÀÙµíJåÕä†…ãpì’hl|:XR‹y«¡üsàåœPÃ;+y*KšÅåÆËÜcİ)¦¦`„ƒNWÆ$“„'UB6]W“ÇêÜà÷!eDG#<ô‹Lè¥rÿË.ş’$ãqA*”gÿG–B éùÏ2]© 8ğ¦ÒŒ–b) (ä®ÃÉˆÿP“¶+)vJ¬ ËˆmŒ‘ÑÕ’Â¾ÙÜ mêätõ‰Ïw#Ï—.-ıïwšWVMÂ±%2.Õõµf²wú0j'qÛqi¬8±{‹“Ò”ñÑ]r8'èö5<š¶ˆvmˆhS4erum™T"‘omí²ª3íh³ä¥š:‹U“vvÃëÅ§ê©ß×šğ/”Oùî}«—³7­÷ÚO¦yYZè¼½:4ÈVÖ¥eh„Í`Aç<Ô=2§¾b‰î
åïXÁ»„;hØá”GÁshW©H?å0—iÊp„ØT•¸$y™1zÔj[±?„µc8ãÊ™+OéàNİd´¿–'˜6(™'©g èƒ&6aKŸäSKEÑ+f·™G×“r4†ª~-µYªJ/şšm-¼0†œ‰BfN…F‡NÃkY€	ıÄ¨ÜFC[İJ9qM²Ğ¡³SÆ1Ö{L>‘^‰G¬	dY!8UÇ-£è;ÉÏƒê9Ëß.n•ß\úSY: I™™î1ˆš^œ’)6tHUŒ$Lç#)•qHTÏ)‰È%0Ÿ~#•±]-"¥òT–ßšÜ¦ÿû'ì‡CÔ#“¨pøyy JäĞ!é„D³êƒ®‹Å”';µÑ1x€jé~Äùt˜sğJ\ «ıü.’ëÚ`I3ü¦¥tVECfcJƒ®¨ólPû¾¦õ·d—ÚÒ^Qª®2Ö¿æÄJbYVIy¦fµég²íÜîŸ×—ş0Ş§šÑçÌÃyàœüµÙwSGÂˆÌ¤]Éƒ†×nu#'ƒèZ`Ej_S@ÃB0%Æï®¡72X[ä¦6»EÑ"14^S~ÀÒ¯«–Ãù¾ı–Epø,Ìd:!ô²)zÇ™*Ä¶êã@)Ä§ë«Ùâ
ÅèÅ1U(}}Ù)½aZÒÔ¬TÉÑ <%0%o–v¾‘û]k ½LîuƒU~¿?U3µh[ gT¿¥ñ0…­X9“ÿºğGp){ÎöÁFW!°AµæÙó/èVû/@¾·ÿR ¡š(ÇZªo £Yí¦BÊ¦Aˆá-º!\¼e§¡C Pö¾R†á4GhÈ‘ élÛ×Ö R^ßºœ»sÔóF B†ÊÔÎç¨ÊH9¯mİL>ğeMĞĞNr¿äybf»s>áº+a3§6ştû‡Ÿ:\C‚q–`õ¸ü@”s(óv‘q{CÕàÏ QŒh/¶Œê+fôš‘H*¾!…v¹2€²è¥
L¿ “u’‘&„5„Ã	'iÒc÷G7ªåÁ­KVöçwúDgô{I£f»s|İN
-ïx´)×q˜“ğ¶Œ7™¢kJ‘4Íİc¿Â
²ëcâ¾Lt¢Îr[Fl±*€@ˆÅ£Nrñ¨òìµ·³*Æ.»B¬V®F˜Õy¨R%ê?(Qu3•¬‹ÊSk„>>­"u+Bßrã
ÕßñVnËLTÏjÕ€…S%êµ‹,³ïË –dgùĞøNØ³ØLâİ¦…_–îĞ7}“ÊV<‚ÚÛ¡:©³:»„a#Ó Å6%Ëœ+pƒ°œu3¶%³É`2‹TÁÉHå¶dŸHÍ‚ è·âË9çOs6êÓÅ7a½Ğõ©FVG+Öz™je[°°f»{”ÄúÑú™g;w±˜ùœö -®€ÁÍüùëƒbE‡÷ÿtåan Š÷l«Æîêiãó)¹›¸JÍµ¹Y£æzŠåm×µäÚ€¡Ó+`Šßˆjß}§M­,/Álw§"Şu\ßÆºÇAÎâW¶ËJHş1Â"Z7x©áG!Ğ#İ`ÈˆW|]ôĞúÅì~ğUf»s|µ4µ—¨=kÌœùÎAëÿZçèd{ÌdØ½ûÊ‹ª³Ô»½£wÕ¥âõ~¸¦…=ÚÀÃêx—Ä	/ŞñßIN²Ò {“ìÜ	N²’Út’Q%—“ì0êt¼—w’•¥w’ı<Ñ„ävqB—Î]Üˆ
kûÇè½ ©N™1ÎaW\åì«ÃÏñSF%úÈ„ÚZo¯TÜ5¤¾­ùì«8çÿï|ŞŸ†,ÒÎ.€põÌXdã(¢Ÿ€Ö€^z*zÑÉ¤‘„}ÿeâ×ÿ¡²ÿBĞ½óg,fõ+ÅçîAá˜Tm*²#=;EôìY³Sä›èÈ9ôÌCÃsôÌ}U9Ø‹íœvA\0§j1öcºéiËñğ±ƒ©LÀŞ‰¸üøHŸwŠ‡Là¡›\(ôqUé0«qâC0;H‘®Œ2uy-H"¡i,òfğvşÇFzãÀ˜Ü\›Yõ@G®
±vi£NUhëUçâ’* ¸”u¹3Ò\#M¼(ÇsuõÈ@ômÚSS·RÄñê—™@×Ğ#Z†C‚%v#eŸÏlæœQYg>MŸPèr¾OÍwS¦:Ó—.ŞRÏu¹¢+hõ7¦,ä_şrYû±sÃHa¶}~¬ê¯ş«¬ß•<ÒnğòV¾šußgk«¼]Ø\ÎÈ¶ÕŞ<ôÁãĞ.ù2æ¿ÄÙo”ñß!Û€òÃì'ZgpáhÀ0ød?CEí€›}ì@;ñb§5V’ùİË<r!Á$~WÄsCzªQQjM66°;Û]ÉÃsé¨Û	… )tP¬ªˆ`¨0ŞCî	!mI„äR’â3ìH0tGB«ñ¦_›à©zÍ"R»ç)¬Wys£˜,£››åLªD‚wªBc›ÊºrôO£‚İ¢ÜQ;sÑ¾ÁVDOênÙ°_í^'4¹j96¨,õÎù1DŞš$|îî `(~’à,Â}›Ãc‡îIP‰M`ÎÜĞn‘¦I9:B%Q%½õj
"òú±=V­8@E.7vòyÄ¦_>iÒÊU°ašª½wC7æ›QÎƒª×:4§Ø„ææb8¯—ÆK8^Ğ%)Ëù®ãï¿$Mx¦±¾…àéïkƒèëä:ágJ¿x6ç×=Då6x¥«Œü	m]·Õ¢ÚÚÃhNw´c©ÛQÚÑ|A!8—¦»¶?¢u?ÀÖ©WíwÉ;¶{˜h\}d/ƒêØ­w•¶$KSšÃãÓ‘oë=ËoƒÖg¯Yu{Kz¼Xêq 
úÇøn‡ÙŠÜ¡¥i¿¦»¯GÜÏrÍãf>"G¼Ş5® c½?P³¸(ÆºÂ_dïy=¢D)Vúf[æÅ®½·wt‘ÂŠÙ%ÔıÂ\k<ï1¹İ÷¼ÇXÜ¸Ï}ŒEQ|şc,î*>ÆâD÷§=Æ"ËvFŒóôf×àÉVşS€^ı |² K{TØßªIaÓ¤‹X#n}XwEM¹ñîƒ:çL‚…ıª­Ğ¤ß?{ğr­ÑÃ·zZÓ|×Â\‹»?:ĞÓî	¾<x¿t“ÅF~wÒû±Š®ª’T_³²Ö¾;ÂÙD?_l”¬Ï@ZÏ"ÎsLÄâ)Åyö•ˆ¤Ï™6ÅŸftVîJÇó¼v¡õ®}•Áw}Oöœ{=“(27£vÙî«>½}àö¤L”k‚Ã£ªÏvç ‚çò¶²¸Û²a@i	¨n“7G] µìLÉÎx’ß†I > 9N©dY9­ÖĞvaJD:/(9Î&—ƒ"ûv¾©ª8í2,\î~bxâÁƒ,Îmù®jn¬™ú|C@qÒ8Ù=eå±)òzNÅ¯è<àÂ,tAq1(ĞssÕëa–Üu­Î f`xSxæ^©ÜÿÓK‚şÒÜ:MCò’–Œi`”!ŸÏvš•˜QğYÏp±¦—zk¹ÒèTS2ı;ÿĞ×õh·%ÖR=fË~Ÿèagjo2˜ÇkÇ+»®Ë|ıeÏ+»ÉkíJi¢¾Àó±¤ÁµåŠ˜íÊ†ğ &úŸT ¾<ÅjƒÙ.ıÎ_íœÅwşúê¼¹]Û ‘İúqÈÇo½(“áE\‰ì»N*:YÒâĞIŸºŞØ
Û¾(,ÜÃ²oaÜ)í¼)>Şµ¤Í?JY;æzgôºuqIÛ\Aå£TÕ> #XS¼snq_0q_á[lÙ„ÙÄ?ye×%°3;Û%›(8¶T €p:ùz˜ÎŸ®±6=Wl"úºùìmŞ~ˆÍÃ)áˆ^Õ|¶Ñ>éÀR2Ãiô“9-‰ÇU5¦Ìc…ŸÄÁ[K1jØÂ>à0 Ôy-–€#á¾3 „bQ_æyÛ6ïïØàª ªãóÆK‚m0ë¨•œqHt"¨ ¦í>:ğÂ­$j¨·èí:şYhµƒ¨¥Úq¥;¯}>K?šÍ°«¨ÕùÄ!µÍÜ làq¦ı"÷ğ*Cÿ2®q¯ÚIïhôo¼ÓY÷ô1aŒG½2CgÛb>Õä,¥¢Wb*ÛV*€­T [© B©|YÊµ^WîË`~Üï°n_‚ö€ƒnöÛ¿VûªšéJM’9#xzÒ90È Ûk¡S É\­]7şz;Ğc×êZ—ö*{FÙÛôbÃ½U©v][•:Û oÖÃµ„{­ï^(ò®e€Îö ~şÕ²Ñæà<³’nµÖQô®‡Ûq{Ê«úb˜’!±5
Â$th} „>iD¨Ø–ĞeA·ŒÓ]áÓ!õÌŒhÒŞèËÜ*Œ¨#êÆÏ øxÈOßä}Ï„UdgáóçQÈİ|£ÔãÄ‡1	êÛêødÅÖ†¤ˆœ™WíP O1íÓä^(gqÂ”‡¨ómÙ¿®ëãÕc¸ØlÖç¡€Œ‰eÎjç:eÒÙÄãØû£½Q\^àS÷ÆxGC1¯ç¦½æL!ÏvGX—å·›,Ù&›Ãó o÷*)‚tR–Oöğî­}üUé¤œdËe(;Âªö1S{0'Í¸XnÖ+ìzTª?KGNÊQÎÅ	}^<•ˆÿ76ÿÇ‹0Î(ş'XydÔ!š_74¿n,~UÒ+j?_íøK‚€3œnÏº nÛJè1l‹ G°­„Ã¶rÛJøA¶íÁF°­f[9Ì¶ÿ®Ùç×òã¾Íå%àŞB-kê\Ü½¸¶Õ¹¼Ü¹Ï¤Ó­+„9\23åõ§¼øÙË¸|î">/ù…&z7—Z0Œ(qOÆŠÿNsÍkşaÃ§¹æãNqÍ“mÊ5ORœîš7\%§kŞ êt¼Ïàš§}ğ×<Q¶7îÇ„kkÏ¸;7í^Üí4jÉ	ü~´Úãøî‘ñ­¦58)k—,{¿ôy–dXnÂ"$|QºÙÜ«3L×á¶œ$|#p'Ÿ¤¦„OQœ,|#ªä¾aÔéx//|²4KødÙÓ„ÏxÆsqÕƒ2± X­êwn:u{R@ñDÖÅ‘ã€·½„²z,å¾åˆ`ç_¼Ù/×“´‡šÈ©E³IŒú$ù’¢Åÿå½.è°Ršó\yÌÜw_À`#ØÌÌ]Ğj*0.—i˜0AsÌÓ¬(Ÿ<…³ß¡âì„Œw¶›À@öÊ$g&j™ĞéÕ¦Ø3Ì_´%öäò×lÈ_²ÄN¾0´Ä:G\‹5÷ñÍìÆ“éÎŠ¼»2Çõ¸®O~b*¦ jñÄÚ±,`‹òêT]Õ”4m:œƒô+WôTY”N‹ W–l°evi²K¦İ¹;Á¶”Ô”m©(N¶-GTÉe[£NÇ{yÛR–fÙ–²lÂ¶´™g´A#‹újĞ|5h¾4_tK¾4ÿÂV ¢~_’V¨Y¹İdå¤éyïÒeÌ>d«|“­&MÏ#p'LÏ’ššÅÉÓóˆ*¹¦çaÔéx/?=ËÒ¬éY–=0=+î=?Ë²¾ÎÏ_çç¯óóİ’¯óó2?Ë¡imšn·ÑÚ¾uOÎÙv¥¾Ùn§ŠÀ09KjjrV'OÎ#ªäšœ‡Q§ã½üä,K³&gYöÀäÌYgôÌ,ú:3™¿ÎÌ_tK¾ÎÌ_ÈÌ¬|ó\
uŸç«dšÓÄ~»M³n€Ó<–†q§x,	jÚcIRœî±4\%§ÇÒ êt¼Ïà±$J³=–DÙ“³âÑó³,ëëüüu~ş:?Ñ-ù:?ÿkçç|·kÚ‚_è¡_!ìòñÛ*
*î2ÑõÅŒÿ¾kg_vEÜ0bøR@HRÑiİÜèØ+=
¾	kF‡1¤¨æ2»œõÑ¥¬‰ ğd 5x¯ «âM/ppkË¦ĞƒEu-ø%:pÉëœâXx@@\4ó\P—@Í0Ì €ÕRâ’›³kƒî­>…Rƒßyì4ûIf“Â]]GY$)W(ü~5&rW±¸Í<AP|!Åt³
ö8¤#Ã¸è*@Ä„—eÛ¦v´5Õñ„ÉvŸ,Å|ÁoK-Í·¥"ãm©$´<¼m—nxaØ—£qœpZwÅ{€±}P$õ¡o2:ôM&‚å˜½¸ £Tk5e‚¿·Õ×gC×g#Íî¾}ÙÓVÅKV°<ü´Q€Ÿ²ì.+ybÈ+¸V-‚C:³Ïv¬ğCÙ6óÛ©ê¯µƒØvİ»ØtT;õôÄ*øÔ×#8DÖrƒ»©Ç”ª£P]Y__ÙP‰ë¼1:ÔSOş|÷Ì¶æ;lñª“] _i9ß9B?àH’lV²ß¼¿š÷¶î¬N*¬ÔDšR³Ú§oşPK
    iY¤@ lt+(  t  3 	 bwsewell-tablecloth-3d8afb6/assets/css/prettify.cssUT Æ¤OuPÁƒ ¼÷+H¼V#jSµ§jõ?X¡–Á ¶n6ûïû„u·K²LÂaf˜7¨SúØ!8J—((Ò3>ãÓîs	n<‡¶pâ8Ë=ŠÔ¸ŞPÿ§\gé‰—:M’ÖŠ“Ñğ˜‡o¹`œeÖrR°.™œ‡	E†ô~«&Í•5›÷Ñæ­­(ëà~ı×nnáËr@íDÍ„i.·?x#İ½×j–4ÜüíPœœ¬4e@âqA“œ¢ Á€ÜÉ#¡”Ë¾Dù¸ø~—û¤–pºª%ÊbÈ‹A[jÄåÄÌexã›º©ÛØñk²~Ş@tÏeií1JS×àÕ'¸÷US5õÁU_]áñşf`=Ûÿe£P°ëÊ'oØb~êÇÈõZ{Ö¹_PK
    iY¤@4ò,yè  +  5 	 bwsewell-tablecloth-3d8afb6/assets/css/tablecloth.cssUT Æ¤OÍY_oÛ6^>‡¢hÜÉÛI­>e±Û€¢MŸZ’-¡²(HJ“4ÈwIQÅdkø‹Ç;şîxä“
nÒTñ$ˆ²**0a=!ëàTÑ}5†i²Ëüºó#x:™´¬E²‹+“v  °Ò^ÂÉ±Æ£â*h£ïxÆÇ ‚Û¢D…Ÿ£„Îwò¤dZ¢»ŒßÀàÛ®@·Y8Nöpùà¶HOßM&gÉ~wË`²K¶ïF;É İã.¢<‚•2Ä~
ô•I• ÌÌ<µVxPÃ0ÉvcÚá{ù=ø5ÙçDµ¬Ò)ğ5 ?Œ~
ü­Å$ÆcRºÈUè€æOAg+ŠGtîÑR;V;”¸ù¿GNÿÍz½^,/yœœcr0ÆyíZ<P¸ºn3ÊÑÀ¤Èp]÷r=¸JñbEtĞ“l‹3ëèp“!ŞÌ¼¥™g¸BKÜåmDe©59£€ÎFiMŞ—"CŸo6—ó%ô;Xdx+h¡3úèl”z_Š}áåôÜz³]Ií-5ı òz£õ—òÎ¶³…µŸcie¤5:£tu:Jkô¾…«{¤ Ÿœ½ËÕúêë_7àæÕß+ğş¬=˜“Ã•é\äK£-Äú‹W—©DÚÕç?%QØÆÅ7*ç.	«Øë¾%2ğ³K²ñUÚãîù=
5Èëëë.ÔÔ2xLœ*Â¨*vúß!eh6MšdÑ8èáÜÎÍi
U±u«$€iÓ_¡œF"TàÈ7Æ_˜¡Di‚7çSÒdLöù‚“$	,‡`f%×u?I-ş¡ÕèˆÆ¢6áeøĞ`¶ß 4”Ça¥šÑ¼S{ÇùÈjNšj‘j§’¥DP~kf(ümR”Õ8ˆ“4”\çàøP\<¨?Â<Áa†Úyygs%cmPø@ Òÿâğó¾É~(£¬Œ$Œ2]ØO3<Áœl•ØIÄk¡Ü.-f²ë¨m^„æø e”ÃV!¾—¨Í¯±wm¾%›\À0¹-)VJİ£’ª×¨˜Ú\¹·€µv‡y
;·’ø‰c¼*?Q’wI£Ã¡ÿù\¨½ÏG£¯ —4ƒÇtô´gëÂS½eÒÜmàë4ïĞÓhÎÂhù/Û5×K¼âtÁLgDo€öL½­ÖÛ¤öĞÕfKfÒº §©´.«"É¬`VÅ5¢S†#1€åó–ç€7Óiê Yr¼n	b\nfSt5Yg:mrã/7W7_ää¸¬`UòÑ‘×ç¤½R(Ô/·r™ù
Kà¶pŸ¤>¶ ¾EA'ÒïIÂX$0uJ˜•ã2*’mËQ&?"ßózy>3QÏ|¢ÏGN“mX±Ç0‚#5¯ÃÌI/ŞdíÕ)4‹ñ˜
g¾§uæé r5î[ücµ ^{Ä¬šÉ£ñ‹ˆ!«ù"‚˜Ë¼¨ÒZT+ú¥–ìĞŸØCXŞß}ã5§ÔÙ°w¡üÔ­ç‰ı^c„)#ñ–+ºı`wŸrWË2†!ºó]šº@¸¾Rç×'Î]n,lîôb¡tq¢3µ›îââB¼Ãf(‹äï*+¿í¼õˆ  JÊÏGã]w‚{£Ş-°g#ş^X_mlÎ«»\.-·ëêiµ7^¯H;vÇZJ2nZKY‡ö­-4ÃÖÕ‹zõİ[O­ÜÀ5’v+İ]éÚİfŸ	Ï-+TÕE³şsGŸıNš¥¯Ï/H«×n6%íX_·”dôuKY‡|İšÁ×õ¢^İ×ë©•¾^#}ô}ŸåÒ>}Ø1DñRÁZ?q*Ê“¤ÔLœ¤°9˜O½<µòÉèÿ\(¬‡¶Ü;Hòûêj(ŠeÀH—Ë¦Œ^*§5#”(z%Nm“ÌĞ¿Ùól†ëjô=Êz·\;¾ø(>ùÒz·öN»öH³·…xá·b³¶a;Ú<³ŞrînU©eµÙ¡š7R…øtõiõY®Bä0gº\…XºËËÕâg¯B˜3&á`D÷ı›y#i“úFákÍêªVKã®L©!Ÿğ­Ö¤Ù&·œ3ùkƒË:_![[&øè¬@{·•ü¦›|`úÑ@;"ıP°jÓå‚4.“P0k25«!ê©éë˜Mé€ºÛco²…©×	&Ö-¹²œLªÆİ1x>„ëy l¢§_|Ÿ4áÖGÙúb½°·…=­Ø¬-¡G0ŒÜá802‹è9”CÚŒÄyÍÇ©ñøêŞ”/Zâ(ùµªWà&Õ‰İbN±VÓùÔãj¬JN«•OÿPK
     iY¤@            ' 	 bwsewell-tablecloth-3d8afb6/assets/img/UT Æ¤OPK
    iY¤@2‹‰5   6   . 	 bwsewell-tablecloth-3d8afb6/assets/img/asc.gifUT Æ¤Os÷t³°Le`ah``PÖ5øÿÿ¿âOFF  É00ñöÈ/à~qşÖìô‹Ù*ºÖ PK
     iY¤@Ä¸I‚6   6   4 	 bwsewell-tablecloth-3d8afb6/assets/img/asc_light.gifUT Æ¤OGIF89a  €  ÜÒÏÿÿÿ!ù  ,       Œ èÏÚ›gÑk$- ;PK
    iY¤@¶à15   6   / 	 bwsewell-tablecloth-3d8afb6/assets/img/desc.gifUT Æ¤Os÷t³°Le`ah``PÖ5øÿÿ¿âOFF  É00ñöô3\»aNsˆQW$#ƒ5 PK
    iY¤@@^ó5   6   5 	 bwsewell-tablecloth-3d8afb6/assets/img/desc_light.gifUT Æ¤Os÷t³°Le`ah``¸séüÿÿÿ²0²302è0 H†‰·§ŸñäÚsšCŒº"¬PK
    iY¤@2zÃÇ^     E 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings-white.pngUT Æ¤OÍ–é;Ô÷Ç?È’hÚdÍšddK²d-[ÄXf²oeÉÖ[Œ±U2e_Iöe|ÈˆìÛ ÛØú¦‘¥(Åh0ˆ,s÷{úûŞÀızpÎ¹Îõ>ïë<8Îss3CnNN  ¸oéY ùoËÁò7ªç¥=û›šßë3şpµm‰ş»L¥™0¡åwÊ;Ï‰´£L“aÑÈã;“•&ø"#AáAzpOúyM*…E÷·'v À)à¶.<Ôiíõó€Õ¬XÂëƒZº³Ç×ß‹mŒ}S>™áfcÿæJï (t•‚äŒ0’ş.x3R8Ø–(û¬yÕ¸«ß·†Ş'ÖêšûÇ¿·‘‰ãnÇ}Ô~Í˜1³QZ&P;·ŒÅº,zÔR©‰—k 95ÖË‹d¶&ÛKq…ÒóºN3àÔÜÊy·¡¥ódÊf‚6İ/(s/1Ë`?wëMÀ|fU/æï
GT"?y’äÛ-è†ğ›ÊÀÆIè³[Y:f±Òôd—|¼èßÇ¥¿+ìê|Ä |>Üßì×I¼,ÄÍ$ĞğPJç+³¼÷V©¿€å#ó#çãÎ„“ò\ó¹•“Er iÙ{"µ,xÙ‹±Óì;^öm»øKá,çc=<ßØğà£"fbBµ+¿sW¾¶T.ôNƒŞ>Ix~`t4Òvä"ÛÔàÚ"/×Ã† X™&¬®~K¹7“•1@íøA˜éÁêœ;¯W¸bç­:7BÜ$õú6<¿¡­ÍÛòÊ¹~=äóŸ•CYu’W“¶Š¡¹¥yâ“˜.Ÿ˜9ålÅ£3jyaBX(õ9hs¿*4ºïDÄ@6oøùt9£Të~Slµ½„BéM2Şrø¤52”´ÛQ" CŞ`˜)'‰$k~ë+-6mívjkœß(üìyµ!Ò}$¡1à	öGÔÉ—å†GÄ@¦ã0Â1Ö³1©+ş5™ßLàšÊ%ì	ßâx!¡Ğ (üeWè×G”äÕ ôÁ4Q­5–9½H-”Íô3:’YmAé…w¦1mR8d®ïõİy’¡8xöW.ÒÓ7g-+’°æ>ş0ÿşœè{weî’5ÜH0x2^-N¬aâVµüB%§òÒî·pùÃÂ2ÁñïÀÜû¿×æÜÓ£ÖáŸ‹}`å—_¸-é*	—ÅUåÍO÷Yiş¤N}[İÙ—nÒ¸˜:wOè°Y¤$‘Lğ½GkäÿRn•çY÷z3ıfˆXª_Œs• xa¹ŠA,3lmCşâ³ç6R9lbÜCy÷ñTw
…şŞ¦)ï`Â@ˆ*ø´¹ƒ¡Ôœ·z	5º§t}Ï%$¢jHNkæ¼jfuîôXóâòb1¯™ûä@{ÉŠ½"y…îö†¤ŒÀÕÌf–)”ÿ(¡ëaQ¼P\.ÁõH%×ôdGäe;©-Ç¯G>Î‚kŞÃA÷ë360è*ûXBBÕ¼‹Ê”§}âº§tëiDg²‘râX‘G½,«2èı9oVú¢À;)ÙèøùûçşÁü^¹¥Ğ:ıv2Uç2A‹)A"zYÌe·?<Í÷ûˆŞ){q¿H NïåšuC_9|Š¢Yg•.¬‘§[†í”‹‰§9ÿü×ü@|ajwÍ8 s‰ /= ƒwªxˆTJY™uÕ:¡:®eRDJe´ŠVÎ‘§\Î8“r]|Öâ0B…í·ßštòr™ÓzëtËbÌ`A•MÁD(	¶–ü;]©ôÀa(pg‹¿·(	ñ|V>„ƒ¼—ºJ…ğ2at×´./±%™¥³ÁôrÅÁ(Ø«ZlÎ{Rƒ?Øîğî)Ö¸lô#¿‰¡%}i•AÅÙáÉRü:³³oºQeÏç×¯€}/z%p"ÕÜ”Ê¨rBveo*Íg8³Vİn3ÁYŸ	Jõ•€H«ÎOØMgëCû¹J°Ì8øO.qüîuøX+|ÑI€3Æ›‚y™ÿOôm€1ÜÅ­4¶Ø¸z êT2=êüôØEDRÏ‘"B.
#õ‰@“ÆÂn„vÑ#Îg([¶
j·¶ü7Ö/Ímµ7Ğ–ÕEq¯g(ú—· œò°ÈÈàx§9 3%[WQ•î.Ì{ç–­\Ş^7²-Ta^èù15#=ÊVt.¾”¸Tà{i1Š³h2—IŸÎy{7¿æŞ¸ˆª·*ïF«ªZŒwc‹ø%pçş˜W\o~„'I‚›üğİç¦ºVÒ5Á1²0yïñ#nĞì«M™ á‰íÇ["ŒÈQW– üÇşÕ`X3ÍT0ßtZå}/ÅÆ­¿E–2ş/ŸÌ	Ä¼Êßök+FŠ¿‚œ#¢_{;%Ã­¤o«yf2Ÿkÿj¨é¸îƒßŒÙ—XÇèOT £÷Aeÿó<í×êTX/?«ğĞNbK\¤A–e=ÛvP ±şxÙ	ò‹œƒN´~ûgîù
VßV_ñ¬ßUäy¼®4ÀóØR©éíÇX1
ù´›Wx—AâğÅ¶Òi·}åûÉüâ11~9SBËóXæu²I]ivğÉ<¯à.£Ûw°JğScK¬–½8â·Á”W‘IQà8ÍÂ3“µÙµ¨šeÍµ{ÉSoŸU<|$ö.a¸æÁï—î&Éït>–›Àˆ›*èE‡¨¦z«5Ï±˜mU?J?|ï¤åvº¶Š¨ß8ŸÏèlìe¿æm@1ó”hˆÖşhE |­èÌ1Ècé8‘[_¬mÿMÃ€÷¦cÅ /.ñ¡3µ¨K`#¥zë)¼¹@Î«”¶·´ }ddùdxI‚%ú´BšHÉEÇŒç÷ö´şXV>Š³‹^<ëFİü¸sB'n@34Çma¯ ²ÿ½€UBaBŒ·eH¹îÚ5¦ìmÙ¦Äú	ÁVúW«c0¹ü¶øyW>è78Qğ}³0ÂUºwqk\MQ!$<õ¬p ôó RR¯UÆƒ$§£s*•IwjÃlhF˜|8®T¶VûöE¾†‚Í&9ò§5<¯BnÙ„Á/²øG€
!§¿JER7ò¨«pWjáşwE&Ò¯»Ù§;Á{àÆäøR¥¶á3oö*vÅRW¶y{„s¡[ßÜÕ·´p÷Î1²Hı–&¼ÅWc~tTi|Ş¥»¦é¬Å×‚«äã—€Ù_üĞ‚—nµ€^ğ^Ê›ãÁ™V¸+”»·ÜœìÂ^¸çVˆxÚfQÊ•ñM*¶ ™sïu`›ô‹íW^›¹—asGFçuÔK1YPëôÕ@sŠgß‘Ç«m‹G°°“ğßÅŞ·«x\!×<ÅFé¬0×V½áÿNøiV~+¡¶ú7Â~˜§<ıãİ@¹ƒâ­æo›{¥ŠxBau¥ù‡á<ˆÏÖùeÙœ¸(Ml®ı×záKl@c7…)V[§ï¿d)^ù#4ùI’[ZİMFŠvÓW“¬oõıeÃ«^¿JNéôm'µt8É*Àdd{ø/üê·ocÁ,8Ş\xój¤ÉN!ÃƒMz’nñ¡+µkÕÿFn”vˆÎgÅxhÒ*)“$­6èÜŸRÕ!?TdÂÛÎ:gw¦«?_ñÌ\U&9‚ou•Õ‡ÏÏˆGgğÄßÊ–˜cúe–í¯Õa!j–ì]›“‰œßï½¶»k‰Õ¾…[PĞàÁ%Ÿ”›-òNŒ×	2‘ŸjÈ-NÀ=5¥
®¶+£÷ªzÃ°z›{*aYÑå&¹¶tÂv‰Ï×ä¤…¡]Ğú¬$X.
ÅÕév£qŞ(d ¾ŞÍRu#ò
Éß9áµ˜h*Ô? ôBßùJ°´´ÏA;-Á6šT7[Ûyı^7Q& ŞØL3T3ÆT£lèÌ°RZÒú?d‡sìŸ1•ÓG×ùÂvFøªôµROÔÈ‹›ç?ÔN:¾÷;ïûüælÔyØÑ„RH¤¢axÎË¢(Dv:\Êz!eérÎfòI®Mme¾Œ¦ÂñºïŞì2É.<_¸'>¹/hV”#ƒh¤ç	’Q±Æ‹(=æšï\ÂÙåôºù}ø*GÂ>±'ZÌVa÷%[è¨­1ø8 ™Lt]–¿M¹iWğë0ô‹u±ñ6…¨a)”·øë@vlÔB+¬ÁÍÀpñÕF£·²‡ÉO’ï Z†Ê"Ç¹wïp•†@"^ÄåW[0B…fÕÍåÈFIlMmµ·[_7¢È–ˆ?1ôÑé\tavQüŸªİ#Òã§#vÒ‰Ğ'3âCŒ)36(ûš¿W#Ì–37_» ª¯¼põäX@Øİ*«ÃêOÿúÛÈd÷üMÇÊeF¯c©w´#ÏØ&è«²‚+ês×ts¾ì¼´R)'ï¹µJèœhDâ90]ZƒoÚ¾h3Æçé"G»ÉŒÑÓ¾W¶"õûçôNu+¬i3âkÎ¬ŸÒg%ê>ù¥•‹_iº¸Ôªb0%Ê#®(0¬9êO£öÿn²öTpr6“Ëºù»XLÃ€PÍƒP›·òur]Ñ,tù^_l‘ÅĞÂÄª_kO(¬š°«”ş‚şå®¢Hºc;uéÅŸ!ù!Aõ ã ±Äè¬®ussv–‘º·Ÿo1Jj à`[Ø-bé¾±4ôÅµA%@¥
}4Ä½Éé5;†aÍ8h~R8éØ1÷èÜ8Ç7,lnÀ:Gr9"—#£Èã¤°³Å!ôšÿ‚Ã¹]¥7:Ï;<Ë	B¤¶üã‚+Ëß¨î—FÈ§Ö-«@œîæÖœ6ÕÀ“e	/åZú/±/]®€¾;TÆí÷‚˜¬ÜMGÂÓÀ0´Ù`»{i(,Ê­Ê‚I³•[œsÌ5®oÈ½œµ5÷f|‰­İwâÎì>2è±ÈÆNC1´‹Á{Éö|êËô*Oó”,:?ÓŞğÚs£ïk‘€´É®2ù
?b\Ì „ß	”îeà€ ó0D7–SÔw"1‡¯´_0~ØÇY<Ó5Pmõ¼ğ…ØX”ê*Ëq²…§‚Z„“/ÜÁ•›ô¨^z<¤ÒÓÙôàdÃoÑ}lûDQøìCjº§I!ßÀ;º'—¸ôs®V¯¼@“(dyt‹\o¬˜\zOºD&óÙ¥Y_ş¶­G6]Æ“¢¡Q^ïeËHµ-‹Û€K‚ëÑ±À%\"ûúœ;ïƒ§2>oâ{vÅ"S9Dùå¾~ıCÆ“'Ï+´Q\;êñ	|c²øîPw÷°æ~x¢´¸"g…ÛÅsËdG,£«Šy ?p4‹@«Y¡ğ`.Î ¼MûƒlªØza÷±©N³ÌÛYóÁÉKƒa#Ø ik”SPÒúv¸IŞÛ]wOö¦)Rã™	Æ2^^ÿˆ‹ÁÛ@£v:e{¹­o¦W}Óåñ PK
    iY¤@„¤!Ë`     ? 	 bwsewell-tablecloth-3d8afb6/assets/img/glyphicons-halflings.pngUT Æ¤OÅ–i8Ô÷ÇC–DÓ&kÖ$#[’%kÙ"Æ2Ù+K¶ÆØ²Œ­’)û2H²/ãGf"û6È6¶î4²Å ‘eşoÿ÷óşù¼8ç\çúïu^œç¹…¹—   <7õ­  Bù[Çr²şyiÏş¦§·L&SùÍS"âï>²VæÖÀ(”ß¡à<+JĞ‰2K†G£nOTšâ‹Œ…DAİé»”Ué,¬¯m()  N 7õõ!N«¯Ÿû—¨eÅÆÙÔ0œİ¿ş^heî™ñûÉ5™¸ø5UzÂ`cèW„±Ìw¡ë‘"Aw8HrÏ:Q—M:û|ˆŒ^ñ–»ğüz œ·Ûï£÷ˆ£&,Æi™@ÍŞ*ë²àN 	Ñ/¡9Ä~›¥Š%{ãq…œ2szNÓPàÄÜÊ~×ÁÅ³Úvœ>Õ'${/1Ëp/wóMÀrn]'îw¬2ùDy$ú$Éï¦kà5‘7•İî€­“ğg×²tÌB¥ÙñN…x±[Hş‹/~5TØÕz‹Cù½y¾Ù¯ùX%IÁI =á¡´ïW¯Íner_ëG–GÎG	Çp„Ösk'ËZT?ÊªçC>k÷ ²b§8
¶=ëíßé(	@°u÷xcË‹Œ˜	Ñ©püÎSùVÄJ¥Ğ+vó8İÿù¾ñáp{˜#7Å¶¦×y±>ÅÊ6bõšË½ Ö& ­ıaºc«{æ¬~á²‚¯êÂybdÜãSÿüš_ó+çºµàÏ–èµ	.1m;CwMôÀ'A.›>álÍ«;bun\D8õ9h{¿*$º÷XD6_øÙítÍşYãT›>3lµ½¤_ béu
Şjø¤=<˜´Ó^"(KYgš«$‰&k}ë--6kérjm_/øìq½.Úu(©ÙïöEÔ}É—ãADÆ@§â0"1631©Ë’~ÄLÃo¦-•„ï?q|ĞhÈzà6ñ2†;äë#jòJ`ØşY­=š9µ@+”ùÎ¬¶ ö ÚÒ TNÙ«»½·d(œş•‹òğÉYÍŠ$øo…º=Ì¿?+öŞÍE…§d7W¯¿Q­ˆ8WÉ¥²¸³í%R¾ï0¿Dpü;°+ÿşïµ9ww«·ûeÃfcXûæÆnIİ•BÈáªòfM¦z­µA?rG‡½­n€îÉ4jOC¸%tùÛ.P“È¦xÇÃ‚ÕqÊÿG-·ÎŠó¨}½‘~=X<Õ7Æ“¥J<·TÅ$•µ´†}şâ½ç:\9djÒ–C}÷ñDW
•ñŞ¶1ï`™Ä@Iªø´ÙıÁÔœ—F=²«|u×-(ªfDIkâºln}æähÓÒÒB1Ÿ¹ÛD[É²·½e™áú¦#ÔÍ§—¨†TS´°ß¡ë•aY¼P]."ôÉ%Wôä†ä:hÍG¯F>ÎBhİÅÁvê114ì,ûXBFß‹Gå(Ğ?qßS¾ñ4ª;Ñ@=v¤È½NMôúœ7#s^ğ´îLtüÜı3ÿ`~¯½ÜƒQaº}v²UT×A’ ½$ærØœäÿ}Èh‹¿¸_$§ˆv
Éºf >IU†®±ÉV¡ÛåâiÎ? ´>^˜ÙÂ2ö)Üb†ÀK#wÀğ¢”SVGDgîjŸÌPÓ6."§2›	EËg(S?/fœJ¹V|Úò B•ı€„°ßœŠtòt™Õ~ëtÃrÔp^]ÑT8	¾šü;]Rºï0°½)Ğ[y?«D @$ŞSCµBd‰0²cV›—Ø‹–ÈÌÒ]‡¼€^r0
6B«šòñû[í^İÅšíQ¾”71ôdR€÷í2˜"ÙCZ@wfFğMºìùÜÚ%°÷e}$®ÁA´Úƒ‡ZUNHÃ.ïN¦yeÖhØƒA­¦8›SÉb>2ıP©!µ¹q2;²ñ´`s`?[	–™ıÉÀ%İ¾ŠmAl!;a¬1ˆåÿDßú™Cí0ÜrCË±õËûjN%S#ÎAAO|QB&u*!å£0Òÿ˜
6jÎÏã†é7İüFr…¡+ NKócíÂìf[=ãgYmÏZ†’_ÉQKÂ	wËŒnAÿwZıp3ŠMMùöüœWnÙòÅ­5ã;…ª,óİ?&ÇáäGÙJÎÅSı=á/­"Fp–²éSùñb1ooçïy‚è:ëb‰®055ËÑ±.l‘€$î¬ÒüÓâŠ«Mğd)pC 1­üÜLïÜÓJú8JÁ³¢î=~¢jÌšŸa³-³2:¶uîhs„1%êÒ’Tø#°’ˆS‚¹^ Ãê4ß{ivƒMŠ´Éo|¸ğÄpvT0æUşŞ°OÛøì[qrü%Ô,)ìµ—SâÂZæ¦ú G&Ë™¶¯FZkŞø˜=É5Œ~ĞxEXô¨âwÖŸ÷¯ıj­*ÛÅgî:Iìé‹4)rl§[÷$×/¹A ß¸)9a‰6¯bÿÌ>_ÆÜ1P:í{µM«-õ÷8²ØNn|û1D
†A?íäŞf’9}°'­µDbÚî¼òùdqşˆ¸€¦¼¥™n3©íq$ó*Å´¶4;ød‘Wp›Ùå3P%ô©¡9VÛ^ö]‡äUdR9b³ğ,¤dmšÖ_YGSÍîTòäÛg‰¿K">øıÒÍÔ!ùîÇrS8i£@S5lÁ!ª±ÎzÕc4fKÍ—Ú‡Ø=nµ•®£*æ;Æï=2ûAÅ·iFN?%Y$†é|´&P¿Vtd‚˜s”Ñtœè/6wÿM}¿/Ï†cÅ  .ñ¡3­¨Sp=¥vã9¼©@Ş»”¾»8x}hlõdhQ’5ú¤·bšhÉÇŒç÷vµÿXU>Œ³‹Y8íJÛø¸}L7®_+$Çu~· ²ï½ uBaBŒ"®Up¹ŞêHö–\cbİ¸Pã«õ¸|~küÜ]~Ø7$8^ğ}£0Ê]º{~sL]I18<õ¼°¿ôË JJ¿EÖ,¯«{"¢7¹n>8-B9S.[­yû"_SÑvƒùÓ‘W!¿…jÄàXıÆ"@Åàˆ“_¥#iõy´Ä]Z'áşw%ùW†İL°Ó-Š ]pczt±RÇè™G‡ÒéK[|=H(Ò¹Ğµwq×§´pçÎ1²Hã†	¼ÁG´¸B>¬49ëÒEl<mùµà2åè`æ×¾ÀÃ‚0¡ı7Ú @?h7åM»ÉÀtâ.Œ§§Ü‚â†Æ^¿ŠˆVŒxÚjYÊñM:¶ [ğì¶cõŠí—_›»•as‡Gæt5J1Y0›ô• KšwÏ‘×³u“Çğ·´“ôÛÁŞ·«x\!ß4ÉNí¨0–ĞÑ¹™á÷NäiV~¡¦ú7Ò~ˆ§2†ıãUO½…æ­çnŠXx¦ŠzÀàµ¥ùá¼ÈÏ6ùeÙ\¸(-l®ı$÷Zá¶K+¼_c7‰)V_cì½d-^ş#<ñIŠGFÃUVš~İG‹b`õ0ìËºg£n…’ÒáÓFnnw’S„ËÊõ8œûÕgßÊŠ™w:¹1ÿî9Ø@—›D…¢Úô÷û¥;\ã÷C–k<V«ÿüı ,Ÿã®E¯¤Nµ[a³JÕ}Ñ‘	o;jİ —¼âÛŸ¾¬Bvßê©hı›–ˆÎàÿ¾™-9ùeší§İn%i•ì^™•œÛ‘è¹²»m…Õ¹›WÔäÅ%—Ÿ)òJŒ×4U˜¬Ï-NÀ=5£	­´©„íVõ„bõ7vTC³¢ËMsï0	[%Ş_““æ»õA›ÓR`¹$(WGbØ†óB{£ô¯—jS–Yi(qÏ…D3á¾~åêÎ—Ò€ÀÍÀ=NúIIö‘¤Ú™š«÷ºHZpAğÚ^@š‘ºY¦mË`—
Ò“Öş¡8œáø”ˆ©œ:¼Êº=Ì_¥o¤btŒ¨ a‘ÿP'ièŞï¼ïs3QgYá‡ãÊÁ‘JFá9/‹¢Ùéi›ù”Å‹9›˜‰'¹¶5•ù²ZÒH_ækØ[“Ë‡È\á®ÄÄyQ,²‘$HEÅš, õy›bèÂ>³	§—Òkçö+œ	øÅŸh³X‡Ş—jf 7Gyãã€bT2éî’ÂMêõH»‚_!_lŠM¶¨$M+á¼…_ûBˆĞ##–Ú¡õ®†F¯Ö¼TÜM’}Âdi¬ò\»÷VèHòÕp\ÎQu±ÑyctHæ`íÜh\…ÌŞØZsó·ÍUcª‚	a‘ôÃ™ÊåLáÃÿ©Ú9$/2:b'œ½²ÃŞ¤˜2Ca`ú·ïÈ©Õñ{%Â|ñ sıè•sj*‹ş—ú‡Ş®²>¨şô¯¿BqËßp¬\beöˆ2—Qú‡Û
Ì-‚Á˜Û	„ò€±‹«ğeçÀ…åJyÍBÇx
Ï‰éÔxÓúE‡96{pÀ=ÜIfœô¹°iÜ?c0¢KqùP‡O<µvÂ€¤7x7ä—V.|¥ëá>ÒªŠÁ”(÷¸¢€Ğ¦¨?:û;É:ûÒAÉÙ—5}Êwñ˜ú~aâ"¨ÃWù:¹¶è¶t¯7¶ÈrpşrÅ·¥;^MXÇUÊ|	ûå®ªD¾ugòÂ‹?ƒ
ƒBªş&â‰ÑYk¬Û¢µo?-Ü a”ÕÀáNa—¨•Ûúâà—»õªşªUa‡ãÌPĞ‹‘NÜ0
mÂÁò“ÂÉG¸EçÆ9¾aewÖ8sPK¹œEîÇmíMNá×çÎì(¿A2ğü^áYNP­ù\YşzuŸLX¿Bjí’*Ôév.ñ,°¡/Kx)ßÜwˆ}ér‰ğß¢1o¾ÿ¤±v3O3xÁ&Ã­®ÅÁĞ(×*KˆV!·8ç˜kR×6ö=z)=j+köİä{iXï±[3{¨ÀÇ¢ëÛõÅ°N&ß…;àSÈ«T<İSHªèpìT[¯ÿX÷µŞ¯E‚2¦;*”KÈ1)0ƒ~+(p@¦‡­Ÿ–‡!¹² ½9x¥ó‚ùÃ>Îò™¡Z‹Ç€?ØÖ²TOE‹=<Ôş ’|î®Ü´[ôÔç%—Ìf%}‹îeß#‰!f²ÒÒ=Lùûß1<¸%ds·xæ@!bĞ¥‘MJ=ªbbñ=ù™ Âo—^d=vñÛ–>Ål	O†EyÖ¿—*#gÔ4/l.	l×ÄFq‰k³n|Êz¿‰ïŞLå3'øhúöšLd?«ØJ½kÒ^‡Oàµ”Ãw…¸¹u‡6õ!e$”¸*\Ï¯ŸY¢8b™µ4Ì˜ ã£y’RÍCqsù›âmÛdÓÔÁ€–s;ÕÉµZe^ÎZ_ÆÊØ “N1¶ÂMó¶Ùo»yp4N’N3—ğˆÒøGÜL¾zJ­Ã)ÛøËMsıêë.ÿPK
     iY¤@            & 	 bwsewell-tablecloth-3d8afb6/assets/js/UT Æ¤OPK
    iY¤@j ˆm²     / 	 bwsewell-tablecloth-3d8afb6/assets/js/.DS_StoreUT Æ¤Oí˜;Â0DgK4.)İp n`EÉ	¸ W ÷Ñ!Ú²RP%‚y’õVŠiO Øğ¸_€ Á3>’Ø„®6Î!„Bˆ}c®tÜvBˆ2Ÿ…®tsŸ:vc2]èJ7·±_ #èLºÒÍÍCË>Œ+Š1…X¡ëW¯,Äßppåùû?a5ÿ!~‹ãuğË¯vëê†õK@ğŸ…§nl¡+İÜº±OPK
    iY¤@˜¬ÀJ!  »  2 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.jsUT Æ¤Oí=kS#G’Ÿ—_Q`bÕÁŒwÃ{ØŒƒğ™;Ü YŸƒÅ-©…Ú#ÔZukÖËıöË¬gfUµ0ÌÎ9Øˆõ zdeeeå³ªzû™Ø[ıkâ™èEUVÓt²ÿ—y•ãö¯¥xÿ¢½Ó~-†U5ÙİŞ®nòªÊ¦í«¼Îºí^q½mûnÿš¾OËŞ4ŸTíau=úÂÁ*Ä=q{]Ln§ùÕ°/v¿…AK{m¨Ç&Çy/—Y_ÌÆıl*ªa&ö'işÑ5-ñ×lZ"&$l°¡«6šß ˆÛb&®Ó[1.*1+3€‘—b2‘}èe“Jäc³ŒòtÜË 1”ãh(ˆ‰øYÃ(ºU
ÍSè0_ÚP¤•FZSôææ¦JdÛÅôj{¤š•ÛÇG¯OÎ· aİáíx”•¥˜fŸåS˜l÷V¤@¨—vÍQz#Š©H¯¦ÔU"|3ê¯Z¢,ÕM:ÍL?‡ÕÊ»³ŠÑË ³¦€béXlìŸ‹£óñjÿüè¼…@~:êüpú¶#~Úófÿ¤stx.Nßˆ×§'G£Óøõ½Ø?ùYüçÑÉAKd@-'û0™â Í)™õ%ÙÎ³Œ¡0(Jå$ëåƒ¼S_ÍÒ«L\ï³éf$&Ùô:/qEK@°`Fùu^¥’ÛÂyµïÉ€úâÙöÚÚú`6î!üDlŠ¦ømmMˆÍÄŠD	±„4ìUªdØøü\t€Vç’@âüíÙÙé›HJàƒ+ :İV_}ıÕ_¾şSSv¿?îq„°Ù.g“I1­ÚnWŠ=á¡/ïÓ©äÿWEÿÚô‹Şì:Wí.şşç?]ùãp”á?º»-Ùı¼º¾Ü³ Ú%F#İD6§Ø­ú¸ƒ|œãºV?eİwyÕYªíÅ?–lX.×î´®ÙšÛ4«fÓ±Şÿh)+D6îïÆ©n)o¡û@›-Ø ­ó Vlw§ÅM	2ùFEpˆÀİx´ó€Ş‰l„r€Ã¾.ş‘FéBà® [lûx1Ğ¢Yò·¦:ëm«ï’¦ŞJºÏ]3iâzİÁïçã~qÓşõ¿fÙôV4¿Ù~ˆ´à5e°ë¬L%˜ûêQ‚Ø“:}R§Ÿ…:õô©Ôæ„]¸|Zòõñ>¨ÏƒÃïN$AÖêU¢Öx(Iò8+!‹~Z¥[º`oCn¦ËÆšRDûøš9±ÒŠ‰¥Í$5Û€j£ò®Ñ2À•ªk÷FE™9	H˜íÉ´¨Šêv‚zP[= h5õªbº«ZayKH»Áuò¦ÜE{€şÑ¤š4e+%>iUM“†œt•N¯²ªA›oN€yÇ•ÑW(”×:ë°Ãi6 ğH+û'è<ów{šMFi/K¶ÛÏ’ïö¾¸øåoåå³ÍævK4M±½ë=‘lšg_SJÂ+Tå¬-Š¼l†üê*›âÚ 	MÓ7C42Xƒì=4;ÈélT%Mt{”¯@ü€OÈhr¾Ã´|=JË2iHt¿Ó«°«[¨¨]8TK;[3Í®aêò±CÜò€j¡Í+f+øÃõÉHv¬¤Ğ7fÙqi?Cø(à®ˆAiƒĞâ3hŠ]ÛÛ›ÚšÅ
şCvşÙñÛ?:Ynë›½¿ÙŒÛi¸§‹‰üÃÑ¸ŒhŒZ[¸~ßá³Ì‚?,£Ğ­…ÍH£–H4€qv£D¡I»£ô ¥§‘‡I6pÃŒ¯`-°÷…ª¸l÷ÒÑ(ÙtŞ5×4E=Ú¯ğaµô!ä>ØïìoíŸE¨lˆ!ÓfÒ@ß A$¤OJ t’SéIF';Ãó­1ĞÃÕÇˆm(8´Ç,²'‹ìó°È¢!“ìÕÛNçôDœ½}K¸ŠiÆ†R¢õ•ÜF¾é%uBK‹¼Ò
l)@7uµ”Çúï¦«6} ¶}¨@%¿İµ”Ô{¿¯Ò`¥Â&f´yf›j¸¦ÍÇ2«Îaa¸ñVb	³!¥IŠÆ(ğrt¿A4 &çŸ#«7º&)%ÒdµïÓ‘®Ì¥11™)k¥°V(µk¶BoOÿû¥ht€Z!l˜–£mdÇmØâ†DúF¸$p…R?É.MÅ,.&½¶·ÅdVqgK{MŒŠb‚¿@¯7¸i®KüYÎº°ˆõYuòë¬˜UµQ=W ü¨Hû°»$òÄ’ÑH·Ó~_;ı¦2uÁ€éS£Å4¤–´U?÷e·,Àv;½ŞBqu5bœâ³ˆ³A/KS»2
ÎŞ†ÖC[S˜X]ÈYsÔ €–Mí°xŸÅlEcøš¶GK!â7&³6öœ«tÌ¢ëFdÅ'1éÔÀÌƒrb&4ÏŠî¯à¦4îªt¾-¨¡scP	‰œSÌ,$ª%Ğö ^+lØMuĞŒÈ2¥1‹Ñ—Rb3²‰ví–j·ÛXonp¹IbÉ¹ªÍi0vF'Û-¿ì©—P1ÏÍîVc¥]ÚÊwfÆ<Ö¯~5šMÛ+¥=[ÂNmËJãha•?±+FÈşèqÈ^:-@—nûHOÁÈ'Ó÷ÿ¿é»B0òõş›Ó·ç‡Ç+½ÄŞ}­·Ób¾Áû±ì]»ã£/Ğ.Gy_Ìd©ü•„"')Ò	õĞ—°aaxV¬”Ó×ˆ”A;D,í·‰¤Íp/«øGĞe”¥`Wx]z·½í"•¡p4ôŠâ¶—˜#bÊ’y¤%lĞ1PYÙâ„0½öÄqÑ-´ )“¢ô´²¡ó¯Î^k‰Ş0õÁ¼CPÕ6*Ù6u	í È5¦`ßÏ>$ m]ScŒÒ€1 .^ŠÄö×QÔ-ñ¼‰¶>Vö¯¦íi6;5~©ñf§]Œ³¤™Îæö=bf¤¥³¾ƒP'M¦¾'íùø’‘~È1aÔ”6U[E‘ÃÏk,½0‘0 ¼k‰u­/›MÊrÀ8kéÔ2#cÔf÷g£Ñ|.Kë-6\¸Dz	ë¦®&Êg3şXĞ%õtYAÁã.WSzè^ÚD Ò×^¯js#\²M”—¯7P_íqòS_tyOŸ´P’hÏ°ğÇ((şPƒô€ËÛM{ïD´ß Ÿ–ª#˜ ¬_d«RZcÕt–Ùı`g`$¶æz›ĞÄÿšş.ŞÓ4¯²ëFóÂÌàÒAÃ•WHVE¯@LL¬×¥&ø¸˜d„å¶´çªš‰né<e-6ã¯m%‘·1‚°Gk A™-ƒŠó—•·ö[İÈ>;—íb0 uõSŞ‡åÙŞF¬Øi67Á]ˆÃğfí#-–¤g(ÂëDuB]!CWäBms‹Öeû×"AÀšÏ[–øú^˜†5}ıR·®õ(Õ¯nÉYx(ª®‚íi”Ñ<Én¢-ÖT]-ŞÂ#.½˜µúib.fèÇŠºXø<îb¬Çy‘—pìñìº­À°¨
	ÁÔ¦òdòÙnqó4ëÈñ¨â…pÀqŒ¶ÚŞÙÙ¡&ˆ6ããpx8ÇPËç¹y!•ƒ:nAXGhQ4‡s]KàéªñUŒG¶¨=;!×;FOB4‘éğÏèQ‡/ÍQ‡º³œ³×5BšO¯‹~
›@q™ƒG[5[”·-³š6†‚	óşDìh„ã¡GÉÅú!©b4J'àÁ?<$¥!=4ö•zŠJ}Q©¥²*¬¤Ù©DêW2Û6WZ³Z’&û6T@bãÒ¸ĞÓ]5œiãÅTİG$í¡â@ÉEGğLCå[öÁ’ã*ÇİW$6xÊÖöİJçŠÜ`½5]´…dû§È¼læ¼?ãß‹›úá-†f|[ÀüS01¹~½ô:½NÁµ»h¨â™¨1z·¨Ñk‚D¥¤K&ÒßÖíãé1˜ê¨¢0òR" ı§ö(©Ù¯ûÁ ¦¶Öô‘ALSÊ˜;!¨î`-'	o¶¨N‰5×ÃYG|í} i‚«gşuT©Ê+v./Ô
™Ì¸f‰¡ñX™%d±ÌÜ'µ¨4kçG'œš¤´ú·Ÿ-1Ç¾‘Xğ³ù?|³mî”bãÙuç^|„s(frdàF:«
Ú†»ÕqÖa3ÛÕ—ÁBªK6şü€œ#7#ÍuVp“K°åªÃ÷RœK« «2ùÓ£¹ıhz0ıÀımµKİ0Ê=A^n*GV1O“u‰{¸?Ú!¾ÅÜÊ ²"Š—ü¤ìª1"·äøÇ*á
37z*Ä”IâüÁ†ùëzà€u(âô«ä&C’‹pI€Ëÿ ¿uz|¼v~ôêøpe7ßZ‚ëô…«nÑëê;yÏ\}£8Vrõ£gokœoßL²Î·ávñülk¢¬ùë>ßÕŞ[İÛ¶H×¢Ø3-èw;·{á…ºÆYµõvÏzçj2êDHÀº¸cõ©{7€Ós]­Å½ù ûÓbĞ?Âhééô“Ïı{ò¹—;rğæôìàô§“ûŸÑì'_7Ì¾r÷ÓtIÔ½Î«ƒÄÎ©'Òİn~"İ‰÷LRA‰:0¼¨smö`˜CÌ /&õyŞÃLt¡ÓnÖÙZwÎ•äå¾ô//×éæÜ‡n»™¹c‹àÆ˜^jİTcø1ÏJ«×mwrãŒ(æ ´ıépÎ¶KO‡±vfïE,)“glsÇÌê¥Ógıè¶ı$6µzÑE4ÛÛÆf{=Şu4+L¸¥ëöµZˆı³³ãŸEçTœwöOöß¸¥9<>üñğ¤s¾hE‚¥‰[ÂK‰;Ç\ÍZ:*c%ÿµ"òHŞG°ş¸é'sI·û$˜‡}Oß“Å÷X|+˜{?ì¯tî—z?â†áJ Œ™ªş›~è¿\KÛh(ö¸l*¯ğV‡ÿŞÜ²è±!¥jÚ*½ì«ÅÈ“¬VÎa‰›q²İr—ˆæ»XWGèÊsš£/-ƒ^2?‚a°Kÿæ¼$Iµ61¥GòÏQ‰îNI"mqSÄœ¹Ôï™X©‹œü‘áT"+{)^€FUÉ•:CEâêêmmşhÌøÔEi´Ö¿Ù¿F@®ó¦ÖlÒ¦a äU6îwŠ„½…Öh¿7*Æ–PzCô‹k<y+±¢c2ˆ,ÊÜFº%A¹vr~$›Zö„±’„ò1'!ñwõH¬r®öÜ˜J(àİHœßŞ!ëŸ1ÓJ‚ßX]ğ€†¶*ço¨º¤„·}”MÙ†ÌRïÄpÅ7"!š£’—5œ÷,Çêé†àÍ!IşèM÷¦Aœ-,¶Tb7ì¨ŸRMgoşºß9?‚?8¯×LZ1ÙE²ò%¾v ×ÕqGuMbÑí[oµû 9oò)ÉİµğÔZ“
xÀaSiÓ›Iè™™¡j±pŞ££l›(šEoñM­NcÌØw¼*pTÓL
sh|Ñê¥ãüZ]ş^Ä¶Bı…j¸áì0;×0¿9•ağñ²¹Å¾´ni´xŠĞ€“æNãÛ~şÖ+µ&Í–­oˆ/íÄ¾±ı’>µS£ ‚k)ş4ÄºtpÁüì5ÂƒånĞ¨JæQv×šá,Iš°Eú*JŸåèîg;mÇéNÍT,İ©ËŒ" Oû­Gyc3d
‰Z‘{?{ÏÉšõSØ¼ÒÌ"o½ŠlOŸ ~VÜ8ê)ğw4p1âQ,iFêÜıX©É¹Â}áö~—İv‹tÚwóÙ´[JA Åløõ&Fûf˜÷†Hzñµ5,™xÔfK›Õ z&Š#;ÕŸ÷}hê:ôî>IˆNG5šwfOÅ~Ü=š¡l-“c_H4M£ˆJ~´ôzğ–A)ó¢ò,ÃÜñ
“ğN¿î:ç­%‡³Båléz™G0µL8ëã½©¥gR—™'nşïä@¼„;Ï³íËŒ7ŒTw˜Àô–ã|¢½÷ {QŒª|ò^_W€d öh\NLl£gœùÄ–šBÛİbå¤%PıûizıĞ£ôO!Ş§ïgâ­º=ŒñvNO;GgxÙŒF};jÿ­ò¶Y>Î+|Fv)<a´†½0M®Û©,9BgÁuŸ²%5)&ÆD4Ë’ÓYÅ<şÃLüÚ[A¨[şÙ{ªJüËJÊzË‡Óü‹Ì¾÷¦ıié¼]§ã™TÄæTSfP¿yËôy²á˜˜eƒÃ:U+ÀRoY ¬îh6u ü@F¢ñô™0i{/h/1ôÎ:˜€ïr@%ªu^l q4ˆÿ©±Jiï=ÁvíŠ¹“~ ÕK=0Ù{èä•»û¨ØÜ±Ğnh“Sîc._X¾/¹´<ªz¶µOûÙ”
z5ÔÒ5åìê¨cO¯ÊN¢¬Ù™*œ¯½ó—O{%4Ã¤)(YiîiX™~"«7›br £7Âñå×'&m5#–´ù¼ÁÀŒk‹Ÿ©PÛ?r‰^6‘{ğ\?zˆ!R„0½¦<ïQPüÌCˆ¥½Œ\ÖMj¶Õ+!÷ßgºÈlÁJpÇ}‰• ²Œ¥(äs—‘µ`-³CûÊ‘·óoem¢š5Q×– ‡L
z#íU âÔÕ¿ôy!ŒvEÊÿ¾Ê$P~Sùà¤iã6Za²—Ã•Q¢Ö?Ÿ$²€5°`"‰SC,kroœÄ"ufÑÑŞşi'åNø3ø¤–×P?Úï@S¦ˆÎÅÎ¥'±¡„gZâ€Èìåj¦Ûùx»]áã~¶ÍQß\—e= (;:ìàşTò0Üâ­´	ŠŞ»†ËÕÉ^6|­1ùÎ³®vE<®-ä;LÎ¶:ÓyW‡´#)îÜC{-—M5óºŞVo(Şn™`ÂhíŠFóâù%ÌÀQ”qT/ÒèUU\7¼¼'òño’–0Í6ü!¾”©;•†¼X‚éÊU/Ä›5”Ü1ğİi–¾0Q£±Å¨ô8ˆÈçƒV"ë[ ÇĞYõ€Ñ£àBH5“»ú]ˆ;®šğídÙÅ±ê¹ÖÊu’ó5BLÎJ©¯ÍjWo+Ñ”›ÄlVmÛ²~,Q‚ÒcH[µA$õ„ZfÏ¿?¿4N “9¯ÀÔò¾Qá)U2ÉrÜ¹	äPä²T±r¯'‰æeŠ=ºPÇi~RÌ9A§êîZ=šŒ·4‡cƒœ0±163â­ˆŠ +ÅíªdˆØÄ·tÃ¦Î¡êÀ>1Dæuk‰Ø€{lÛTÅ¶¨3‡â¦I·Ù<GÒèK
B«Nó!¾ûÍSõwÁÃiJqÂ>oÚH·˜-…3•Ò³¶1³'ïü.`	I`*êXDÆì½ ˆ 4æò‰„©ã/·u_nšr}È<S0ÅMàDı¡¨*Î%3Êk :=‘üò·òÙ?áÿ27±±ÜÖ¶t0×{óÉb¾¢Tş/
z¡ªìP¨2¶.ïÓQŞ÷>(ÀŸP\[Ñ;)¸Sf"øf>	Ì‘Ç"ƒ ©c»KùsRõ"u¤«şúÁR}½›æDé¡j°ˆuú;µè‚¶T|KŞÎöÎeÙpòjW³in¹ŠÅ?IvÙ¡éN¶‹qÓ„±W?Úl“[ã[$g­‚Œ±õym*H—I·mg^%ÛµŒK¼÷]å;(Ş³ÁNûØZKÉyÔJşÒ‚
è±'ÜÆËHáV:7PµuÑÒÎ´äõCoœÕœœèÃ³šĞCï?e'Ÿ²“ŸCv2zE¦òbÏ|)æ_=¥¨wÍ¼”"ìö“ÓÎá®8;=;ıëáqøßÃ“ƒsñêô´sŞy³¶¥lb%Wœ¥0ø³´exT)"¥]V4Ï©?Ü9·r˜Í¨k Zè{7¤M2¥^¾¦¾1t/`š8e•6™úÄ×„d¬Ï}³I\ê†s „^Šg¾¹´Äö&Ñü`C4Ò l”äA®—ıB#'{µÄºêy<ÔcqÌ}]^ç¬Øn»¢kB‡Å'¼Ùt¹»BÉsXâŞ4	Ï8«2×kqIßù!FqS[ÅF¼Üû¼å$&?‰Ml¤è#ÙÄNHS›X‹¶G³‰eÆmb"PY+bÁ-ZqËÙD4¨l»·bt‘É«Çæ&o­©kD¢1u‡_ù5Ršb×áWÑ-h1Ff-›ùS<«Ş,'·7œ-¨§'rŸlçß‡í¼çŸîõÇûPõœ¿~sz||~ösìhß2¯zØqÎåf:ŸÜ†æ7½^Vk/+•°¤Ÿ:RÅú\•ãFÏÊÉÏyªƒàøéDÉ4‚ótä$·Åml'Xæ}jS5;tx‘“dú)YŠJ×ó#€È›6!!«¬9[Ê*wøˆ'ËU/ˆ‰ö8}ì‰íi#©Õe³àô}8Q6·Ø¼QØ\CzMG7r[^Zâv½mk.ğêê.Â+ÿFÒØ½ä‹³-Ì—@ÙTX6ô:ÔfäôƒÈfÉ$?Ç_5"VÙö/_üíF£ÀVêq{õ§ûÊŒºËƒÓJë²É©‡brÄ”Î˜fòò>ÇÜdm°¢m®£'˜pÉãğ¾´^¼yï(.é.ğÏ6QÛÖ'È‡l3¨¹$aOÚéÑÙ²&ŞòêŸ¬‰zÿ¸cîu¨û¤Œ5Î…qó$9>C¡ÆÕ«óÈ·¶¾áôdC¬ï¬.òKÆø•%ĞK8Ò,Y·u@§çòÂ®ë·¤«¬núıİ$ñA‚ ç‘¼õ5íÙÇ¥Ôy:o™Söä—i*üËèKl?û­ßû|×ûæÕâáP^àvÛÛÀ[´úú^¢½ä¬F9/|{ÇV£"øWéö‰¤-Ø3ÇMá%÷ÕQŞvïYÍûÒ[O“†qZå7r©Ûi5æ¿Àñ´c?–ëéàÎ§³sËıt†w@™¦«1YlbF‰‚]ñ|'ºîŞÈ	Oifr»·¡0À]±`m—ğ¥ÅB7‡Dş¤Ÿky¤ûeŞå²´û.–¥İ¥_üÇ'ÿñ_ï?®ğöWgÿÕò—Áè°´MÕğMÍ)uÏöëÂ;^iw¹êJáĞ1i˜|6²JÇ*ŞÙh¶NÂõu“)¡_OÅk·y1ãÇ™™ô9¿*öª´…"´şCHfâˆılÄ¿@
(8>)P¼y±séR0Òœ×OÃŸXÁœ;±ÿ4ÃÀi_™»>™ïH^Ç]îvŞ®ä&s8OÉ%ÍšÆ®»~m«;MY7;6¿1ı¸éü)Roeb&½Ú`¬Ä:ªğ©ş	YÛT/ŞKû€,{ˆÍ€ô}“ØĞ ¶‚ëi³³ÁïdrÒjßÄ[ğaSãà”ØV±9.ö@ÂGÓâ~Aİnõ·©'p”2‰Q®æ¹6Ë"ş…$×#ÈuÆ¯­H	à=‹ógbCÜÇŸ±Ú×€5¼'dè•ÌØct†“æzV_Ovçˆ[Y¹ûB.Éû’So ,Wp´Øi7__~š“niwÑ+ÉØÄ;©–vïÿ6rÍá4ĞõŞÁ4Ôì–¨µ^ÌŠˆà8õOˆ@íÆeKğÂI>òŸ!§LëÓĞA€iß¾tÿù3\t˜¥ıàõPOù³'ÿçwàÿàÿVùÄdÇğÿ*§Ïğ‘I·uçe¨®Óª7”‡AX$İ›#Eú·ëW‚
»éRÓKıt†°aG¸iÃ´Êt'e„"Ò®
ÔHÇÊ]óÔR›â;Ã' |±”´b©Úâğ~6v'»”‹}K+ôÖœ³Wïc¾—¡¹yr7§Ñ¤Î!´9[‡_‰ºş¯ìaçd	J8á[ä¦ÃR·¶ÕíØğ]Šàr½›³â}6	IyØùsuW$­sÇ¯DÎƒÌ^`,A§®ù aıA2 »JRÃsµ#ŒŠâİŒ]›‘fÃ2wó*»¦¿ÿÎ&ÿwi<øï™"ñÇ\ãšwÈõl¾£Ü¤/l± ÄH2('wTû‘¥¡Kİ£O+#‘T,@ƒõ5#™$»•|r²(òMÕûMö/§oÆÄÒ÷²dÇ{?FáÓd¯ğ©E×İ­%Šé±öÀqq“MåÇj›mÙ‡ÓAâÖ7à;]RÆ§äÜÕÍ®òq)=qqI8
o2ŸgÒ%’î~Py·¦Z.›ş}3DûJÍ4Í†ù oøyŒ°~Ÿ)7ÉÚ“Y9Tä$Î·~#Q4„Ø\kx“ÛùÌB-ÒK«„Ñ»¡lµåB^‘33‘<tÇŞdW‡&I#i˜œº	_ŠF}œüªÁ"Q›Ï5cF6Jã[ĞÅøê%Â’Ì·Û¦4eR[dóE>I`¥ˆnï¶Èo1ÆÑÆÈºù"ºU÷u=µ:NİEsùÔª¥»F>ArJÚISÄà£–õ1ª:pH-·Ci‰‘‡JÂËqGmù1/5Œ0šnóp‡ÜX‘§ºŸ6àèØ#Å“İşö€jH¤çŒô'˜3ãæŒ¿¼9cQdÎº_tÆ:ríOZBš?ie—Î³9‚/cC¾šÖ’¿Ù±:,@3oK'ÍÿĞ‰)¯í5›¨ü^3û*4¥Şf»;-nÊlÚ¾ÉºïòJ^÷µe×e^Íeê °ş×2XŞ…öÇ_†{|`²0>_òĞˆÌQîwuõ¬¿^LI•İx„H½“d8•×Şeù‚ÈŸvv1¼+?–&Ovóê¯ş"«g¯Ò¼Â[ÿ›l\¥]^üü+Y.'@ 8Ã°d°p-Èaö–Olì_«AäSÛ«¼Vå¡]áàí"eY‡›0k—àUœM‹Iz¥ŸŠ°5‘ [JÉp5«Y7—e{•õ™KÔ¹Ÿ­N=Í¥ÏmJa9€z>^f­ƒü!–\S½x(k.î^Õ=¼"ÈKìøŒÊó?ï°¤$©iE¾³`»Ì8VìÔvO}>™7W]ÙoCv~>;Üÿápÿ`õCòlG< öirfìG»ßoğò&¦üñîøqC{LL¹ç»ÊwÓ1…]ñÅeÀ>xïh6²wæíú°ô^š^6,ì5Ê_~›
u†òl‘Âÿ¡°Qƒš—çqQ¶5Îa:¹F2?òÑZJš ÿzş=lu2íú„O=»I+(ÎgÊ›ó»<`ù„¿ßî<>ú?PK
    iY¤@S|W|  R  6 	 bwsewell-tablecloth-3d8afb6/assets/js/bootstrap.min.jsUT Æ¤OÅ<ÛrãÆ•ïş

vQÀ‚¤™u%
bvg§*®Jâìzªò Ğ[ AÂ\ ”F¡˜oßsú†îFƒ¢$Wü ‘@ßNŸû¥›ïŞ}ónòŸuİµ]C6Ñ/í$}œü¡ İd:ùÃ]^CëÇzóØ”ËU7yyõ~òù¡ì:Ú„“ÖYÍ«®ÛÄÙlE£ºY^TeF×-m/şôÃÇOùéÓùûè2ê¾vß¼»øæ¤Ø®³®¬×>	vÄWOÁÎÛ¶t”Yç…$j·›Mİt€¶nKì“hïI3I“¼Î¶wtİEi?>=©GùåSEñ#Ì’4j»ÇŠ†y’i3$ÉvÓ¢\Óüé)‹şFÓ/e÷y´ıÏõ?4¶ãm?º›fí¶Íz’O§;ºÎãÁ½~Ü§uîÉş$J›ú¡¥MôÀ CÏvì÷ïê”UE°g¿jö©7´!Ó©}js¢ L÷~°Ç¿`ï?”ë¼~ˆ~ùï-mƒĞ ©NÅßÄémN:r—í]Ù¶‰G*ÚtŞâÈ¢FfÈYÁW/şùâ…iØ­Ê6Êªº¥Á~–E›¦îêîqC“]V¯amÖÕMœ…¬K¼4ØÉï“PIâårIœzÂv¢†ŞÕ÷¶ƒ f	ñq­€±é:èÉ@îH³¤ìÎ€Œ~ßºjháaw \“m*’Qÿ"zçÏ“ooş{»x÷]pz^ caö>,(§Ói
»¢÷À£ÿE²­:;Vt½ìV° …W¤ıX‘¶õŞ‚y.HƒüÀ5¯ØœU®a%—8M§T›¼ 9S¤€«w¼A\ À|Å:bğ$:Ú{2ºQP¾ÅĞ¹B4MòQ¬v5£ ¿Æ+è³¦“ŒB¤|] ?%ò×zéÁnÓE”‘ªgjpE{I²ĞĞ4°*Oc71ˆQlJä>á$¾œ÷{ì„Àâ1ßQ®• iÀy¼Ş`Ÿ6!ıÚ¢ıØJºí:À}Î™£…9ö³tLÒ°¥İOé4Y J“€ø‘´æ±3à`LÏdÉ¢’1Íf‹¬æİ“Ê‹½UwWy3rú ôBdyXP»qª©W°Â-] o²Ïü–,ô}Â‹ aı\ŞÑzÛ¤êV5É¼lª9H\sM.}i˜ :—§’éÿƒu N¸„¿®^.+jkUbn_Š’ĞR|LâqÌ·çÀRƒ²
f &@~ß‹Lx?5ù64àSZ}ö…Eø)âÓÀÒE"ä$LÖé/xq:Ítñ}…|¥l.m áÀz ø7PšB² ¨ÍâÎd§Q.–dŒ¢È3ûë’™>/™r%šN©ŸŞ¾ğB]IµF\‡3]“¦ 
ôkìÎD»í€¨ì-`A¬èK\à†ÿå’Ÿ‘¦†I+]ö!Q[•9NÙ;öİ6[C6¦"¯€gOŒU|Š[¾ÃEášP4_ù´lhÈUqß³¢˜Ùì™=f•ìik+lÒåQgõW}“ «ı ¾ûÆÌkÀŸØÜ–É_£ÜÇC^0÷jÉ1ÓÒ¦FÙª¬røîs	ƒ®ô+ğ=ÊL2+?½É…•>¿zzJ¯/¾“™¾!¤ ÀÜÆ2õ=lÒ7Ô[AôIç=ÊÄÈ¡Féô†Î=D(gt € gÓ`<dÃH†IH£k \àSQ`½­*K\DŸ6¯onlß°GÂğ½n¶3˜=Æ¦@qEx˜¨`Í@ëZ|I;µÅp™ #Á`œ{-“,ĞñÂ•ŞT”M‹m 8 ©ä ÃŸœ\†…%A1XX:qs;a,;zç·+ ùI÷Ä$ø&bNÜ.œ9y?	Cpß2EÒUíÌ’»,íÍ®eÖÔ¶¯l3§ÏàÇ>ÕmwHo/Q] Ş+ónk«æ¥±âr`Am°‡"5î³öœGÍŞ¦árıR— Ì& ¯kÇ&zneƒ90,u¤¸ıšrOÌUI$	içâgƒ7»	r¢ãÕ{è*hc×Û»Ìó ®Xk~:³´…°Hsz›×ÇTîT¹“—ì¤¸ÆßÓB±	ãey¡SÑ¯e»ÊoB‰,¤sŠ 1‹ÏT„X$'T ü®ÎÁãĞÕì*İsé§C´¤vàH¢ÈßÄe©«ŠlZ:î²p;
­Ä^­N5”ûbBF¤kz0ÊA
AÔëç€^k> ^‚XT¦Yæâ0e¶lÑª~æiØ„jA¤ '#w´úHÀ"ÜzmÖ v ¬”Šã	/˜Ä‹ş¤,Åšç¸Müi-Î”•| ŞãzRfÙ1DëX:ä¥x×+PĞ„B'‚xàÎÅÇÚVÁ8Ü|q¹ 1É^¦Û €†/nQYiÍCX 9€KSË Û-ûÈé6‚[Û‡lvGd<€EW¬ŠI3Ù#7N<²íjx²,œÇ¼Gglì`aĞQ8±j·†çænšp]¬'E™ÊE*aÀÆ‘‰vu`yr·ÍØ†åŒÆD§‡ßáï>—PrDê8ÉíØbßœS=æ;^ôi)	ÉÛeO’cŒ¥’¯CÆRË\¡ìmŸ­;“ÀÉÉ¥İå¥¦NMí ÙáY£7bò†Öç5fpL|p?—ax,­ßŒõSº®8ÂØ©|pÎ”}°gv½Aı±ObËôPŞÔ›¡™ÆÖ3:dwš!ÃñÛ3ctY?¼ƒÃ	s[ÜÔ¡uX„K©©ÈO	q|¸î9”ç„‹>Ï]$zF{	¾b/ë|C!.<YN§…™N­'WRú%ÖŞœ—V6RÓêí«³ÓŠ¬‡ÔÇ°CJÚ!ğf6[pİÑB“~ğ»;ÆI5¥_£JŸ9*ˆLÓ~yÌ^b04	À|†#Ógöš¼Ë“Ğl€Ô¨0Ly”OÀÚÏ@ÍRh'%ş{ŞLf:Êö'tš„ñ”mJ²/H*iÏİö6Ø‘½SO¯óò~’á¢	Îeëäô,?;õ&7§Ïn@8òÏµo”I-¿Z<A¾%]™©´ l‰W™™8Ä¡Hñ…Ôàö‚Ôt}˜Í]Û¹Õ~şi§`6iÕÒnÕ,2ñ¡f=¶&öq_«ÄX!0ƒÁ>¦SÜŠQªtí
Y~®¸4Äsv€å¾ĞÇ´&M>'Š'¸â€†í&Úˆ¡¡®Hô°*³U’¼ÿ-¹íENR,öôdL*À9¯Ó¼:BOgf¦ÍMkOK,GØÅe¾Xe©Í=qñÁHrèjåVGÁĞ)=0ÚúA&üzŞ‹
saíôA˜~K–!`N5®Óu\h•h t\f'Z£òGd”ªµ©"­B‹³>ÎÖ$úŒ¦ÉæéË-H:‚4æ@Å[íÀl„³š4>q¹áf&9¯4›n(-ƒ¢ĞŸç ~-Í—i+Æ¹n*…cÃà{sĞ%t:‰v~‰5õÉ¥\fÅœ¡™áµ	á?"0“ÙÉ‚ñ#+|2¾Tî›	D²“:â´PªWüÎÄ^Ån|Ô7±”râ¬Diºi¦ÒJTöÑÙ3	KçA6ÉQÜ!“AÀ+Ø‰êNÙaÙ¶®ºrÊ*vìïÎ®„K6*X +±É]BÀëüÏûp®_³3JI«l&—QpºîÈzˆd9=WU­ëµÙØ+@‘¶,k=3ˆ—ic/­¶7(øÔ*,C"È4–laéó¦(™‚!¦°‹Ùb w°ş×•cÖû‡;±ÓX"0”3€ã-ı’¢üú¹ìX¢8ì‰;"Ãt mnù½Ê±A27Ø%ğGÈ#èPòç¾8‚‡êÄ»Óâ‰[ñ°ÇSv!Ã³34O£lÛ ıÌ4h úÚDE5ƒÎ¦ÙROOö¦ç@ÉsuƒÒ`ÄÎ|$h6F
[F?Ö”¯Tš¡k¬Q3Nø6‰è†Mr÷ÕŞ$ììÈ]bOÜ¦pƒÛÄ÷ÁˆïGB¦gBÊ’)ÒDs[åÑ¦Xè<Å7Ynd$ @ªŞ¦‘uyG¸='šÄmxŸÆ4.¨ğ™bK<	¬7wwÑÜGŞ™•á¾\ÉŒÓä¢\_Dµ)Ğ‘±M”€»,èeˆuxø Ÿ>¢¾ª³/ Î½ÿ˜šÙåØò'3¥‰ÿZ‹RAŠeb{’TõGVÜ™µeNJ:ã¿©Ğ’L¼àöjÀ ¤¥`¡»®¾óâeÂàÍ"ø\À†sà³?à%+]¼?Ï/Şƒ	j(ù2csÀs‚szäH~HÁ¹6ô¦ïõyÎsc,?Ùpì`	Ä~Ou–Z$R–ëî_Ï#•Æº3uzNèór½İD˜ëò%á„ÆîYDcáI	Şd½™pBLÖ	ßš£Òdä|¹Ë0&ÜÓUıYa­Ê^—¡JÑRSñƒÇ*¡¦a){¡Ã£†Îzî÷'$pi	Ÿ)…Î`[Ü#ì°7z‰Baİ‡¬çå‚ÑëD¹Ï¬p=Ş3LïyÆÉMÙ ÔT
qì¼XÏ+ÌºKw™wİ¸§sCÙì­ó9\#€Zİ1ˆmgh.@c}¸ZÙsğÜèSë,nføsª¤‡ğ¾¼Œd"öÊPäâÈ2-^c%¬z	DèêŸ	Y=A„ >8ÿïàO–hxaåfŒ ÈŠ‰ú†Ù Ó7¥w0oG÷¤*sãœ²•¤E$ò|Â_ê+*_ã[ÎgVM9ã¬¾ÚÏÁ½K¾Å™èñ>W²4ù‰¿ï©?®g21?¶˜)Tå›ÃjUÊTÔk*™b°ìêM}ô¬Ü™™ï‚©<ù“«P91³œ¡rûy|2>—?”ÜÙq¹“ÇËsÒ4€ì›ëhsvàöIv`ÿO÷¿^œº©7|Ã8uûp`µï¯ŒØãTw%{gIèQYÛXjî%€%¬¶ W*[ÂÜn`ÈæwÔä•Êƒ	2>÷äfò®Ÿ&?8MÓİ§/0a^É‹ˆ¸ ï›)í1¯æuj[ìÛÔ×â¥¥±Å[Sg‹—¨µÉ¯¥¯¥jeº{LaK•}öû€3¤ æ›“‚£“’˜×(&1Ø¥˜d“RL£ò§R;M3‰sÃ‚>ãÚH‚o(›Q-$ÅEj¡Õ»…K"]}p”ws½NC‘Iuvl8Õ]›7š:£mJÊ²ú^"â	Í91;C(k£§ùI¹vó8<Føo·:vWMœ¬ÃÌâ¸ˆ•¹5I,æfévö€¨›E}"´8˜e.Ó™7‰Öä~R• ÉˆL«á¦W6w   hh»’n@®oÍÂ9M1ÁÀSá©J&×ËAtG6¶Ø¦Rl$	%wñó·q}Šî?"Sœ}OcV¨”)
æ#Åq¦Ğå²³C:2ˆGÿt³g—	>ÆâƒAÊ?×`ìÎâsP¤€©0L %Œ!?òÍ³Q!uãSĞë|‹3z~>ò“oºÁæo’”}ñOàóìjNğuÂ¿Ê´›]¤‚¨›Äóğdâl°~BÂgÈ'ŠpÏŞPKóÁÙé-R9ñNÏÈÙ)^S3W¥ç<*ŸökË(ç@…-Æ„iËª*£şdc½­ŞlaÔLÇÙ˜¾û«¬L¯¾vf¨Û’ç¾ø
KEfEHÔ{òü0Âµo%¢à®©E0åÌÔo<.c­ øêøéŞaÒxb[ÅëºóM¾	Ø­¬Ô}¬¿¾üB6»¿e²óøå<áf\+Mú ØxÚ¸^–[wˆ	ÀFëŸs©éz“:^© eçT{ª¬n®«®Ëî
FºŒ$Ô­(Äæo&&qÀâ=«a\J¢˜3oÖ*ê›	E¬¼\ı_OÁ„È!ââO]m?@ªÓXÇİ˜ŸìÎü„à2ˆ—¬Ú9Èë© Ÿ¤oğIjTÄ†;2|'éKëÔ8d´J`,Â‰ùrSVƒÊµ£@,İ˜Cfù-îµ ÖÈŠ’|è‘Ş‘.[Adxâ¥*Å“p÷€?ìîüèÍB‘îZ®*-ìZƒ¦½J†Ğ1µÚ×R%%dÛ&£6døN´ËÓ)¼’[¶Ş}æ×Ğ™sÕ˜ÁuzMÙß“jK½‘Ûìj°]†ÎVd½T	BY›s£AaÙ‘ >.»kÈv¥*Z)+´¤F…(e%éóâì“èKqÄ®jWÓ³¢•öaU×_¶G•y49¸³útÿ‡Ò”-æfÍs£¿%X_cã¨ ˜×Lr=<Ò¡ß«ügrŸ¡‚ˆ}Ö9¾Ç›‚`½­3xe/Ÿ‹
u¿ß¹Foöú`ã>°7òŸ˜WùSı@vm+àW¿5Z† ³òÛŒã^Ñí¼ø—ã?:{X•õÙ1ßUYàAwúÒÅæÿ¤Nx4k³…‘â¹,ù-•ß$‰SÌe¤óÑö#_)á@Ä„(
ÈÿĞå§¯ßó½³~İ3/ğB¯\zškÂRœ|
ïTA½^Şxgé™w}!Ÿöì*z„/gı™Œ€4E¿EkÏîpè0ïD–3]_Bë=ïÙ k7zûYˆÎ’Ê›ZæyëœjÎí1áy,œËfy7B{c*t1+è—¨ûÊºso^u{	Hè¦ã\¬.©@rì¹ÑÜ-Æ:§&n3FK>Ì¡à”Œô¾Òwâ}ˆğÚŸÑM¾¶ºn7Ã~Û<ÆäÛ?¤ñzÿ‹YmI×odÀü
È! tv©ûµ2)ß~SCüú¢ÔìŞ·ÊCË!ÛAhqˆ <ëœò£“»ŒÙç‡ßÇı±€É¿ó—WbuLµÕ©j9¬ôßÿîĞ®mEá3q•Ì˜eĞ‚`ÿ
:YÎl³Ö-æPb5¶,Œcé‘÷{”×Ñ·vÉ8&	Zg@ëXg.É®îCäéñœİ­‘şÌÕ÷x™•±1Åq’‚-T<âı—(ŠáÁ­¹åP¿=ê‘3YØTİ_WÚÉ;@1˜xæŸÄ¿kñéõ¶RåD9lbÆ­7×Ûêæ”„UysM&<íö-6øƒ—§ƒÕÏØ!Ql;Jír|¥Áxğ@ñŒùvÔK	t„pY¿ºŸJGÍşPK
    iY¤@÷-äoƒ  wr 9 	 bwsewell-tablecloth-3d8afb6/assets/js/jquery-1.7.2.min.jsUT Æ¤OÄ½{ÛF’6úÿû)DŒWÌ%:É¾; `Ç'™ÍmÇÉÌRt~¸Å›IÊ²#r?û©§ª»Ñ A%3ç¼çdÆ".¾VW×½.ŸvÎfÿu—o>}è÷şwïÙÙì=îzéjq¶77«Mq9/Ó|¹ÍÏ^ş/r·LwåjéÇ*	ÌİYúÉƒ‡M¾»Û,Ï&½rûs¹ÌV÷ôp‡qo¹Êò·ŸÖyEÆ½,ŸÄwóİßÊü~¿{ëx“/wòEØéªZïPk9ñ;élƒ‡ñæ,‰Ò^²Ê>©,šøŞµ×»Şs/èÅëu¾ÌŞ®ü$Py”õÒíÖ÷²r»ÇŸ¼`õ6ùbõ!÷ƒUˆxËÕ2÷ö{¾ö‚‡ôv¿÷Ó[ª>İäñ.ÿz/¨_¾WN6ñ"÷•Şöøò«Õ&Ë7İŞ—ÙnŠ‹i^Ó]t¨D÷äå´œgT·×Içû}‡ÊÕªÒyäãáj¹³3°ßWO^­Ò;.ØËô•Jç½ûM¹Ë}ÒÛŞ­×«Í¦ãã÷4Ãó¡wİ¡‚;šé³én1î…4°®wÍ7×˜µçÆ¼—ÎW[LEá¦6Ü˜ lm fuÂ³š©j^i¸2¯v¸^«(?hhà[gMw:XÊ4z8&½<N§~ºÆ Óx‡VçŸüÑXÑ£-`Ï¿¢eA–j´›–Ûq‚iÆib‹"ï£Äy´¡GÛ|÷¶\ä«»ŸnÕUõé{Ø’ 5p>(éƒİæ“ée~÷^ĞËùßLf9Ãû¾L7«íj²ëııûï¾yûö'Fïh44ÀƒSÙ´­2|³Û­ÿ’ÓNÛîÚ?Lh²Òà¶L¼‹_—ó]¾9?÷ÓÈ}à§Jn±Ã‚`€™Í¢êÑ–îá 
5U%í‹y¾,vS5S·Q6º«¹Z¨¥Z©õ`²ÚøEÔ×å èvyç´9úŞLÏÊ%õšéC¾¡f·àl59›ÒöÙî6å²ğ¨oùhÚÛ­¾[İç›—1`ŒVÉùh4ƒytË­cì[ì¿§^pÍùœğ=›wøÙù9.nƒ‡E4ïzg^÷V-£|´Ó®yOñ€«è,ƒ‡u”ğVèg<Ì¢U€´¤u:óxÎh¸ÔíD}…Vé»|4õÇR?W·Vôt5V+*Õ¹.£u¸æKá2Zƒ„öÌíşë,ÏÏ;ëósãÍ†š÷~XÉp·XÁÉ†°©×]Ğ.¡C°L­(ïl·¢>jÙÑu¦Ñr¸ôÓ \û+ú	‚Ã¡®c@ƒÊdóä2¯@[5©­wAw›|»^Ö~]æól‹µÇ’ó•˜¡"àŸŠQ9Ó‚”´8÷´‘sRÍá™i9Ùù¢•ú`Jõ/h'¡5BW½"ßıE7÷Mjô=İ³À³:lãy LÍŸãooG€ŞÓÒ»[Jk¥™c*‰Î ¯Á,Â%CÉƒ­,“#opš8°VòšâÅğPêço£28Ì¢Ù~Ï-Ìè=­Šb)M'fGd£ÙØÙ˜É/Àb²è x/6›øíß@#´¤BX‰"xL÷ûä•Œ”NÅŒ¾Ïƒõt½‘×õõf¢ÃÈ[1zñ†‰`ï±§rn‰ÙİÄ7ÔbT}ÃSÌĞ™I[Îõ$£|ÌUIE£bgTOİ0¡FÂ‹ñ,şø&ßíh{o{“y¼ûq²Ûı¸›ZËĞR¤£lÜğğº¦sŸ`Ãê	ºP€Úåò‘`#ó;W
“à´ÿßàÔôDÑàeèªˆ
4­ŠÑdL{‡±Á#İv»R³h:œj^–‰³oÔœû:(¯gÔA€Îœ`’pÜ<š úÜh ô"Ìk­CÅ‹Ñ|<œGIè;İ±`2½«:?§ÎÌëv?„¬<‚,¿VŒ¡ ±¹3ÿpÉ©
Œhmt“ÛÅ4JTÂ›u ¡ñµùˆ‰¬g”Ôñ²FÉ8Ø¯h^íÑÀ¸Bæ+¿.9MÓ”Î,º|wÓ½4ûUÍL‰I¨3~?ØïÑ	Z‰˜=ÿÙïé$/G³¡§g‹h’õİvêÑ¤–sÆü•l)Û]€5ÓW‘Œ«É„ïŸqš»o˜æ¢Ş»Eû!Æòæ!{~Å»3Åa’0Í&D+zĞ¦ô³‹ˆ(PÂ”óU¼ó…Ä‰•·³ÓÛM>ÒĞw)ZZÄ›¢\zÃ¬Ûöaê|¨[wFJv=–Ç_X|ÓõÖ½MÃ'Ş¤<ë«ı>‹¢åİ|à„ßî>ÍóQÂgV²“UÉ‚ÀTAÔÓxÆÕc:sĞ>Œ¶ñ+Ió‚ÖşÄ§§‡WŸÁ“5¸s4¦¤˜6‰a	4{V~ ÍLk4lrµ\.óÍ7o¿ÿ&HA¹6m$½I¹Ùî¸¸ÓÒ²jÉnæbØ‰ï¨mªƒb¹\ß/è³0ÁœmÓM¹ŞÑ€õöqfêÎn¿úô6.P!íé»%1Gå2Ï< Ê‚¨¿½¬¯[¡!-\ºĞ,SÌ§z“Nóô–X§£y¸‰³rå–{‰B9€*•+§Ê¹ƒŒ~ÿ‡§úM"´Õ0—ù&ŸÓáµÚ¼˜Ï›U4ßËç#‡¡Hn†b¸¼fŸ ,!^'7/v„,ZîíùùÑ#p±È7E^/ÖxÄ¬Q”Øõ¯/½@¶=»+Ørá,ä$+g–£ã®ÑùyõPÖh(õò©‹z·<¼TzíŞè'a9•óÍZâ®c|h¸îx~—Wó­|i”N
úºóÏ".ô}úLø]†ó²‚&Lğ´Ä•òùAw†ƒŠ›´“îƒZXÇÄ·½ô~¡“gQî~‰w;¢¹dÚK¥ÓxYäN)wÇÌ~€CÀÓéLzÓxûŠ|Z{bÊPF¿dòœÈbs“ĞyN‡_ÑË? èmËà8ó|G9ÕµÌæ¹šê×‘¦ RPP%cåŒNâ<*GéXÆƒì:dtOä£!_
e@Q¦Là æ‹È’WD$É#pÕpK®•ÕhâŞÅÉœÈõ“[w±€hJÛE­ã÷„WÀ¢‰õ‡AW=ùk…Tÿf8µ=Ä şÜÔöz\ƒ\Ã’è	šGAÒ[¯Ö~Ğ&(xk($JôáX£{–T¬ù—åÃ:‚ø˜p=S±m@”¸Ë`ıF…ú-­Õç†æ«ÈRC$µTSURƒf©éG!ÜMDˆPß;)0÷Qpø]ı¥Y[
ÿØz]Iß«™~Sõ«Ul„~?P+ îjvdÿéÛ
®ª§®:e—J²ë†"‚¤b×£#å.'Ê×DˆÜzÎÆ S¦¨i²¥$u·zMHÊ¼åok/¼t¤LÄªVa÷#ªp¢‘Ö+İ	Õ!Ri
b„N–à ®œ¹äŞğy	Ke{¡S¨”I‡rûõb½û¤EU1Q‰A ¦¼\Şå’8av«?¿ùñ/°Sx<Ãs#s *ü°Ì.à¦/¼njE·Ê»xÒ?"‘p,z©ğsîyæ9dfY”ñI¶¡¥vˆ¤Æİ$&ş•nûrŠØâoˆ‘ÿ@XcS¦Dò»Y83„ñpÒcZc¦Û0Ó27â4“^f´…;ı54­°V9'aYúdƒgvy³í^‚Ø	›c´•§×Ù %TŒbBŞÌ½²ó âĞ¸’óâ»eü¡,b"|ÎÈùŠºK]PÄW€UÛ
ä4Éãì“L_j«Ô‘îß¤›H©yNì˜YÆ5éŸUß ²CN+JõùtŒÈR×• P3ïM–„
J–ñª).S¢e`©ÔB^¾ó‡áèİ®ÇOıëÑÍıÍÏãîó`ôîùøé“ı|<¹?—à8oŞ\OŒ'Í+ñÙ˜ß'—jAO®ı›ûnp³}zs9|NU^ß\ŞôŸCz½¤×£›±
7[ªöR­èË´ëİÜÜ\&“åf7Şß®.ş_L^\¼?|q.µ.½Ñ;ZŞlÆO½= oÏ ·„í/†7Y—*ºéİdOƒ!ªÌ¿ºÔg¼	†TÉûè’¿Û‡{ (uqtéÅ†^ÜçÉm¹Fg7—c¶7îÒH·ôfµÎ71>è=ÕÄ`Ø(¶£b‹m™gÕ³;<[ıZÎçúãáÙæChŞS‡Ô‡èòÂÅ¿÷ñ8¸,uOst±Ø^\ª­Kê‚äİûW:èõî=¨OQÖ»Ûæ›ÀôWõB}¥^F‚gzëÍj·ÂN¦¯Şğ.V¯ßMõãıò§†»û¤¾øìp
@@ ^=fm€úS$5»mÊ…úæ¨|IœÄÇ'ê[PZ€Í(¯ŞF„	ÓÜ³s°İÓMMd£CpÑ)6WlÎMèÌfÙ“ıÏD$K¤2n C?õÎ÷<â¤÷˜8¢C¨iÑm5êJ•©M«¾øíVsE¿Õ„áµ\Ä
Âà¸ffD?2øê¢Ïïó;ytıù°ˆJ"0ó¬m°#T¬ğÃbˆ‚³bÔ'ú°“¢A » XœNªí.^¦,æB÷fP³:í¸ß'CaÚQ³!ÚOó¸\êóŒ9Mİ¨IëAŒ£!"ö7YFç)ŸÑè¶õ‹ĞŸh$wDÉZZs„Õèv¨8ògTñ ©7é|µÌéÙD—Bçš&’*1³­ˆAa&},
Ñˆ‡i”:4öWŸ¾Íh¢EP~~>u("Åi¯Ìh5¸ŒCº™Ogmù-¬L-@ä@MNôÁŸÑä÷Dõ;ôéf˜FBS™Ù2´æ ,w	çØ¡/åì ^Æ¶m-'nôÇ^ªZ¿csåÎe|›z…	-™CÏS2€Ğcµ¶§¬4x[şš‡ÎÙéL€¾ƒÚ­¸â–b¯šx‰S´|aÙ-º!×ªkó	ö®¯øÑÈi­yZ¡ UÀyoˆ?½u‘CÅÍ0È­Ú!†_kÅ)XĞ€nTFH/ÿ ;‡«¡'.š27Š)H¬©G{Ò.Lm™ºõUzg¢cNC¬èÉ¯¼×¥ÓÄ'ò°ë^%Ó;((KÂVŠ"EŠl(*ÃRmÒi×Rÿ"ô‰zÁìqÅ‚1h«ü}í“8êZØú½èËZ‰®Ù@º¾Sq·2RÁS “¿÷óøÑ"¨‡k=UÈB€ÿZ¯¥}S0^ÜÊãï=¥A±zÓ›­Ê¥ï)H6Ô"^·f£ì¢µ´P×0Xö‘Û€¬¦õ³²ëÀöû#@eyµ xøµÚ®6»p4îáWd¦	Á-_”%!“Ïè…È5øÎ\;İÁ.ÍÊDëºíô°¼‚õaÇÛê±ÑwÌ£N OÉ’ãÕ<Y<=ÊZE}SÑ3«,*;VêGGx–`íJhÀ”Ü3¾ã¿¸˜	‹0˜]ßfÄ
¥­ji6¦Ó—gÎŠˆb£û€ª¦/Q½“Š±›ë%|ã¸œû½_D¾˜DúıŸÆNü/QÕK:\3Z’ ´ÏGoFT5 "³(şœfœ*'·óÛ‰”»~şÃrõrµœĞr;Û%Mò„¹ ®Š@1«)Ìƒ}¡o'Õa@=~'¤‘0‚ø9&JFµšb¨ïş¡fgPªÛsÓ¹jÅ/šDƒ’¾sqá|JD‘VŞ»«f…„Óısx*ı58+û	˜@´¡ëª5ñüJW2xÁ’€ŸËİÔO#²Mˆš+
X„ä~˜;ßã
ˆp_M&öæpPQº›~<¼ •|IÛ=!Ì°õ½Qig‹|±Ú|ò´Ìë!Ì±Âj±†PÓ{|˜ü%¡ä¯!ºü®ÜÒúç›àø‘ï½úñû—b2ğİ*ÎòÌ#®¢Ó'Ê«¥ìœJxÊ4ÓéWjñ´'"^ş x¨İbTüÅƒ‰0µÂMÔKÕê{š„Q±Ó	Ñ#l¦)79ì5‡Óüöù9ôŸÁEd’hÃÔ¹höcÖì›÷¾ÚDø}GDÚoÔ£®mìÚ¨A6´ã  ¿çrøB‹RZ>éĞËøßÑŞÅÑÈ€½ÑöQäc4’0r8s¿½ÔgZ@(Ö TôÀÁ=Í	Q¢i§Ò¾€a1lJ8æˆVÔÅ«ÉœsTÑf~exÏyîÎ÷ƒêRuÕÜü8ñª–4p¤¤’)ºÊz¢"XXÂ¶ßÛNd¦À‘äÕ¦ !´C³R<Å6IµovÓÍê…5_³½–ÉJÅjøØ<WÆÄ×%fÏc	I$ì·/:ê¸‡z€¸ñ+ò¶ÀRÕ3]|©åÑVf¸RŞÿE¨ËÜ®•7vnß+¢5ÍÌú„=k=İÑ™AÀ´±¶Çúvù!—Ù_ëÿıûïªñ¦îxÓÚxÓÚxÅ6fÂà÷mı„º6C¡?öÌSe¨¯7«…ôT±FîòãbeˆŸñ7YR}(øxûi™¹'İGÑk˜wTRLH,}ğp¬‰…À×µët¸,ši­DÁ±ß˜?LM_êÒîËÕjí&ÄÍWI<ÿš>©Áa¾™Q=ğ9ÖşëüÅD@NßğáécÁRêê¨Vlbáã^y‹í…0ÔÇ İW;›Q)ôh[+w±¶eSÖd\¬eÑŸÑ•šZÁ/QSÙ×&™:ğJÙÌÙÈr’1À†MÚ§sNÌ×ø°cÚ±¸ê…‹n·µx{2Ëha¢ğó›ÍèŠ1QØÒ˜û‰eªñFÿ4|õ{^ø'ƒñT6lÎ¢Ş*÷n;0=Z$ĞXd¬'0CÒ„Õš©¶§ÇÀ,–´Êv6Èj'±¾ßäEşqí5NbÄyX©Ë‡ã¦²èTZ[ÖÎé³v†¡âƒy¾1¼ÌóĞ°kÈJ£t˜^_¿wSâç>úW*£-¦á•°Fç€åc“@¢B@šÓ)ØşÈÅEŸf½­µ™)Ìytå¨kR;mŞòn‘+Ş‘y9È¯'lF2‚™(%Vh6Ñİâ|ƒó~ª%ÉÈ‚ò„„d4Vù :tPõáŠõº“ëb0¡~°ÎVC~ÀVM´÷3fù©‹ãêÜtm—Ó³C;?Ä`Ö$ûıLx"=c³jªÎÕ³Ùi<š]€¿¤Ñ• •î0¦¸Œ	#[.ÒôR_KjŸz¤&†~ó§#cÿl`·q!_>ãüØgzüÓ#£|(uŠ»2#‹hŸŸÀâ@Æ±¶š™Ö4ŠUe£«j&Y»¦˜C×]¸<¿ÅàÒ½TMtı#		“ƒ¢‡CıXıì÷…şÍù·Û5c/*NÓ|»m,¿‘/È¨Ø^†š$,*hv·Ë9FºŒˆçb»œ÷¤®{®²Ñ|¬úÌLŠ¨o±7óÕlÄ,:ØÚÌß–†ş,J	'4·‡ĞLæ$g;&:YC‹ÑybÁùõb0'PÄP·25NÌ0‡ç€yÆŸ&„{lfo‡·CÓ@.†(|…ÂáGòı±,‰)ºWÄ UÀOâœ½‹¿ÓáÅ­²pi£3Øï·Õå®ºŒRÈg6Ş•lñrM»ğ®*Eg…ôè!!j™È£0aÑç)­—£ÏğàÊ#nn{—¸ƒ±*Ù¸&P¯£ Å›C^3…fI6±£Û;¢2Òy¼İŠ°Ñx+yú?w™l,˜âjÙë]¢lsH°Zkr~>©!)boüÚ“˜­¢’¢JînDs• »ZÜ"¶Ã3½.±_Ñ„ÄÍ¬>e°˜×ûJÄng?0r<’ÙøgŒ:Îş’_\Ÿ	Áì9^ª~ö;òF²çÎXü<öÆM+hjÿW¢4ŒùŸè¶§{Çr4}=²O¡¶WöyOƒCô«¹
œ—¢èuëémãI¼)#˜wh‚ı†M:+¬·7_\EÏmï\ÂÆ2u,:~å"ÄTÛ‘üNéJ¥Ùk²êÏQµ­âØÂô²ü·…,¶¥ààˆî|àsö³Â§¨±Í‡°²ØïaŸ@à2rÎ!9îÅ«E|˜"—°.ÀÔƒÊ´.iÚÕQ2ÊÆlÄ¤`!n.Zh2\ÒƒpZ£şà÷î–åû;:Ü;k¨³}6ıI…‚(h?¬œŞğƒ+zÑ·"Y£{zú¡¢ƒ³ãVÖ·ÔÓyE<	w~¾¸š”-ÆúÌCíLƒƒyÙîVë—¯Á$9d‹BËÏ åM™ñ‚ho˜‹[Óº—•[h4}¢i>ÃT4¨2ëú³®$9°x½)”ëè@²!RÔ$Y\béÅtŒTÃ	÷äÆŠh'µr0§‰(r¶ÛÛJ*Ù¹j,5O µ£¬(C"«I–‰,Àv4àÃŒ°äuâh~q¡èrA‹pq](Ú
BÏûZî! ¡™§z¿	@š¢+ÛkXÕ—:!’=‘îÄÜ—above code, the following Javascript library files are loaded for use in this
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