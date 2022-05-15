//type for receiving api response
export type APIResponse = {
    title: string;
    zip: string;
    city: string;
    address: string;
    latitude: number;
    longitude: number;
};

//type for user-selected 
export type SelectableOrderPoint = {
    label: string;
    value: number;
};

//mocked json API response
export const APIMOCK = [{"title":"1 sz. automata - Stop-Shop \u00e1ruh\u00e1z","zip":"1826","city":"Budapest","address":"H\u0171v\u00f6sv\u00f6lgyi \u00fat 138","lat":"47,540180","lng":"18,965966"},{"title":"2 sz. automata - B\u00e9csi \u00fat Tesco","zip":"1836","city":"Budapest","address":"B\u00e9csi \u00fat 258","lat":"47,563854","lng":"19,022939"},{"title":"3 sz. automata - V\u00e1ci \u00fat Tesco","zip":"1836","city":"Budapest","address":"G\u00e1cs utca 3","lat":"47,556377","lng":"19,081354"},{"title":"4 sz. automata - Sug\u00e1r B (IKEA fel\u0151l)","zip":"1870","city":"Budapest","address":"\u00d6rs Vez\u00e9r tere 23","lat":"47,504259","lng":"19,137259"},{"title":"6 sz. automata - Csepel Pl\u00e1za","zip":"1871","city":"Budapest","address":"II. R\u00e1k\u00f3czi Ferenc \u00fat 154-170","lat":"47,424301","lng":"19,067209"},{"title":"7 sz. automata - Andor utca Spar","zip":"1871","city":"Budapest","address":"Feh\u00e9rv\u00e1ri \u00fat 161","lat":"47,456270","lng":"19,039847"},{"title":"8 sz. automata - Campona","zip":"1871","city":"Budapest","address":"Nagyt\u00e9t\u00e9nyi \u00fat 35","lat":"47,407891","lng":"19,015779"},{"title":"9 sz. automata - Sug\u00e1r A (IKEA fel\u0151l)","zip":"1870","city":"Budapest","address":"\u00d6rs vez\u00e9r tere 23","lat":"47,504259","lng":"19,137259"},{"title":"10 sz. automata - K\u00d6KI","zip":"1826","city":"Budapest","address":"Vak Botty\u00e1n utca 75 a-c","lat":"47,461958","lng":"19,146923"},{"title":"11 sz. automata - M\u00c1V \u00e1llom\u00e1s","zip":"2100","city":"G\u00f6d\u00f6ll\u0151","address":"\u00c1llom\u00e1s t\u00e9r 1-3","lat":"47,591693","lng":"19,358189"},{"title":"12 sz. automata - Stop-Shop \u00e1ruh\u00e1z","zip":"1834","city":"\u00c9rd","address":"Budai \u00fat 13","lat":"47,378043","lng":"18,921364"},{"title":"13 sz. automata - Pesterzs\u00e9bet Interspar","zip":"1871","city":"Budapest","address":"Sz\u00e9chenyi utca 1","lat":"47,438925","lng":"19,102003"},{"title":"14 sz. automata - Malompark","zip":"4050","city":"Debrecen","address":"F\u00fcredi \u00fat 27","lat":"47,541392","lng":"21,618826"},{"title":"15 sz. automata - Miskolc 9 - \u00dajdi\u00f3sgy\u0151r posta","zip":"3550","city":"Miskolc","address":"Andr\u00e1ssy utca 43","lat":"48,101371","lng":"20,731349"},{"title":"16 sz. automata - Avas Tesco","zip":"3550","city":"Miskolc","address":"M\u00e9sztelep utca 1\/a","lat":"48,071969","lng":"20,784626"},{"title":"17 sz. automata - M\u00c1V \u00e1llom\u00e1s","zip":"4420","city":"Ny\u00edregyh\u00e1za","address":"\u00c1llom\u00e1s t\u00e9r 2","lat":"47,946752","lng":"21,706698"},{"title":"18 sz. automata - M\u00c1V \u00e1llom\u00e1s","zip":"5000","city":"Szolnok","address":"M\u00c1V pu.","lat":"47,179571","lng":"20,177169"},{"title":"19 sz. automata - Tesco","zip":"3300","city":"Eger","address":"II. R\u00e1k\u00f3czi Ferenc utca 100","lat":"47,923810","lng":"20,368998"},{"title":"20 sz. automata - Tatab\u00e1nya 1 posta","zip":"2801","city":"Tatab\u00e1nya","address":"F\u0151 t\u00e9r 30","lat":"47,582600","lng":"18,398709"},{"title":"21 sz. automata - Tesco","zip":"9702","city":"Szombathely","address":"Zanati \u00fat 70","lat":"47,214267","lng":"16,614630"},{"title":"22 sz. automata - Veszpr\u00e9m 1 posta","zip":"8210","city":"Veszpr\u00e9m","address":"Kossuth Lajos utca 19","lat":"47,093210","lng":"17,911026"},{"title":"23 sz. automata - Tesco","zip":"9401","city":"Sopron","address":"Ipar k\u00f6r\u00fat 30","lat":"47,670444","lng":"16,611063"},{"title":"24 sz. automata - Gy\u0151r Interspar","zip":"9041","city":"Gy\u0151r","address":"Feh\u00e9rv\u00e1ri \u00fat 3","lat":"47,687418","lng":"17,646794"},{"title":"25 sz. automata - Zala Pl\u00e1za","zip":"8910","city":"Zalaegerszeg","address":"Stadion utca 5","lat":"46,844612","lng":"16,851205"},{"title":"26 sz. automata - AUDI","zip":"9041","city":"Gy\u0151r","address":"Audi Hung\u00e1ria \u00fat 1","lat":"47,697009","lng":"17,689151"},{"title":"27 sz. automata - M\u00c1V \u00e1llom\u00e1s","zip":"7680","city":"P\u00e9cs","address":"Ind\u00f3h\u00e1z t\u00e9r 6","lat":"46,066965","lng":"18,225959"},{"title":"28 sz. automata - Spar","zip":"7680","city":"P\u00e9cs","address":"Csontv\u00e1ry utca 2","lat":"46,039938","lng":"18,223125"},{"title":"29 sz. automata - M\u00c1V \u00e1llom\u00e1s","zip":"7110","city":"Szeksz\u00e1rd","address":"Pollack Mih\u00e1ly utca 1-49","lat":"46,347419","lng":"18,711933"},{"title":"30 sz. automata - Posta Feldolgoz\u00f3","zip":"8050","city":"Sz\u00e9kesfeh\u00e9rv\u00e1r","address":"Kaszap Istv\u00e1n utca 3","lat":"47,182555","lng":"18,420753"},{"title":"31 sz. automata - ALDI","zip":"7420","city":"Kaposv\u00e1r","address":"Pet\u0151fi utca 56","lat":"46,370875","lng":"17,816201"},{"title":"32 sz. automata - R\u00f3kusi k\u00f6r\u00fat Tesco","zip":"6780","city":"Szeged","address":"R\u00f3kusi k\u00f6r\u00fat 42-64","lat":"46,270110","lng":"20,138028"},{"title":"33 sz. automata - Pesti \u00fati Tesco","zip":"1826","city":"Budapest","address":"Pesti \u00fat 5-7","lat":"47,484442","lng":"19,230363"},{"title":"34 sz. automata - \u00d6nkorm\u00e1nyzat","zip":"5620","city":"B\u00e9k\u00e9scsaba","address":"Szabads\u00e1g t\u00e9r 1-3","lat":"46,679555","lng":"21,098619"},{"title":"35 sz. automata - Talf\u00e1ja u Tesco","zip":"6020","city":"Kecskem\u00e9t","address":"Talf\u00e1ja k\u00f6z 1","lat":"46,933085","lng":"19,665258"},{"title":"36 sz. automata - Corvin Pl\u00e1za","zip":"1870","city":"Budapest","address":"Fut\u00f3 utca 37-45","lat":"47,486184","lng":"19,074569"},{"title":"38 sz. automata - L\u0151rinc Center","zip":"1826","city":"Budapest","address":"\u00dcll\u0151i \u00fat 661","lat":"47,434607","lng":"19,201968"},{"title":"39 sz. automata - All\u00e9e Bev\u00e1s\u00e1rl\u00f3k\u00f6zpont","zip":"1871","city":"Budapest","address":"Okt\u00f3ber huszonharmadika utca 8-10","lat":"47,473855","lng":"19,049343"},{"title":"40 sz. automata - D\u00e9li p\u00e1lyaudvar","zip":"1870","city":"Budapest","address":"Krisztina k\u00f6r\u00fat 37\/a","lat":"47,499686","lng":"19,025731"},{"title":"41 sz. automata - Nyugati t\u00e9r metr\u00f3 alulj\u00e1r\u00f3","zip":"1857","city":"Budapest","address":"Nyugati t\u00e9r alulj\u00e1r\u00f3","lat":"47,509870","lng":"19,055318"},{"title":"42 sz. automata - Kelenf\u00f6ld pu. metr\u00f3 alulj\u00e1r\u00f3","zip":"1871","city":"Budapest","address":"Etele t\u00e9r alulj\u00e1r\u00f3","lat":"47,464192","lng":"19,021992"},{"title":"43 sz. automata - \u00c1rp\u00e1d h\u00edd metr\u00f3 alulj\u00e1r\u00f3","zip":"1836","city":"Budapest","address":"\u00c1rp\u00e1d h\u00edd alulj\u00e1r\u00f3","lat":"47,532437","lng":"19,066464"},{"title":"44 sz. automata - Auchan","zip":"1838","city":"Buda\u00f6rs","address":"Sport utca 2-4","lat":"47,456640","lng":"18,947847"},{"title":"45 sz. automata - Tesco","zip":"2120","city":"Dunakeszi","address":"F\u0151 \u00fat 190","lat":"47,654842","lng":"19,130989"},{"title":"47 sz. automata - Tesco","zip":"6501","city":"Baja","address":"Gr\u00e1n\u00e1tos utca 11","lat":"46,190022","lng":"18,934507"},{"title":"48 sz. automata - Gy\u0151r Pl\u00e1za","zip":"9041","city":"Gy\u0151r","address":"Vasv\u00e1ri P\u00e1l utca 1\/A","lat":"47,669299","lng":"17,646689"},{"title":"50 sz. automata - Fogarasi \u00fati Tesco","zip":"1870","city":"Budapest","address":"Pillang\u00f3 utca 15","lat":"47,504508","lng":"19,116326"},{"title":"51 sz. automata - Magyar Takar\u00e9ksz\u00f6vetkezeti Bank Zrt.","zip":"8087","city":"Alcs\u00fatdoboz","address":"B\u00e9ke utca 1","lat":"47,426173","lng":"18,602233"},{"title":"5 sz. automata - Shopmark parkol\u00f3","zip":"1826","city":"Budapest","address":"\u00dcll\u0151i \u00fat 201","lat":"47,463986","lng":"19,129498"},{"title":"46 sz. automata - Interspar","zip":"2401","city":"Duna\u00fajv\u00e1ros","address":"B\u00e9ke k\u00f6r\u00fat 3","lat":"46,945890","lng":"18,913156"}]