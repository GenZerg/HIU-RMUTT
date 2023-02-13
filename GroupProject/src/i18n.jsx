import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "lang":"../public/images/nav-icon/En.png",
      "langactive":"../public/images/nav-icon/En-red.png",
      "langm":"../public/images/nav-icon/menu.png",
      "langmactive":"../public/images/nav-icon/menu-red.png",
      "First": "Travel App",
      "Button1":"Thai",
      "Button2":"English",
      "Menu":"Menu",
      
      "detailNav1":"Why street food ?",
      "detailNav2":"Thai street food",
      "detailNav3":"Japan street food",

      "Member":"Member",
      "Menu1":"Home",
      "Menu2":"Why street food",
      "Menu3":"Thai food",
      "Menu4":"Japan food",
      "Menu5":"Movie",
      "Menu6":"Member",
      "Detail1":"Street food has become more and more popular over the years, with it being found in almost every country around the world. There are many reasons for its popularity, including that street vendors often sell affordable foods with interesting flavors. Street food is also usually very fresh because of the quick turnover rate. why street food is getting so popular!<1/>●	Street food is very affordable<1/>●	Street food is also usually very fresh.<1/>●	Street food is usually made quickly<1/>●	Delicious and convenient<1/>●	Street food is an important part of the culture.<1/>●	Easy way to explore different cultures<1/>●	Variety of dishes",
      "Detail2":"Why is Street Food in Thailand so popular?<1/>Street Food is actually distributed throughout Thailand it's either a major district like Chiang Mai or Phuket, but it's the most fragrant. It's seen to be Bangkok the capital is crowded with tourists in addition to the deliciousness that food critics around the world know one Thai dish also has a variety of flavors: sour, sweet, salty and spicy.<1/>Not boring, monotonous. This allows foodies to enjoy different flavors, which is one of the reasons why Thai street food is so popular it must be given to the 'price' that counts as worthy of the amount of food and not too expensive, as Street Food has a relatively low production cost only a handful of pieces of equipment can be opened, plus the hustle and bustle lifestyle of the capital's people, who have to keep up with their limited time Also, the cost may be less than walking the market on your own. Street food therefore caters to a simple Thai lifestyle and is very popular among tourists.<1/>What are some of the most popular Street Food menus?<1/>Hoi Tod  price 65 baht Savoury dishes<1/>Roti  price 30 baht Dessert<1/>Rice topped with stir-fried pork and basil  price 45 baht Savoury dishes<1/>fried chicken price 45 baht Savoury dishes<1/>Pad Thai  price 65 baht Savoury dishes<1/>Iced Pink Milk  price 25  baht Drink",
      "Detail3":"The term 'street food' is not a familiar term in Japan.<1/>In addition, I have the impression that there are fewer food stalls in Hokkaido and other areas where it snows, because the weather makes it impossible to set up stalls.<1/>The standard types of food include yakitori and Thaiyaki.<1/>Although the regions where you can eat it are limited, all the dishes are delicious and you should definitely try them! ",
      
      
      "kaitod":"Fried chikens",
      "hoitod":"Fried clams",
      'roti':"Roti",
      'glass':"Thai tea",
      'StirFriedBasil':"StirFriedBasil",
      'padthai':"Padthai",

      "taiyaki":"Taiyaki",
      "takoyaki":"Takoyaki",
      "ramen":"Ramen",
      "uni":"Uni",
      "sushi":"Sushi",
      "curry":"Curry Rice",
      "comment":"Japanese comment",

      "ttdis1":"Delicious fried chicken a taste that everyone can eat.",
      "titledis1":"Title Comment",
      "price1":"160",
      "tag1":"Tag",
      "popdis1":"It is a Thai-style grilled chicken with a sweet and spicy flavor.It is a dish that can be eaten by anyone because it has no particular taste!Basically, you can eat it anywhere.",

      "ttdis2":"Crispy flour on the outside and soft on the inside with eggs and mussels, with chili sauce.",
      "titledis2":"Title Comment",
      "price2":"160",
      "tag2":"Tag",
      "popdis2":"Hoi tod is said to be the Thai okonomiyaki. The shells are savory on the outside and fluffy on the inside.The chili sauce that they put on the finish is not that spicy, so even those who don't like spicy food enjoyed it!",

      "ttdis3":"Crispy flore fried dough topped with sweetened condensed milk. and can add more toppings.",
      "titledis3":"Title Comment",
      "price3":"160",
      "tag3":"Tag",
      "popdis3":"A sweet Thai-style crepe with a sticky dough. There are varieties such as egg, banana, and chocolate. They are readily available at food stalls!",
      
      "ttdis4":"Iced tea with milk make me smell good The taste is sweet and delightful.",
      "titledis4":"Title Comment",
      "price4":"160",
      "tag4":"Tag",
      "popdis4":"It is a very sweet tea with a distinctive reddish brown color.It has a strong aroma and I love this tea of sweet! You can get it relatively anywhere, but I recommend the ones sold at street stalls as they are easier to find.",

      "ttdis5":"Rice with Pork Basil and Fried Egg that Basil smells so good and of the strong taste.",
      "titledis5":"Title Comment",
      "price5":"160",
      "tag5":"Tag",
      "popdis5":"This dish is delicious with the flavor of meat and the fresh aroma of basil. There is no herb-specific smell, so it is non-habit forming and easy for Japanese to eat!It is very spicy, so it is not recommended for those who do not like spicy food...!",

      "ttdis6":"Noodles made from flour and stir fried with eggs With spring onions and bean sprouts mellow taste.",
      "titledis6":"Title Comment",
      "price6":"160",
      "tag6":"Tag",
      "popdis6":"Rice flour is used to make the noodles, which are characterized by their sticky texture. This dish is not spicy and has a strong sour taste. It's a Thai staple, so you must try it!",

      "ttdis7":"There are various kinds of red bean paste and cream. Sweets in the shape of a sea bream.",
      "titledis7":"Title Comment",
      "price7":"160",
      "tag7":"Tag",
      "popdis7":"Taiyaki is the name of a confectionery that originated in Japan. The characteristic of Taiyaki is that it is a dough stuffed with bean paste. or cream flavors The texture of the dough is like cake flour. The various fillings It will focus on the filling that is sweet. It is often stuffed with adzuki beans, custard fillings, or sweet potatoes. Anyone who eats dessert is recommended that you shouldn't miss it because it's very delicious.",

      "ttdis8":"Dough with octopus inside.Osaka's famous local dish.",
      "titledis8":"Title Comment",
      "price8":"160",
      "tag8":"Tag",
      "popdis8":"It's round, crispy on the outside. Fragrant, slightly charred, soft inside, but not so messy that you can tell that it's not cooked. It was cooked but it was soft. The taste is completely different from Thailand. The condition looks very heavy. Contains octopus, cheese, vegetables Topped with not much mayonnaise. and sprinkle dried fish and topped with sauce for takoyaki.",
      
      "ttdis9":"A dish consisting of Chinese noodles with soup and ingredients. The standard flavors are soy sauce, miso, salt, and tonkotsu.",
      "titledis9":"Title Comment",
      "price9":"160",
      "tag9":"Tag",
      "popdis9":"It is a Japanese noodle with a slightly salty taste. along with a large piece of pork in a cup plus water for 3 types of soup to choose from, very cool! For Thai people, it's easy to eat, not spicy at all. But it is recommended not to add more fish sauce.",

      "ttdis10":"Slightly sweet, creamy and full-bodied. It has a strong sea aroma,also Japanese people are whether they like it or not.",
      "titledis10":"Title Comment",
      "price10":"160",
      "tag10":"Tag",
      "popdis10":"The taste is sweet, slightly salty, intense. soft texture It can melt in your mouth. But with a unique smell, Japanese people often use it to make overflowing sushi. You can eat it fresh as sashimi or uni don (sea urchin rice). It's delicious. You can eat it without seasoning because uni has a taste. already unique Eating like this will make us feel the real taste of Uni well. It's very smooth and satisfying.",

      "ttdis11":"It is a Japanese dish of fish on a bed of vinegared rice. In addition to fish, there are many other varieties such as meat and eggs.",
      "titledis11":"Title Comment",
      "price11":"160",
      "tag11":"Tag",
      "popdis11":"It is a dish that has seaweed wrapped in soft rice. and there are some pages on top, such as salmon, fish roe Sweet egg, tuna. Eat and feel very satisfied! Inexpensive but good ingredients considered very worthwhile.",

      "ttdis12":"It features a thick curry roux with meat and vegetables.",
      "titledis12":"Title Comment",
      "price12":"160",
      "tag12":"Tag",
      "popdis12":"Japanese Curry Rice Dark brown sauce, almost black. Mix with wheat flour to thicken the curry. Aromatic but not pungent with a mild taste. Easy to eat Japanese style. And the Japanese rice is super smooth. and a uniquely rich broth Japanese Curry Rice also has many creative menus waiting for us to try. such as Fried Pork Curry, Beef Curry Rice, Omurice with Curry Sauce Plus there are plenty of other menu items! Let me tell you that Japanese curry rice is the base.",
    }
  },
  th: {
    translation: {
      "lang":"../public/images/nav-icon/Th.png",
      "langactive":"../public/images/nav-icon/Th-red.png",
      "langm":"../public/images/nav-icon/menu.png",
      "langmactive":"../public/images/nav-icon/menu-red.png",
      "First": "แอปท่องเที่ยว",
      "Button1":"ภาษาไทย",
      "Button2":"ภาษาอังกฤษ",
      "Menu":"เมนู",
      
      
      "detailNav1":"ทำไมถึงเป็นสตรีทฟู๊ด ?",
      "detailNav2":"สตรีทฟู๊ดของไทย",
      "detailNav3":"สตรีทฟู๊ดของญี่ปุ่น",

      "Member":"สมาชิก",
      "Menu1":"หน้าหลัก",
      "Menu2":"ทำไมถึงต้องเป็นสตรีทฟู้ด",
      "Menu3":"อาหารไทย",
      "Menu4":"อาหารญี่ปุ่น",
      "Menu5":"คลิปบรรยากาศ",
      "Menu6":"สมาชิก",
      "Detail1":"อาหารริมทางได้รับความนิยมมากขึ้นเรื่อย ๆ ในช่วงหลายปีที่ผ่านมาโดยพบได้ในเกือบทุกประเทศทั่วโลก มีเหตุผลหลายประการ สําหรับความนิยมรวมถึงผู้ขายริมถนนมักจะขายอาหารราคาไม่แพงพร้อมทานและรสรสชาติที่น่าสนใจ อาหารริมทางมักจะสดใหม่ นั้นคือเหตุผลว่าทําไมอาหารริมทางได้รับความนิยมอย่างมาก!<1/>●	อาหารริมทางมีราคาไม่แพงมาก<1/>●	อาหารริมทางก็มักจะสดมาก<1/>●	อาหารริมทางมักจะทําเสร็จด้วยความรวดเร็ว<1/>●	อร่อยและสะดวก<1/>●	อาหารริมทางเป็นส่วนสําคัญของวัฒนธรรม<1/>●	เป็นวิธีง่ายๆในการสํารวจวัฒนธรรมที่แตกต่างกัน<1/>●	ความหลากหลายของอาหาร",
      "Detail2":"ทำไม สตรีทฟู้ด ประเทศไทยถึงได้รับความนิยม<1/>จริงๆ แล้ว สตรีทฟู้ด กระจายตัวอยู่ตามแหล่งชุมชนทั่วประเทศไทย ทั้งย่านหัวเมืองสำคัญอย่างเชียงใหม่หรือภูเก็ต แต่ที่เนื้อหอมมากที่สุด เห็นจะเป็นกรุงเทพมหานครฯ เมืองหลวงที่มีนักท่องเที่ยวสัญจรอยู่หนาแน่น นอกจากความอร่อยที่เหล่านักวิจารณ์อาหารทั่วโลกต่างรู้กันดี อาหารไทยหนึ่งจานยังมีรสสัมผัสที่หลากหลาย ทั้งเปรี้ยว หวาน เค็ม และเผ็ด<1/>ไม่น่าเบื่อจำเจ ทำให้บรรดานักชิมได้สนุกกับรสชาติอาหารที่แตกต่างอย่างแน่นอน และอีกหนึ่งเหตุผลที่ทำให้สตรีทฟู้ดของไทยได้รับความนิยม ต้องยกให้กับ ‘ราคา’ ที่นับว่าคุ้มค่าต่อปริมาณอาหารและไม่แพงจนเกินไป เนื่องจาก สตรีทฟู้ด มีต้นทุนการผลิตที่ค่อนข้างต่ำ ใช้เพียงอุปกรณ์ไม่กี่ชิ้นก็สามารถเปิดร้านได้แล้ว บวกกับวิถีชีวิตรีบเร่งของคนในเมืองหลวง ซึ่งต้องรับประทานอาหารให้ทันต่อเวลาที่มีจำกัด อีกทั้งค่าใช้จ่ายที่อาจจะน้อยกว่าการเดินจ่ายตลาดด้วยตนเอง สตรีทฟู้ดจึงตอบโจทย์ไลฟ์สไตล์ง่ายๆ แบบคนไทย และได้รับความนิยมในหมู่นักท่องเที่ยวเป็นอย่างมาก<1/>เมนู สตรีทฟู้ด ยอดนิยมมีอะไรบ้าง<1/>หอยทอด  ราคา 65 บาท จานหลัก<1/>โรตี Roti  ราคา 30าท  บ ของหวาน<1/>ผัดกระเพราหมู ราคา 45 บาท จานหลัก<1/>ไก่ทอด  ราคา 45 บาท จานหลัก<1/>ผัดไทย ราคา 65 บาท จานหลัก<1/>ชานม ราคา 25 บาท เครื่องดื่ม",
      "Detail3":"คำว่า ”อาหารริมทาง” เป็นสิ่งที่ไม่คุ้นเคยในญี่ปุ่น และฉันก็รู้ยังมีความรู้สึกว่ามีแผงขายอาหารน้อยลงในฮอกไกโดและพื้นที่อื่นๆ ที่มีหิมะตกเพราะสภาพอากาศทำให้ไม่สามารถตั้งแผงขายอาหารประเภททั่วไป เช่น พวกยากิโทริและไทยากิ แม้ว่าจะมีสภาพอากาศที่ไม่เป็นใจคุณสามารถกินได้ถึงแม้จะมีจํากัด แต่อาหารทุกจานก็อร่อยและคุณควรลองอย่างแน่นอน!",

      "kaitod":"ไก่ทอด",
      "hoitod":"หอยทอด",
      'roti':"โรตี",
      'glass':"ชาไทย",
      'StirFriedBasil':"ผัดกระเพรา",
      '':"",

      "taiyaki":"ไทยากิ",
      "takoyaki":"ทาโกะยากิ",
      "ramen":"ราเมน",
      "uni":"อูนิ",
      "sushi":"ซูชิ",
      "curry":"ข้าวแกงกะหรี่",

      
      "ttdis1":"ไก่ทอดแสนอร่อย รสชาติที่ทุกคนสามารถทานได้ทั่วไป",
      "titledis1":"Title Comment",
      "price1":"160",
      "tag1":"Tag",
      "popdis1":"มันคือไก่ทอดแบบไทยสไตล์ที่รสชาติหวานและเผ็ด มันคืออาหารที่ทุกคนสามารถทานได้เพราะมันไม่ได้มีรสชาติอะไรที่พิเศษ! โดยสามารถหาซื้อกินได้ทั่วไป",

      "ttdis2":"แป้งทอดแบบกรอบนอกนุ่มในที่มีไข่และหอยแมลภู่เป็นส่วนผสม พร้อมราดซอสพริก",
      "titledis2":"Title Comment",
      "price2":"160",
      "tag2":"Tag",
      "popdis2":"พูดกันว่าหอยทอดไทยคือโอโคโนมิยากิของไทย หอยทอดจะมีรสเผ็ด ตัวแป้งจะกรอบนอกนุ่มใน และจะมีซอสพริกไว้ใช้ราดด้านบนหอยทอดแต่รสชาติของซอสจะไม่เผ็ด ดังนั้นถึงแม้คุณไม่ชอบรสเผ็ดแต่คุณก็สามารถทานและมีความสุขกับรสชาติมันได้!",

      "ttdis3":"แป้งทอดกรอบที่ราดด้านบนด้วยนมข้นหวาน และสามารถใส่ท็อปปิ้งต่างๆเพิ่มได้",
      "titledis3":"Title Comment",
      "price3":"160",
      "tag3":"Tag",
      "popdis3":"เครปหวานสไตล์ไทยที่หวานและมีแป้งแบบเหนียว และมีท็อปปิ้งให้เลือกทานคู่กับตัวแป้งหลายอย่างเช่น ไข่, กล้วย, และช็อตโกแลต  พวกเขาพร้อมขายที่แผงอาหารตลอด!",
      
      "ttdis4":"ชาเย็นที่ใส่นม ทำกลิ่นหอมละมุน รสชาติหวานและชื่นใจ",
      "titledis4":"Title Comment",
      "price4":"160",
      "tag4":"Tag",
      "popdis4":"มันเป็นชาที่หวานมากๆ และมีสีออกน้ำตาลส้ม มันมีกลิ่นที่หอมหวานและฉันรักชาไทยนี้คุณสามารถหาซื้อได้ทุกที่ แต่ฉันแนะนำว่าควรจะเดินหาตามร้านริมถนนมันจะหาง่ายกว่า",

      "ttdis5":"ข้าวกระเพราหมูไข่ดาว ที่หอมกลิ่นกระเพราะรสจัดจ้าน",
      "titledis5":"Title Comment",
      "price5":"160",
      "tag5":"Tag",
      "popdis5":"จานนี้อร่อยด้วยรสชาติของเนื้อสัตว์และกลิ่นความหอมของใบกระเพราเป็นกลิ่นสมุนไพรเฉพาะ ดังนั้นมันอาจจะฉุนใบกระเพราไปสักหน่อยแต่กินง่ายสำหรับหรับคนญี่ปุ่น! และมันมีรสชาติเผ็ดมาก ดังนั้นจึงไม่แนะนำสำหรับคนที่ไม่ชื่นชอบการกินเผ็ด",

      "ttdis6":"เส้นที่ทำจากแป้ง และนำมาผัดใส่ไข่ พร้อมต้นหอมและถั่วงอก รสชาติกลมกล่อม",
      "titledis6":"Title Comment",
      "price6":"160",
      "tag6":"Tag",
      "popdis6":"แป้งข้าวเจ้าที่ใช้ทำบะหมี่ซึ่งมีเนื้อเหนียว จานนี้ไม่เผ็ดแต่มีรสชาติเปรี้ยว เป็นอาหารไทยจานหลักที่คุณต้องลอง!",

      "ttdis7":"มีไส้ถั่วแดงและครีมหลากหลายไส้ ขนมหวานในรูปของปลากระพง",
      "titledis7":"Title Comment",
      "price7":"160",
      "tag7":"Tag",
      "popdis7":"ไทยากิ เป็นชื่อของขนมที่มีต้นกำเนิดมาจากประเทศญี่ปุ่น ลักษณะของขนมไทยากิคือจะเป็นแป้งที่สอดไส้ด้วยถั่วกวน หรือครีมรสชาติต่างๆ ซึ่งเนื้อแป้งก็จะเหมือนแป้งเค้กนั่นเอง ส่วนไส้ต่างๆนั้น ก็จะเน้นไปที่ไส้ที่มีรสหวาน โดยมากจะสอดไส้ถั่วแดงอาซูกิ, ไส้คัสตาร์ด, หรือมันฝรั่งหวาน ใครสายทานของหวานแนะนำว่าไม่ควรพลาดเพราะมันอร่อยมากๆ",

      "ttdis8":"แป้งกับปลาหมึกชิ้นอยู่ข้างใน เป็นอาหารท้องถิ่นที่มีชื่อเสียงของโอซาก้า",
      "titledis8":"Title Comment",
      "price8":"160",
      "tag8":"Tag",
      "popdis8":"เป็นก้อนกลมๆ แป้งข้างนอกกรอบ หอมกลิ่นเกรียมนิดๆ ข้างในนุ่ม แต่ไม่เละจนดูออกว่ามันไม่สุก มันสุกแต่มันนุ่ม รสชาติต่างจากที่ไทยโดยสิ้นเชิง เครื่องปรุงกลิ่นดูมีน้ำหนักมากๆ มีไส้ปลาหมึก, ชีส, ผัก ราดมายองเนสไม่เยอะมาก แล้วเอาปลาตากแห้งมาโรย และราดซอสสำหรับทาโกะยากิ",
      
      "ttdis9":"จานที่ประกอบด้วยบะหมี่จีนพร้อมน้ำซุปและเครื่องปรุงรสชาติทั่วไปคือซอสถั่วเหลือง มิโซะ เกลือ และทงคตสึ",
      "titledis9":"Title Comment",
      "price9":"160",
      "tag9":"Tag",
      "popdis9":"เป็นก๋วยเตี๋ยวญี่ปุ่นที่มีรสชาติออกเค็มปกน้อย พร้อมกับกับมีหมูชิ้นโตอยู่ในถ้วยแถมน้ำให้ซุปให้เลือกถึง 3 แบบโครตเจ๋ง! สำหรับคนไทยกินได้สบายๆไม่เผ็ดเลย แต่แนะนำว่าอย่าเติมน้ำปลาเพิ่มนะ",

      "ttdis10":"หวานเล็กน้อย หอมมันและเนื้อแน่น มีกลิ่นหอมแรงของทะเล แม้แต่คนญี่ปุ่นเองก็ยังมีคนชอบและไม่ชอบ",
      "titledis10":"Title Comment",
      "price10":"160",
      "tag10":"Tag",
      "popdis10":"รสออกหวาน เค็มนิด ๆ มีความเข้มข้น เนื้อนุ่มละมุน ละลายในปากได้เลย แต่จะมีกลิ่นเฉพาะตัว คนญี่ปุ่น มักนำมาทำ ซูชิหน้าล้น ๆ จะทานสดเป็น ซาชิมิ ก็ได้ หรือ อูนิด้ง (ข้าวหน้าหอยเม่น) ก็อร่อยยย สามารถทานแบบไม่ต้องปรุงรสได้เลย เพราะ อูนิมีรสชาติเฉพาะตัวอยู่แล้ว ถ้าทานแบบนี้จะทำให้เราสัมผัสรสชาติแท้ ๆ ของอูนิได้ดี มันละมุนฟินมาก! ",

      "ttdis11":"เป็นอาหารญี่ปุ่นที่มีปลาวางบนข้าวที่ปรุงด้วยน้ำส้มสายชู นอกจากปลาแล้วยังมีอื่น ๆ อีกมากมายเช่น เนื้อ สัตว์ และไข่",
      "titledis11":"Title Comment",
      "price11":"160",
      "tag11":"Tag",
      "popdis11":"เป็นอาหารที่มีสาหร่ายห่อข้าวนุ่มๆ และมีหน้าต่างๆโปะอยู่บ้างบน  ไม่ว่าจะเป็น แซลม่อน ไข่ปลา ไข่หวาน  ทูน่า กินแล้วฟินสุดๆ! ราคาไม่แพงแต่วัตถุดิบที่ดี ถือว่าคุ้มมาก",

      "ttdis12":"แกงกะหรี่รสชาติที่มีเข้มข้นใส่เนื้อสัตว์และผัก",
      "titledis12":"Title Comment",
      "price12":"160",
      "tag12":"Tag",
      "popdis12":"ข้าวหน้าแกงกะหรี่ของญี่ปุ่น ซอสสีน้ำตาลเข้มเกือบดำ ผสมกับแป้งสาลีให้แกงมีความข้น กลิ่นหอมแต่ไม่ฉุนพร้อมกับรสชาตินุ่มนวล ทานง่ายสไตล์ญี่ปุ่น และข้าวญี่ปุ่นก็ละมุนลิ้นสุดๆ บอกเลยว่าข้าวแกงกะหรี่ญี่ปุ่นนี่แหละคือเดอะเบส",
    } 
  },
  jp: {
    translation: {
      "lang":"../public/images/nav-icon/Jp.png",
      "langactive":"../public/images/nav-icon/Jp-red.png",
      "langm":"../public/images/nav-icon/menu.png",
      "langmactive":"../public/images/nav-icon/menu-red.png",
      "First": "旅行",
      "Button1":"タイ語",
      "Button2":"英語",
      "Menu":"メニュー",

      
      "detailNav1":"なぜ屋台の食べ物?",
      "detailNav2":"タイの屋台の食べ物",
      "detailNav3":"日本の屋台の食べ物",

      "Member":"メンバー",
      "Menu1":"ホーム",
      "Menu2":"タイのストリートフード",
      "Menu3":"タイ料理",
      "Menu4":"日本料理",
      "Menu5":"動画",
      "Menu6":"メンバー",
      "Detail1":"ストリートフードの人気は年々高まっていて、世界中の殆どの国で見られるようになりました。<1/>その理由として、手頃な値段で様々な味の料理が食べることが出来るからです。<1/>また、ほかの理由として提供される時間が早いところも人気の一つです。<1/>食べることが大好きな私たちは、安くて美味しい料理を紹介したいと思い、このトピックを選びました。<1/>●	ストリートフードは値段がとても安い<1/>●	ストリートフードはいつも鮮度が抜群<1/>●	ストリートフードは早く作られる<1/>●	美味しくて便利<1/>●	ストリートフードは文化の重要な一部分<1/>●	料理のバラエティが豊富",
      "Detail2":"タイのストリートフードはなぜ人気？<1/>チェンマイやプーケットなどを中心にタイの様々な場所に多くあります。<1/>ストリートフードは首都バンコクで観光客に大人気で、世界中で有名な料理はもちろん、酸味や甘さ、辛さなどが特徴的なタイの料理が多くあります。<1/><1/>ストリートフードには多くの食べ物があるため飽きることはありません。沢山の味を楽しみましょう！<1/>そして、タイの屋台の食べ物が人気である理由のもう一つとして、お客さんも満足する料理の「価格設定」、好きな時間に料理を食べることができるような「手軽さ」もあります。<1/>以上のことから、屋台の食べ物はタイの人々のライフスタイルに合っており、観光客の間で非常に人気があります。<1/><1/>人気のあるストリートフード6選！<1/><1/>ホイトート　値段　65バーツ（日本円で約254円）<1/>ロティ　値段　30バーツ（日本円で約117円）<1/>パットガパオムー　値段　45バーツ（日本円で約175円）<1/>ガイトート　値段　45バーツ（日本円で約175円）<1/>パッタイ　値段　65バーツ（日本円で約254円）<1/>チャーノムイェン　値段25バーツ（日本円で約97円）",
      "Detail3":"日本で「ストリートフード」という言葉は、あまり馴染みのない言葉です。\<br\></br>北海道など雪の降る地域は天候の影響で屋台が年中出せないため、少ない印象です。\<br\></br>雪の降らない東京ではエスニック料理やデザートなどがあります。\<br\></br>料理の種類としては、焼き鳥やタイ焼きなどが定番です。食べることのできる地域は限られますが、どの料理も美味しいため是非食べてみてはいかがでしょうか？",

      "kaitod":"フライドチキン",
      "hoitod":"あさりのフライ",
      'roti':"ロティ",
      'glass':"タイティー",
      'StirFriedBasil':"ガパオライス",
      '':"",

      "taiyaki":"たい焼き",
      "takoyaki":"たこ焼き",
      "ramen":"拉麺",
      "uni":"雲丹",
      "sushi":"寿司",
      "curry":"カレー",


      "ttdis1":"誰でも食べることが出来る、美味しいフライドチキン",
      "titledis1":"Title Comment",
      "price1":"160",
      "tag1":"Tag",
      "popdis1":"甘辛い味付けがされているタイ風の焼き鳥です。味に癖がないため、誰でも食べることが出来る料理です！基本的にどこでも食べることが出来ます。",

      "ttdis2":"外はカリカリ、中はふんわり、卵とムール貝が入っています。チリソースとご一緒にどうぞ。",
      "titledis2":"Title Comment",
      "price2":"160",
      "tag2":"Tag",
      "popdis2":"タイのお好み焼きと言われているホイトート。外側は香ばしく、中はフワッとした貝が美味しいです。仕上げにかけるチリソースはそこまで辛くないので、辛いのが苦手な人も美味しく食べていました！",

      "ttdis3":"カリッと揚げた生地に練乳がかかっており、追加でトッピングが出来ます。",
      "titledis3":"Title Comment",
      "price3":"160",
      "tag3":"Tag",
      "popdis3":"生地がもちもちしていて甘いタイ風のクレープです。種類が何個かあり、卵やバナナ、チョコレートなどを具材にしたものがあります。屋台で気軽に買うことが出来ます！",
      
      "ttdis4":"強い紅茶の香りの紅茶にミルクを注いだタイ風ミルクティーです。とても甘いです。",
      "titledis4":"Title Comment",
      "price4":"160",
      "tag4":"Tag",
      "popdis4":"赤茶色が特徴的なとても甘い紅茶。紅茶の香りが強く、甘いものが好きな私は気に入りました！比較的どこでも入手できますが、屋台で売っているものが手軽でオススメです。",

      "ttdis5":"バジルが香る、味わい深い豚肉と目玉焼きのご飯です。",
      "titledis5":"Title Comment",
      "price5":"160",
      "tag5":"Tag",
      "popdis5":"お肉の旨みと、バジルの爽やかな香りが美味しい一品です。ハーブ特有の匂いがないので、癖がなく日本人も食べやすいです！結構辛いので、辛いのが苦手な人にはオススメできません…！",

      "ttdis6":"小麦粉で作った麺を卵で炒め、ネギともやしでまろやかな味になっています。",
      "titledis6":"Title Comment",
      "price6":"160",
      "tag6":"Tag",
      "popdis6":"米粉を使用している、もちもちとした触感の麺が特徴的です。辛くなく、酸味が強い味の料理です。タイの定番メニューですので是非食べてみてください！",

      "ttdis7":"餡やクリームなど様々な種類がある、鯛の形をしたお菓子です。",
      "titledis7":"Title Comment",
      "price7":"160",
      "tag7":"Tag",
      "popdis7":"たい焼きは日本発祥のお菓子です。特徴として、餡を生地に包んでいて、クリーム味もあります。具材として、小豆やカスタード、サツマイモが詰められています。とても美味しいので、デザートを食べる人に見逃せないおすすめの食べ物です。",

      "ttdis8":"生地の中にタコが入っている、大阪名物の郷土料理です。",
      "titledis8":"Title Comment",
      "price8":"160",
      "tag8":"Tag",
      "popdis8":"丸く、外はカリッと 香ばしく、少し焦げ目があり、中はやわらかいですが火が通っていない訳ではないです。タイとは全く違う味わいです。焼きたてで、とてもやわらかかったです。材料にはタコ、チーズ、野菜が入っていて、その上にマヨネーズ、鰹節、ソースをトッピングします。",
      
      "ttdis9":"中華麺にスープと具材が入った料理です。味は醤油、みそ、塩、とんこつが定番です。",
      "titledis9":"Title Comment",
      "price9":"160",
      "tag9":"Tag",
      "popdis9":"どんぶりには麺のほかにチャーシューが入っています。種類は約3種類から選ぶことが出来て、とても良いです！タイ人にとっては辛くなく、とても食べやすいですが、ナンプラーを多く入れないことをおすすめします。",

      "ttdis10":"ほんのり甘く、クリーミーでコクのある味わい。磯の香りが強いので、日本人でも好き嫌いが分かれます。",
      "titledis10":"Title Comment",
      "price10":"160",
      "tag10":"Tag",
      "popdis10":"味は甘く、少し塩辛く、強烈です。やわらかく、口の中でとろけるような食感です。寿司に溢れるほど乗せます。他にウニ丼として食べても美味しいです。ウニには味があるので、調味料なしで食べても美味しいです。とてもなめらかで美味しいです。",

      "ttdis11":"酢飯の上に魚を乗せた和食です。魚以外にも肉や卵など種類豊富です。",
      "titledis11":"Title Comment",
      "price11":"160",
      "tag11":"Tag",
      "popdis11":"マグロやいくら、サーモンのほかに海苔に包まれたネタの種類があります。安く、新鮮なものを食べることが出来るので満足です！",

      "ttdis12":"とろみのあるカレールーに肉や野菜などが入っているのが特徴です。",
      "titledis12":"Title Comment",
      "price12":"160",
      "tag12":"Tag",
      "popdis12":"日本のカレーライスは濃い茶色のルーです。小麦粉を混ぜてとろみをつけます。香ばしいですが、辛みはなくマイルドな味わいでとても食べやすいです。また、日本のご飯はとてもやわらかいです。メニューやトッピングも豊富で、ポーク、ビーフ、トッピングにはオムライスなど日本ベースものもあります。",
    } 
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;