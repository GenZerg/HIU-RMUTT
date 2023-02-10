import SelectlayoutFirst from "./components/SelectlayoutFirst";
import SelectLayoutsecond from "./components/SelectLayoutsecond";
import SelectLayoutThird from "./components/SelectLayoutThird";

const datalist = [{
     title:"../public/images/TNCR8008.png",
     detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.",
},
{
     title:"../public/images/TNCR8008.png",
     detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.",
},
{
     title:"../public/images/TNCR8008.png",
     detail:"i ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.",
}
]




const Selector = ({
     streetfood1: <SelectlayoutFirst title = {datalist[0].title} detail ={datalist[0].detail}/>,
     streetfood2: <SelectLayoutsecond title = {datalist[1].title} detail ={datalist[1].detail}/>,
     streetfood3: <SelectLayoutThird title = {datalist[2].title} detail ={datalist[2].detail}/>
}
)

     


export default Selector;