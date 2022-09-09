import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directorates-content',
  templateUrl: './directorates-content.component.html',
  styleUrls: ['./directorates-content.component.css']
})
export class DirectoratesContentComponent implements OnInit {

  directoratesContent: any

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.currentRoute.snapshot.url[0].path)

    if(this.currentRoute.snapshot.url[0].path == 'e-government') this.directoratesContent = {
      title: 'Ijoo  Elektrooniksii Mootummaa (E-Government)',
      content: [
        'Wiirtuu Daataa mootummaa Naannoo manneen hojii  waliin itti fayyadaman abbummaadhaan ni bulcha, ni to’ata.',
        'Tajaajiloota elektirooniksii /e-services/ wiirtuu daataa /mail-service,internet/ fi appilikeeshinoota adda addaa ni kenna; haala ni mijeessa;',
        'Manneen hojii mootummaa sadarkaa sadarkaan jiran tajaajila viidyoo konfiransii “Point to point” fi “Multi point” akka fayyadaman gochuun tajaajilli mootummaa saffisaa,haqa qabeessa fi baasii qusate akka jiraatu ni taasisa;',
        'Manneen hojii mootummaa tajaajilotaa fi odeeffannoo mana hojii isaanii ummataaf beeksisuu ykn ibsuuf weeb poortaalii akka fayyadaman ni deeggera; marsariitii mana hojii isaanii “Host” akka taasisanii fi hojii “Domain Naming”  qaama dhimmi ilaallatu wajjin ni hojjeta;',
        'Leeccalloowwan TQO/ICT Resources/ manneen hojii mootummaa waliin ittii fayyadaman  nageenyi isaanii kan eegame ta’uu isaa ni mirkaneessa; yoo miidhaan irra gahees qaama dhimmi ilaallatu waliin walta’anii furmaata hatattamaa ni barbaada;',
        'Leeccalloowwan TQO/ ICT Resources/ fi tajaajiloota elektirooniksii /e-services/ bulchuu, suphaa fi suphiinsa dursaa/preventive maintenance/ raawwatamuu isaa ni mirkaneessa; ni hooggana.',
        'Meeshaaleen jibaajii /Hardware/ wiirtuu daataa / Data Center ICT Equipments/ hojjechuu isaanii guyyaa guyyaan ni too’ata; humna ibsaa/power/, AC/Air Conditioner/,UPS tajaajila kennaa jirachuu ni hordofa;',
        'Sararri “Broadband” wiirtuu daataa qaqqabuu isaa ni mirkaneessa; yoo rakkoon jiratee qaama dhimmi ilaallatuuf ni gabaasa;',
        'Hojii suphaa meeshaalee TQO manneen hojii mootummaa sadarkaa sadarkaan jiranii,wiirtuulee TQO hawaasaa fi meeshaalee “SchoolNet” manneen barnoota mootummaaf kennuun tajaajilli/barnoonni itti-fufiinsaan akka kennamu  ni raawwata;deeggarsa ni taasisa;',
        'Hojimaata wiirtuu daataa naannoo  miidhaa fi balaa irraa eeguu   fi  daataa ol-kaawuu /backup and disaster recovery/ dandeessisu ni diriirsa;',
        'Hojiiwwan Galmeessaa fi hordoffii leeccallowwan TQO/ICT Resources/manneen hojii mootummaa sadarkaa sadarkaan jiranii ni hooggana; kanneen teeknooloojii ala ta’an qaama dhimmi ilaallatu wajjin akka maqfamu ni taasisa;',
        'Leecalloowwan TQO/ICT Resources/ diriirfaman fi appilikeeshinootni kan wal- siman /Compatibility/ta’uu isaanii ni mirkaneessa;',
        'Haalli guddinni teeknooloojii irraa gahe hordofuun wiirtuu daataa ammayyaeessuuf hojii fooyya’insaa /optimization/ ni hojjeta;',
        'Qabeenyi wiirtuu daataa haala bu’a qabeessa ta’een fayyadamuuf teeknooloojiiwwan ammaya’aa /Virtualization , Cloud Data service/ akka hojiirra oolu ni hojjeta ;',
        'Moosaajiwwan misooman wiirtuu daataa irratti utuu hin fe’amin /deploy/ dura qulqullinni isanii istaandaardii addunyaa /biyyoollesaa kan eege ta’uu ni mirkaneessa;',
        'Qajeelfama/guide line/ tooftaa balaa /risk mitigation/ tajaajiloonni moosaajiiwwanii ittiin xiqqaatu ni qopheessa; hojiirra ni oolcha;',
        'Teeknooloojii adda addaa /Software Quality assurance tools/ fayyadamuun lakkaddaan /code/ bareeffame akka hubatamu ni taasisa; yaalii xumuraa /acceptance testing/ fi yaalii gahumsaa /performance testing / ni gaggeessa; rakkoon yoo mudate qaama moosaajii misoomse ni beeksisa;',
        'Imaammata nageenya TQO biyyooleessa/addunyaa bu’uura gochuun manneen hojii mootummaa VPN/Virtual Private Network/ wal-quunnamaniif tajaajila gorsaa ni kenna;',
        'Teeknooloojiwwan adda addaa /IDS-Intrusion Detection System/ fi /IPS-Intrusion Prevention System / fayyadamuun nageenyummaa wiirtuu daataa ni eega; ni too’ata;',
        'Wal-siminsa moosaajiwaanii /interoperability/ wiirtuu daataa fi mannen hojii mootummaa ni mirkaneessa;',
        'Workshooppota sadarkaa naannoo/biyyoolessaa/addunyaa irratti hirmachuun muuxannoowwan gaggaarii wiirtuu daataa fi tajaajiloota elektirooniksii/e-services/ irratti fudhachuun sadarkaa naannootti akka hojiirra oolu ni taasisa.'
      ] 
    }
      
    if(this.currentRoute.snapshot.url[0].path == 'capacity-building') this.directoratesContent = {
      title: ' Gahee hojii Adeemsa Ijoo Ijaarsa Dandeettii ST (Capacity Building)',
      content: [
        'Yuunivarsiitota, dhaabbilee teekinikaa fi ogummaa, dhaabbilee oomishaa fi kkf faana hariiroo tarsiimo’aa waliin hojjechiisuu dandeessisu ni diriirsa;',
        'Qindoomina uumameen, deeggarsa meeshaalee, maallqaa, teekinikaa fi deeggarsa barnoota iskoolaarshiippii naannicha keessatti ni mijeessa;',
        'Dhaabbilee BLTO, IMX, dhaabbilee oomishaa fi dhaabbilee qorannoo fi qo’annoo walitti fiduun cehumsa teekinoloojii fi hojiilee ijaarsa dandeettii tiif haala mijataa ni uuma;',
        'Wiirtulee saayinsii fi teekinoloojii (Kaaffee saayinsii, inkubeeshinii TQO fi Saayinsii fi teekinoloojii fi kkf) akka hundeeffaman qaamolee ilaallatu waliin abbummaan ni hojjeta;',
        'Wiirtulee saayinsii fi teekinoloojii (Kaaffee saayinsii, inkubeeshinii TQO fi Saayinsii fi teekinoloojii fi kkf) akka cimaniif deeggarsa maallaqaa, leecaaloo fi ogummaa ni taasisa;',
        'Qajeelfamootaa hundeeffamaa fi hojii irra oolmaa bu’uuraalee misoomaa dhaabbilee saayinsii fi teekinoloojii, akkasumas qajeelfamoota leenjii fi barnootaa ni qopheessa;',
        'Gumiileen saayinsii fi kalaqaa manneen barnootaa keessatti akka hundeeffamaniif qaamota dhimmi ilaallatu waliin qindoominaan ni hojjeta; akka cimaniifis deeggarsa maallaqaa, ogummaa fi leecaaloo akka argataniif qaama dhimmi ilaallatu faana qindoominaan ni hojjeta; hojii irra oolmaa isaas ni hordofa;',
        'Manneen hojii naannichaa keessatti hojii irra oolmaa imaammata saayinsii, teekinoloojii fi kalaqaa ni hordofa;',
        'Leenjii, hubannoo fi dandeettii saayinsii fi teekinoloojii naannoo keenyaa cimsu ni mijeessa; ni qindeessa;',
        'Dhaabbilee dhuunfaa, miti mootummaa fi kkf kanneen sosochii saayinsii fi teekinoloojii deeggaran akka beekamtii argataniif qaamota dhimmi ilaallatu waliin abbummaan ni hojjeta;',
        'Igizibiishiniiwwanii fi baazaariiwwan kalaqaalee fi argannoowwan saayinsii fi teekinoloojii itti beeksifaman akka qophaa’aniif haala ni mijeessa;',
        'Ga’umsa Ogeessota TQO manneen hojii mootummaa sadarkaa, sadarkaan jiran mirkaneessuuf qormaata ga’umsaa ni qopheessa;',
        'Leenjiiwwan garaagaraa dhiibbaa isaan fidan yeroo yeroodhaan qorachuun (training impact assessment) qaama ilaallatuuf ni dhi’eessa;'
      ]
    }
    
    if(this.currentRoute.snapshot.url[0].path == 'infrastructure-development') this.directoratesContent = {
      title: 'Gahee Hojii Adeemsa Hojii Ijoo Misooma Bu’uuraa fi Wiirtuu TQO (ICT Infrastructure Development)',
      content: [
        'Manneen hojii mootummaa sadarkaa sadarkaan jiraniif cimdaa WAN/Wide Area Network/ akka diriiru ni taasisa;hojiirra oolmaa isaa ni hordofa;',
        'Manneen hojii mootummaa sadarkaa sadarkaan jiraniif bu’uraalee cimdaa LAN/Local Area Network/ ni  diriirsa; akka diriiru ni taasisa; ni supha; istaandaardii eegee hojjetamuu isaa ni hordofa;tarkaanfii sirreeffamaa ni fudhata;',
        'Sochii Hojii guyyaa guyyaa tajaajila woredanet ni hooggana.',
        'Manneen hojii mootummaa  fi dhiyeessa Teleelekom(operator) gidduutti fedhii tajaajilawwan TQO dhiyaataniif akka riqichaatti tajaajiluun bu’uurri tajaajila odeeffannoo haala barbaadameen osoo addaan hin citiin dhiyaachuu isaanii ni hordofa;',
        'Manneen hojii mootummaa gamoowwan haaraa yammuu ijaaran dizaayinii cimda /LAN/ istaandaardii  isaa akka eegu  gorsa ni kenna ;ni hojjeta.',
        'Teeknooloojiwwan LAN/WAN filatamoo ta’an sakatta’uun hojiira ni oolcha;',
        'Tajaajila ergaa gabaabaa  fi bilbila bilisaa /980,994/ fayyadamuun tajaajilli waradaanetii akka walirraa hin cinne ni taasisa;',
        'Tajaajila “configuration” , “Low Level Design” fi “High Level Design”  meeshaalee cimdaa/Switches,Routers,Core Switches etc/ manneen hojii mootummaatiif ni kenna;',
        'Manneen hojii mootummatiif ispeesifikeeshinii meeshaalee cimdaa,dizaayinii cimdaa fi sakatta’insa meeshaalee cimdaa irratti deeggersa ogummaa ni kenna;',
        'Kaffaltiiwwan tajaajila “Broadband” manneen hojii mootummaa akka raawwatamu ni hordofa; rakkoon tajaajilaa yoo mudate tarkaanfiin sirreeffamaa akka fudhatamu ni taasisa;',
        'Uwwisa cimdaa moobaayilaa/Mobile coverage/ naannoo ni hordofa;rakkoon yoo jiraate qaama dhimmi ilaallatu wajjin ta’ee akka furamu ni taasisa;',
        'Wiirtuulee odeeffannoo hawaasaa kanaan dura hundeeffaman tajaajila barbaadamu hawaasaaf akka kennan deggersa ni taasisa; haaraan akka hundeeffamuuf qaama dhimmi ilaallatu waliin ni hojjeta;',
        'Wiirtuulee TQO gandoota baadiyyaa fi aanaalee kanaan dura hundeeffaman tajaajila barbaadamu hawaasaaf akka kennan deggersa ni taasisa; haaraan akka hundeeffamuuf qaama dhimmi ilaallatu waliin ni hojjeta;',
        'Wiirtuulee TQO hawaasaa kanaan dura hundeeffaman irratti dargaggootni gurmaa’anii carraa hojii akka argatan qaama dhimmi ilaallatuu wajjin ni hojjeta;',
        'Buufataalee  Raadiyoo hawaasaa kanaan dura hundeeffaman tajaajila barbaadamu hawaasaaf akka kennan deggersa ni taasisa; haaraan akka hundeeffamuuf qaama dhimmi ilaallatu waliin ni hojjeta;',
        'Tajaajila bilbila bilisaa fayyadamuun ummatni naanoo keenyaa tajaajilotaa fi degersa manneen hojii mootummaa irraa barbaadu bu’aa bahii malee bakka jiru taa’ee akka argatuuf qaama dhimmi ilaallatu wajjin ni hojjeta;',
        'Dhaabbilee dhuunfaa daldala TQO irratti booba’anif mirkaneessa  gahumsa fi hayyama daldala TQO akka kennamu ni hordofa;',
        'Tajaajilli daldala TQO dhaabbilee dhuunfaa akkaataa qajeelfamatin kennamaa jiraachuu ni hordofa;deggersa ni taasisa;bakka rakkoon jirutti tarkaanfii sirreeffamaa akka fudhatamu ni taasisa;',
        'Wiirtuuleen TQO hawaasaa fi gandootaa baadiyyaaf waliitti hidhamiinsi gabaa akka umamuuf qaamolee sadarkaa sadarkaan jiranii waliin ni hojjeta;',
        'Wiirtuulee TQO hawaasaa fi gandootaa baadiyyaaf danbii ittiin bulmaataa/qajeelfama raawwii hojii ni qopheessa; hojiirra oolmaa isaa ni hordofa;',
        'Workshooppota sadarkaa naannoo/biyyoolessaa/addunyaa irratti hirmachuun muuxannoowwan gaggaarii bu’uralee misooma TQO fi tajaajiloota TQO haawaasaa irratti fudhachuun  sadarkaa naannootti akka hojiirra oolu ni taasisa.'
      ]
    }
      
    if(this.currentRoute.snapshot.url[0].path == 'intellectual-property') this.directoratesContent = {
      title: 'Gahee Hojii Adeemsa Hojii Ijoo Qabeenyummaa Sammuu fi Odeeffannoo ST (Intellectual Property and STI)',
      content: [
        'Iyyannoo maamilaa mirga uumee (Patent right), mirga alaa galchuu (Patent of introduction), mirga itti fayyadamummaa moodelaa (Patent for utility model) fi diizaayinii industirummaa (industrial design) ni galmeessa; ragaalee beekkamtiis ni kenna; ni haaromsa;',
        'Fedhii tajaajilamaa ka’umsa godhachuudhaan, oomishaalee fi tajaajila naannichaa mallattoo daldalaa  (trade mark) fi agarsiiftota madda ji’ogiraafummaa (geographical indication) seerotaa fi hojimaata jiru giddu-galeessa godhachuun ni galmeessa; ragaalee beekkamtiis ni kenna; ni haaromsa;',
        'Fedhii tajaajilamaa ka’umsa godhachuudhaan, mirga waraabbii (copy right) fi mirga wal-fakkii (related right) seerotaa fi hojimaata jiru giddu-galeessa godhachuun galmeessa; ragaalee beekkamtii ni kenna;',
        'Gaazexaa mirga qabeenyummaa sammuu waajjira qabeenyummaa sammuu itoophiyaatiin maxxanfamee naannicha keessatti ni raabsa;',
        'Seerotaa fi danbiiwwan mirga qabeenyummaa sammuu mootummaan diriirse hojii irra ni oolcha;',
        'Odeeffannoo teekinoloojii dokumantii mirga uumee (patent document) qabate filachuu fi tamsaasuun guddina hawwas-diingadeef akka oolu ni taasisa;',
        'Bu’aa qorannoowwanii fi argannoowwan saayinsii fi teekinoloojii haaraa ta’an walitti qabuun ni xiinxala; ni tamsaasa',
        'Hubannoo hawwaasni naannichaa mirgaa fi itti fayyadama qabeenyummaa sammuu irratti qabu guddisuuf ni hojjeta;',
        'Qorannoo fi qo’annoo qabeenyummaa sammuu naannicha keessatti gaggeeffamu ni deeggara; ni jajjabeessa;',
        'Dhimmoota qabeenyummaa sammuu irratti hawwaasa, mootummaa dhaabbilee dhuunfaa, waldaalee ogeessotaa fi kkf naannicha keessatti argamaniif tajaajila gorsaa ni kenna;',
        'Abbootii kalaqaa, waldaalee barreessitoota, weellistootaa fi kkf akka hundaa’anii fi akka cimaniif haala ni mijeessa;',
        'Abbootiin kalaqaa fi dhaabbilee oomishaa akka walitti dhufanii hojjetaniif haalota ni mijeessa;',
        'Odeffannoowwan saayinsii fi teekinoloojii (kanneen akka dokumantii mirga uumee, argannoowwan saayinsawaa haaraa adda addaa fi kkf) barbaaduun walitti ni qaba;',
        'Odeeffannoo fi argannoowwan haaraa walitti qabamanni qindeessa; ni xiinxala;',
        'Odeeffanoowwan saayinsii fi teekinoloojii xinxalaman miidiyaalee elektirooniksii, maxxansaa, biroodikastingii fayyadamuun ni tamsaasa;'
      ]
    }
    
    if(this.currentRoute.snapshot.url[0].path == 'emission-and-usage') this.directoratesContent = {
      title: 'Gahee Hojii Adeemsa Hojii Ijoo To’annoo Regulaatoorii Maddisiisaa fi Itti Fayyadama Teekinooloojii Balaqqee (Radiation Technology Emission and Usage Regulatory)',
      content: [
        'Maanuwaalii fi qajeelfamoota adeemsichaa ni qopheessa;',
        'Madda balaqqee uumamaa bakka itti argamu adda ni baasa, hojiirra olmaatiif Yeroo barbaadamu to’annoo ni gagggeessa;',
        'Maddeen Balaqqee uumamaa fi namtolchee gosa gosaan adda bahan ni safara; rakkoolee isaan fiduu danda’anis bifa saayinsawaa ta’een ni tilmaama, tarkaanfiin akka fudhamutti ni hojjeta;',
        'Bu’a sakkata’insa booda tarkaanfileee sirreeffama madda balaqqee irratti akka fudhatamu ni taasisa; suphaa meeshaalee balaqqee akka taasifamu ni godha; hayyama itti fayyadama ni kenna; ni mulqa; Itti gaafatamummaa seeraa akka fudhatamu ni taasisa;',
        'Meeshaalee madda balaqqee tajaajilaa ala ta’an qaamolee dhimmi ilaallatu waliin ta’uun akka maqfaman ni taasisa; ',
        'Qorannoo, misooma, to’annoo fi hordoffii balaqqee gaggeeffaman ni deeggara; ni jajjabeessa;',
        'Maddi balaqqee misooma  teekinoloojii fayyaa, qorannoo saayinsawaaf, dhaabbilee oomishaa fi annisaa niwukilaaraa oomishuu keesaatti akka hojiirra ooluuf qaamolee dhimmi ilaallatu waliin qindomee ni hojjeta; faayidaa hawaas-diinagdeef akka oolan ni taasisa;',
        'Seerota, danbiilee fi qajeelfamoota geejjibsiisa, kuufama, itti fayyadamaa fi dhabamsiisa meeshaalee maddeen balaqqee akka qophaa’an ni taasisa; hojii irras ni oolcha;',
        'Muuxxannoowwan gaggaarii  biyya alaa fi keessaatti argaman fudhachuun ni qindeessa; ni babal’isa;',
        'Work-shooppota, egizibiishinii, baazaarii, simpooziyeemii fi kkf akka biyyaa fi adunyaatti gaggeeffaman irratti hirmaachuun galtee ni fudhata;'
      ]
    }
    
    if(this.currentRoute.snapshot.url[0].path == 'innovation-and-technology') this.directoratesContent = {
      title: 'Gahee hojii Adeemsa Hojii Ijoo QQKCT (Innovation and Technology Transfer Research and Study)',
      content: [
        'Toora xiyyeeffannoo (Pillars of Excellency) fedhii teekinooloojii mootummaa fi hawwaasa naannoo keenyaa giddu galeessa godhate qorannoon adda ni baasa; sirna qorannoo fi qo’annoo naannichaas ni diriirsa;',
        'Hojiiwwan Qorannoo saayinsii fi teekinoloojii naannichaa keessatti gaggeeffaman ni deeggara;',
        'Qorannoowwanii fi argannoowwan dhaabbilee qorannoo, dhaabbilee barnootaa ol’aanoo fi kkf keessatti gaggeeffamanii jiran irra deebiin xinxaaluun kallattii isaan misooma teekinoloojiif itti oolan adda ni baasa;',
        'Al-naamusa qorannoo mudatan hordofuun tarkaanfiin sirreeffamaa akka fudhatamu ni taasisa; boordiin qorannoo naannichaas akka hundeeffamu gochuuf qaamota ilaallatu waliin qindoominaan ni hojjeta;',
        'Beekumsa hawwaasaa (indigenious knowledge) qorachuun akka beekamanii fi babal’ataniif haala ni mijeessa;',
        'Odeeffannoo ce’umsa teekinooloojii Qonnaa, pirosesingii, oomishaa fi moosaajii filachuun guddina hawaas-dinagadeef akka oolutti akka tamsa’u yaada ka’umsaa ni kenna;',
        'Teekinoloojiiwwan qulqullinaa fi oomishtummaa bunaa, midhaanii fi eegumsa midhaanii, beeyladaa fi qurxummii dabalan ni misoomsa; ni ceesisa;',
        'Teekinoloojiiwwan misooma jal’isii guddisan ni misoomsa; ni ceesisa;',
        'Teekinoloojiiwwan oomisha gogaa, huccuu, elektrooniksii fi ijaarsaa ni misoomsa; ni ceesisa;',
        'Teekinooloojiwwan qonnaa, oomishaa, nyaataa fi dhugaatii, saamunaa fi diterjetii, keemikaalaa, faarmaasitikaalaa, baayootekinoloojii fi kkf  biyya keessaa fi alaa ni waraaba; ni misoomsa;  gara dhaabbilee oomishaa, BLTO, dhaabbilee dhuunfaa fi kkf tti ni ceesisa;',
        'Kalaqaalee biyya keessaa bu’a qabeessummaan isaanii qorannoon mirkanaassuu fi adda baasuun, pirototaayippii isaanii hojjetee, gara dhaabbilee oomishaa, BLTO, IMX fi kkf tti ni ceesisa;',
        'Moosaajiiwwan faayidaan hawaas diinagdee isaanii ol’aanaa ta’uu qorannoon mirkaneessee, ni misoomsa; ni maamileessa; hawaasa itti fayyadamuttis ni ceesisa;',
        'Dhaabbilee moosaajii misoomsaniif deeggarsa ogummaa gochuun akka cimanii fi babal’atan ni taasisa;',
        'Hojii Qorannoo, Qo’annoo, Kalaqaa fi Cehumsa Teekinoloojii raawwachuuf dhaabbilee garaagaraa faana qindoominaan ni hojjeta.',
        'Muuxxannoowwan gaggaarii teekinooloojii qonnaa biyyoota ykn naannoolee birootii argaman ni qindeessa; ni babal’isa;',
        'Work-shooppota, egizibiishinii, baazaarii, simpooziyeemii fi kkf akka biyyaa fi adunyaatti gaggeeffaman irratti hirmaachuun cehumsa teekinoloojiitiif galtee ni fudhata;'
      ]
    }
    
    if(this.currentRoute.snapshot.url[0].path == 'quality-infrastructure') this.directoratesContent = {
      title: 'Gahee hojii Adeemsa Hojii Ijoo Bu’uura Qulqullinaa (Quality Infrastructure)',
      content: [
        'Maanuwaalii fi qajeelfamoota adeemsichaa ni qopheessa;',
        'Inispeekishinii meeshaalee safara hangaa, ulfaatinaa, qabiyyee fi safartuulee biroo naannichaa dhaabbilee fayyaa, daldalaa, oomishaa fi tajaajilaa kkf keessatti argaman ni raawwata.',
        'Meeshaalee Safaraa aadaa gara ammayyaatti akka jijjiiramaniif qaama dhimmi ilaallatu waliin qindominaan ni hojjeta;',
        'Qulqullina oomisha warshaalee naannichaa eegsisuuf qaama dhimmi ilaallatu waliin qindoominaan ni hojjeta;',
        'Manneen yaalii fi meeshaaleen yaalii naannichaa amantaa akka argataniif qaamolee dhimmi ilaallatu waliin qindoominaan ni hojjeta;',
        'Ragaalee Istaandaardii akka biyyaa fi idil-addunyaatti qophaa’an walitti qabuun hojii naannoo keenyaatiif akka mijatutti ni qindeessa;',
        'Sadarkaa oomishaa fi tajaajilaa naannicha keessatti raawwataman hordofuun (inspection and monitoring) qulqullina isaanii ni mirkaneessa; bu’aa qorannoo sakatta’insaa irratti qooda fudhattoota waliin marii ni gaggeessa;',
        'Argannoo sakatta’insaa irratti hundaa’uun tarkaanfiin sirreeffamaa akka fudhatamuuf qaamolee ilaallatu waliin ni hojjeta;',
        'Oomishaa fi tajaajila sirna hojii ykn bakka hojii ulaagaa/qajeelfama taa’een madaaluun ni mirkaneessa;',
        'Hojii sirna safara fi suphaa meeshaalee safaraa irratti IMX ‘n akka gurmaa’anii hojjetaniif qaama dhimmi ilaallatu waliin ni hojjeta; ni deeggara;',
        'Hojiiwwan Bu’uura Qulqullinaa dhaabbilee ilaallatu waliin qindoominaan ni hojjeta;',
        'Muuxxannoowwan gaggaarii  biyya alaa fi keessaatti argaman fudhachuun ni qindeessa; ni babal’isa;',
        'Work-shooppota, egizibiishinii, baazaarii, simpooziyeemii fi kkf akka biyyaa fi adunyaatti gaggeeffaman irratti hirmaachuun galtee ni fudhata;'
      ]
    }
  }

}
