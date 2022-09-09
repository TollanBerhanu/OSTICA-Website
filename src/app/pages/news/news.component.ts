import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = []
  
  constructor() { }

  ngOnInit(): void {

    this.news.push({
      image: 'project.jpg',
      title: 'Waliin tahiinsa Abbaa Taayitaa Saayinsii fi teekinoloojii Oromiyaa fi Inistitiyuutii Baayoo Teekinoloojii Itiyoophiyaatiin',
      text: `pirojeektiin haftee bunaa xaa’oo uumamatti jijjiiruu (vermi compost)
      xumuramee jira. Pirojeektiin kun Godina Bunnoo Beddellee Aanaa Coraatti hojjetamee
      xumuramuun wal harkaa fuudhinsi taasifamee jira. Hojii daran ulfaataa fi fageenya 500 km
      ol irratti hojjetamu kana milkeessuu keessatti gaheen Daayirektooreetii Qorannoo, 
     Kalaqaa fi Cehumsa Teekinoloojii, dhuunfaatti ammoo gaheen Obbo Jamaal Hajii ol’aanaa ture. 
     Galatoomaa jennaan! Hunduu qixa hiriiree jiruun xiiqiin hojjennaan waan karoorsine mara
      galmaan gahuuf jirra`
    })

    this.news.push({
      image: 'speaker.jpg',
      title: 'Ejansiin Nageenya Infoormeeshinii Hojmaata Eeruu Malaamaltummaa Fi Qabeenyaa Ifoomse',
      text: ` Finfinnee, Sadaasa 10, 2013 (FBC) – Ejansiin Nageenya Infoormeeshinii tajaajila hojmaata eeruu malaamaltummaa fi qabeenyaa fooyyeessuu ifoomse.
      Ejansiin Nageenya Infoormeeshinii guyyaa farra malaamaltumaa akka Ityoophiyaatti yeroo 16ffaaf akka addunyaatti yeroo 17ffaaf kabajamu kabajeera.      
      Daayreektarri ejansichaa Dooktar Shumatee Gizaw hojmaata malaamaltummaa ittisuuf tajaajilu fooyyeessun danda’amuu eeraniiru.      
      Hojmaanni haaraan kun tajaajila eeruu laachuu, galmee qabeenyaa fi gabaasa muul’isuuf kan tajaajilu ta’uu ibsaniiru.      
      Odeeffannoowwan malaamaltummaan walqabatan qaamni kamiiyyuu bilbila harkaa, Koompiiyuutaraa fi Interneetii fayyadamuun iddoo jiruu eeruu laachuu akka danda’uu ta’ee kan qophaa’e ta’uu eeraniiru.      
      Hojmaatichaan Komishinii Namuusaa fi Farra Malaamaltummaa waliin ta’uun kanneen qabeenya isaanii galmeessanii fi hin galmeessine haala salphaan adda baasuun kan danda’amu ta’uu ibsameera.      
      Hojmaanni ejansichi ifoomse dhaabbileen mootummaa hundi akka itti fayyadaman kan taasiisu ta’uu itti aanaan Komishinii Namuusaa fi Farra Malaamaltummaa Komishinar Waddoo Axxoon ibsaniiru.      
      Hojmaatichi farra malaamaltummaa bifa ammayyaan hordofuuf kan gargaaru ta’uu kaasaniiru.      
      Sagantaa har’aan hoggantoonni olaanoon Ejansii Nageenya Infoormeeshinii qabeenya isaanii galmeessisiisaniiru `
    })

    this.news.push({
      image: 'lock.jpg',
      title: 'Dhaabbileen Nageenyummaa Saaybarii Isaanii Eeggachuuf Yaadota Furmaata Fudhachuu Qaban',
      text: `Finfinnee, Sadaasa 7, 2013 (FBC0- Dhaabbileen nageenyummaa saaybarii isaanii eeggachuuf yaadota furmaata fudhachuu qaban Eenjansiin Nageenya Infoormeeshinii ifoomseera.
        Ragoonni dhiheenyatti ba’an akka mul’dhisannitti yoo ta’e, damee kaminiyyu, dhaabbilee guddaas ta’ee xiqqaa bakka kamittu argaman caarraan haleellaa saaybariif saaxilamoo ta’u isaanii olaanaa akka ta’e ni muul’dhisa.
        Ta’us dhaabbileen haleellaa saaybarii ittisuuf yaadota furmaata fudhachuu qaban keessaa:-
        -Imaammataa fi tarsiimoo nageenya saaybarii kalaquu fi hojiirra oolchu
        -Sagantaawwan garagaraa bulchiinsa sodaa nageenya saaybarii, balichaa deebisanii dandamachuu fi itti fufinsaan kalaquu fi hojiirra oolchu.
        -Kutaan hojii sodaa saaybarii akka walitti hin buneetti hundeessu.
        -Teeknooloojii barrii hojii isaanii dhumatee jijjiiruu fi ammayyeessu.
        – Dhaabbataatti haala saaybarii ittisu hojirraa oolchuu ta’uu ragaan Eejansicharra arganne ni muul’dhisa..
        Karaa marsariitii (weebsaayitii) keenya fanabc.com/afaanoromoo nu hordofaa.`
    })

    this.news.push({
      image: 'woman.png',
      title: 'Hojmaanni Fayyadamtoonni Seera Qabeessummaa Qorichaa Bilbilaan Mirkaneessuu Danda’an Ifoome',
      text: `Finfinnee, Onkololeessa 6, 2013 (FBC) – Hojmaanni fayyadamtoonni seera qabeessummaa qorichaa bilbilaan mirkaneessuu danda’an ifoomuu ibsame.
       Abbaan Taayitaa Nyaataa fi Too’annoo Qorichaa Ityoophiyaa dhaabbata gargaarsaa Ameerikaa (USAID) waliin ta’uun hojmaata fayyadamtoonni seera qabeessummaa qorichaa bilbilaan mirkaneessuu danda’an ifoomsaniiru.      
       Hojmaatichi I veeriifaay (i. verify) kan jedhamu yoo ta’u, interneetiin kan hojjetu ta’uu ibsameera.      
       Ministir deettaan Ministeera Fayyaa aadde Saahiralaahii Abdullaahii hojmaata kana fayyadamtoonni haala salphaan fayyadamuun seera qabeessummaa qorichaa mirkaneeffachuu danda’u jedhan.      
       Daayreektarri jeneraalaa Abbaa Taayitaa Nyaataa fi Too’annoo Qorichaa aadde Heeraan Garbaa gama isaaniin, utubaalee sirnoota bu’uraa fayyaa keessaa galteen isa tokko ta’uu eeraniiru.      
       Qulqullinna galtee fi fayyummaa isaa eegsiisuuf hawaasni abbaa sirna too’annoo akka ta’uuf teeknooloojii kallattii kaa’ame deeggaru ta’uu dubbachuu isaanii ragaan Ministeera Fayyaarraa argame ni muul’isa.`
    })

    this.news.push({
      image: 'working.png',
      title: 'AbbaaTaayitaa Saayinsii,Teekinoloojii fi Quunnamtii Odeeffannoo Oromiyaa kaaroora bara 2013 Irratti mari’atee Mirkaaneesseera',
      text: `Wixxinee karooraa Bara bajataa 2013 daayireektoreetii karooraa fi bajataa ATSTQOO dhiyaate irattI mariyaachuun      
      Hanqinaa fi cimina karoorichaa irratii mari’achuun akka sirratuuf Hooggantootaa Ol’aanoo mana hojiichaa fi      
      daayireektoreetiin hundi iraatti mari’achun wixxineen karooraa mirkanaa’eera. Haaluma kanaan wixineen      
      karooraa kun tarsiimoo mootummaan saayinsii fi teekinoloojiiDhan oromiyaa keessatii hojjetu giddu galeessa kan tasisedha.`
    })

    this.news.push({
      image: 'meeting.jpg',
      title: 'Kameeraa Nageenyaa Hanga Fageenya Kiilo Meetira 5tti Suuraa Adda Baasuu Danda’u Finfinneetti Dhaabamuf',
      text: `Finfinnee, Gurraandhala 10, 2012 (FBC) – Nageenya lammiilee eeguuf kameeraa nageenyaa hanga fageenya kiilo meetira 5tti suuraa adda baasuu danda’u dhaabuuf sochiin eegalame.
      Ministeerri Innooveeshinii fi Teeknooloojii fi Komishiniin Poolisii Federaalaa dhaabbile damichan muuxannoo qabu waliin magaalaa Finfinneetti teeknooloojicha diriirsu haala dandeesisurratti mari’ateera.
      Kaameraan nageenyaa dhaabaman kun yakka dursanii ittisuuf kan gargaarudha.
      Finfinneen teessoo gamtaa Afrikaa fi diipiloomaatoota hedduun ta’uun hoggantoonni biyyoota garagaraa gara magaalichaa si’a galan eegumsa cimaa taasisuuf tumsi isaa olaanaa ta’uun himameera.
      Ministirri Deettaan ministira Innooveeshinii fi Teeknooloojii Jamaal Bakar nageenya lammiilee teknooloojiin eeguurratti xiyyeeffannoon ni hojjenna jedhan.`
    })
    
    this.news.push({
      image: 'zuckerberg.jpg',
      title: 'Feesbuukiin Tamsa’ina Odeeffannoo Sobaa Ittisuuf To’annoo Cimaan Akka Taasifamuu Waamicha Dhiyeesse',
      text: `Finfinnee Gurraandhala 9, 2012 (FBC) – Feesbuukiin tamsa’ina odeeffannoo sobaa ittisuuf to’annoo cimaan akkaa taasifamuu waamicha dhiyeessera.
      Hundeessaa fi hojii gaggeessa olaanaan feesbuukii Mark Zukeerbeerg yaa’ii nageenyaa Jaarmaan Muunikitti taa’ama jiru irratti  haasaa taasisaniin, keessayyu walitti hidhaminsa miidiyaalee hawwaasa irratti odeeffannoo sobaa tamsa’aan ittisuuf to’anoo cimaa gaafata jedhaniiru.      
      Mark Zukeerbeerg biyyoonnis odeffaannoowwan sobaa ittisuuf to’annoo cima taasisuu qabu jedhaniru.      
      Hojii gaggeessa olaanichi feesbuukiin odeeffaannoowwan soba ittisuuf tarkaanfii hedduu fudhataa turera jedhaniiru.      
      Kanumaan walqabate fuulli feesbuukii odeefannoo sobaa tamsaasu miiliyoonnii 1 akka cufamanis himameera.      
      Dhaabbatichi kanan duraa beeksisoonni siyaasaa akka haqamuu taasiseera.      
      Torbee kana eegalee garuu hojmanni kun ni hafaa jedhaniiru hojii gaggeessichi
      Maddi:-BBC`
    })
    
    this.news.push({
      image: 'facebook.jpg',
      title: 'Feesbuukii,Twiitaraa Fi Inistaagiraamni Burjaajjiif Saaxilamaniit Turaa',
      text: `Finfinnee, Gurraandhala 2, 2012 (FBC) – Feesbuukii,
      Twiitaraa fi Inistaagiraamni burjaajjiif saaxilamaniit turan.
      Uggurtoonni odeeffannoo miidiyaalee hawaasummaa
      kanneen butanii itti fayyadamuu yaalaniiru.
      Jimaata darbe miidiyaaleen kanneen
      burjaajessitootaa fi buttoota odeeffannoof
      saaxilamaniit turan.Marsariitiiwwan
      kunneen yeroo muraasaf garee odeeffannoo
      butan; Aawar Maayin jedhamuun to’annoo
      jala akka turan himameera.Garichi Feesbuukii, Twiitaraa fi Inistaagiraamii to’annoo jala
      erga oolchen booda ergaawwan garagaraa dabarseera.Ergichi maqaa isaatin nagaa
      dhiyeessee, Feesbuukii, Twiitaraa fi Inistaagiraamiirratti dandeetti waa barreessuu
      akka qabu hubachisera. Gareen kun dhaabbanni Feesbuukii Twiitara irraa
      ofeeggannoowwan nageenyaa ni taasisa jechuunis itti qoosera.Kanarra kan
      darbe garichi Twiitaraa fi Inistaagiraamii irratti ergaa addaa fi beeksisa
      garagaraa dabarseera.
      Maddi:- BBC`
    })

    this.news.push({
      image: 'screen.jpg',
      title: 'Maaykiroosooft Rakkina Appilikeeshinii Wiindoows 10 Qunnama',
      text: `Finfinnee, Amajjii 28, 2012 (FBC) – Maaykiroosooft
      rakkina appilikeeshinii
      windoows 10 qunnamee ture hiikuusaa ibseera.
      
      Fayyadamtoonni hedduun appilikeeshinichi guyyaa
      kaleessaarraa eegalee hojii dhaabuu himaniiru.
      
      Akka fayyadamtoonni ibsanitti deeskitooppiin ajaja
      odeeffannoo barbaacha yoo gaafatan waan barbaadan
      argachuurra saanduqa duwwaa argachaa turan.

      Dhaabbatichi gabaasa fayyadamtootarraa argateen turtiidhan
      booddee rakkina fayyadamtootaa furuu beeksiseera.Haata’uutii, koompiiwtaroota
      tokko tokkorratti irra deebiin eegalchiisuu (restart) akka isaan gaafatu ibsameera.
      Appilikeeshiniin windoows 10 fayyadamtoota miiliyoona dhibba 8 ol qaba.
      
      Maddi:- BBC      
      `
    })
    
    this.news.push({
      image: 'agreement.png',
      title: 'Yunivarsiitiin Naannoo Oromiyaatii fi Abbaan Taayitaa saayinsii, Teeknolojii fi Qunnamtii Odeeffannoo Oromiyaa walii galtee waliin hojjachuuf malleetteessaniiru.',
      text: `Yunivarsiitiin Naannoo Oromiyaatiifi Abbaan Taayitaa saayinsii,
      Teeknolojii fi Qunnamtii Odeeffannoo Oromiyaa walii galtee waliin
      hojjachuuf guyyaa Eblaa 01/2011 Yunivarsiitii Naannoo Oromiyaa
      keessatti malleetteessaniiru. Kaayyoon waliigaltichaas humna
      namaa qindeessuun ijaarsa dandeettii naannichaafi tajaajila
      hawaasaaa baldhinnaan kennuuf dhimmoota armaan gadii
      irratti waliin hojjachuuf walii mallatteessaniiru. Qabxiiwwan
      waligaltee:
      1. Qu’annoofi Qorannoo rakkoolee hawaasaa hiikan
      adeemsissuufi fala argannoowwani irratti waliin hojjachuuf
      2. Guddinaa Saayinsiif Teeknolojii tiif haala mijeessuu,
      3. Misooma Bu’uuraa Yunivarsiitifi Abbaa Taayitaa waliin
      fayyadamuuf
      4. Leenjii Qabeenya Humna namaa irrattii waliin hojjachuuf
      5. Qabeenya kallaqa sammuu humnatiif Gabayaa Uumuu
      (commercialization of intellectual property)
      6. Walqunamtii al-idilee cimsuu (koonfiransii hayyootaafi
      walgahiiwwan garee teekinikaa adda addaa sadarkaa
      Naannoo fi biyyolessaatti qopheessuu,)
      7.Tajaajila hawaasaa irratti waliin hojjachuu, hawaasa
      deeggaruu (Saayinsiifi Teeknolojiirratti, Giddugala
      Odeeffannoo, ICT Baadiyyaa, Leenjii ICT, Dandeettii
      Odeeffannoo Gabayaa cimsuu sosochii hayyoota
      Naannichaa Teeknolojii adda addaa irratti uumuu kkf..)
      hawaasaaf leenjii kennuufi hubannoo uumuuf
      Haalumaa kanaan waliigaliteen hojii kunis gara hojiitti
      akka cehuuf gareen teekinikaa hojicha tartiibessu
      hundaa’era. Carraaqqiin kunis naannicha gama saayinsii
      fi teeknolojiitiin fuulduratti tarkaanfachiisuun hawaasa
      teeknolojii beekee fayyadamu uumuu keessatti gahee
      bakka bu’ummaa hinqabne akka taphatu itti amanama.
      Milka’iina waliigaltichatiif qamooleen dhimmi ilaallatu
      hundi tumsa akka taasisan Pirezidaantiin YNO
      Dr. Gammachuu Araasaati fi Ittigafaataman Abbaan
      Taayitaa saayinsii, Teeknolojii fi Qunnamtii Odeeffannoo
      Oromiyaa Dr. Taasisaa Kaabaa ibsaniiru.`
      
    })
    
  }

}
