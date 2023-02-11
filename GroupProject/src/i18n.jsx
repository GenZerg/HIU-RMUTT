import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "lang":"../public/images/nav-icon/En.png",
      "langactive":"../public/images/nav-icon/En-red.png",
      "First": "Travel App",
      "Button1":"Thai",
      "Button2":"English",
      "Menu":"Menu",
      
      "detailNav1":"Why street food ?",
      "detailNav2":"Thai street food",
      "detailNav3":"Japan Street food",

      "Member":"Member",
      "Menu1":"Home",
      "Menu2":"Why street food",
      "Menu3":"Thai food",
      "Menu4":"Japan food",
      "Menu5":"Movie",
      "Menu6":"Member",
    }
  },
  th: {
    translation: {
      "lang":"../public/images/nav-icon/Th.png",
      "langactive":"../public/images/nav-icon/Th-red.png",
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
      "Detail1":"อาหารริมทางได้รับความนิยมมากขึ้นเรื่อย ๆ ในช่วงหลายปีที่ผ่านมาโดยพบได้ในเกือบทุกประเทศทั่วโลก มีเหตุผลหลายประการ สําหรับความนิยมรวมถึงผู้ขายริมถนนมักจะขายอาหารราคาไม่แพงพร้อมทานและรสรสชาติที่น่าสนใจ อาหารริมทางมักจะสดใหม่ นั้นคือเหตุผลว่าทําไมอาหารริมทางได้รับความนิยมอย่างมาก!\<br\>•	อาหารริมทางมีราคาไม่แพงมาก\<br\>•	อาหารริมทางก็มักจะสดมาก•	อาหารริมทางมักจะทําเสร็จด้วยความรวดเร็ว\<br\>•	อร่อยและสะดวก\<br\>•	อาหารริมทางเป็นส่วนสําคัญของวัฒนธรรม\<br\>•	เป็นวิธีง่ายๆในการสํารวจวัฒนธรรมที่แตกต่างกัน\<br\> •	ความหลากหลายของอาหาร",
      "Detail2":"lorem",
      "Detail3":"lorem"
    } 
  },
  jp: {
    translation: {
      "lang":"../public/images/nav-icon/Jp.png",
      "langactive":"../public/images/nav-icon/Jp-red.png",
      "First": "旅行",
      "Button1":"タイ語",
      "Button2":"英語",
      "Menu":"メニュー",

      
      "detailNav1":"なぜ屋台の食べ物?",
      "detailNav2":"タイの屋台の食べ物",
      "detailNav3":"日本の屋台の食べ物",

      "Member":"メンバー",

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