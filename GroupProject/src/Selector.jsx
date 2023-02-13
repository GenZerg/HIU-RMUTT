import SelectlayoutFirst from "./components/SelectlayoutFirst";
import SelectLayoutsecond from "./components/SelectLayoutsecond";
import SelectLayoutThird from "./components/SelectLayoutThird";
import i18n from './i18n'
import { useTranslation } from 'react-i18next'

const datalist = [{
     title:"../public/images/gifs/Cheapandtasty.gif",
     detail:"Detail1",
},
{
     title:"../public/images/gifs/THfood.gif",
     detail:"Detail2",
},
{
     title:"../public/images/gifs/JPfood.gif",
     detail:"Detail3",
}
]




const Selector = ({
     streetfood1: <SelectlayoutFirst title = {datalist[0].title} detail ={datalist[0].detail}/>,
     streetfood2: <SelectLayoutsecond title = {datalist[1].title} detail ={datalist[1].detail}/>,
     streetfood3: <SelectLayoutThird title = {datalist[2].title} detail ={datalist[2].detail}/>
}
)

     


export default Selector;