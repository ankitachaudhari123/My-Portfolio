import React from 'react'
import './AllProject.css'
import Card from './Card';
import paraSponsiv from '../img/para-sponsive.png'
import vegitableECommerce from '../img/vegetables-e-commerce-website.png'
import omkarNutureFarm from '../img/omkar-nature-farm.png'
import grievanceForm from '../img/grievance-from.png'
import royalIndianVivah from '../img/royal-indian-vivah.png'
import nirmatra from '../img/nirmatra.png'
import yahwehInteriors from '../img/yahweh-interiors.png'
import surveForm from '../img/sarve-form.png'
import potencia from '../img/potencia.png'
import suyashFashion from '../img/suyash-fashion.png'
import { FaGithub } from "react-icons/fa";
import { MdInsertLink } from "react-icons/md";

const AllProject = () => {
  const data =[
    {
      img:suyashFashion,
      name:"Suyash Fashion - E-Commerce Website",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"MD Boostrap |",
      language5:"PHP |",
      language6:"Ajax",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:"",
      link1:"",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:potencia,
      name:"Potencia",
      language1:"Wix",
      language2:"",
      language3:"",
      language4:"",
      language5:"",
      language6:"",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:<MdInsertLink color='grey' size="22px"/>,
      link1:"https://github.com/ankitachaudhari123",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:surveForm,
      name:"Surve Form",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"MD Boostrap |",
      language5:"PHP |",
      language6:"Ajax",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:"",
      link1:"",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:yahwehInteriors,
      name:"Yahweh Interiors and Farniture",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"PHP |",
      language5:"Ajax",
      language6:"",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:<MdInsertLink color='grey' size="22px"/>,
      link1:"https://github.com/ankitachaudhari123",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:nirmatra,
      name:"Nirmatra",
      language1:"HTML |",
      language2:"CSS ",
      language3:"",
      language4:"",
      language5:"",
      language6:"",
      icon1:<MdInsertLink color='grey' size="22px"/>,
      icon2:"",
      link1:"",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:royalIndianVivah,
      name:"Royal Indian Vivah - web",
      language1:"HTML |",
      language2:"CSS",
      language3:"",
      language4:"",
      language5:"",
      language6:"",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:<MdInsertLink color='grey' size="25px" />,
      link1:"https://github.com/ankitachaudhari123",
      link2:"https://app.royalindianvivah.com/",
      description:"Contributes in the development of Royal Indian Vivah, a comprehensive matrimony web .Using HTML, CSS and Bootstrap, I crafted the frontend of the web , ensuring its responsiveness and aesthetic appeal.",
    },
    {
      img:grievanceForm,
      name:"Grievance Form",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"MD Boostrap |",
      language5:"PHP |",
      language6:"Ajax",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:"",
      link1:"",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:omkarNutureFarm,
      name:"Omkar Nture Farm",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"MD Boostrap |",
      language5:"PHP |",
      language6:"Ajax",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:<MdInsertLink color='grey' size="25px" />,
      link1:"https://github.com/ankitachaudhari123/Omkar-Nature-Farm.git",
      link2:"http://omkarnaturefarm.com/",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:vegitableECommerce,
      name:"Vegefoods (E - commerace Website)",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"PHP |",
      language5:"Ajax",
      language6:"",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:"",
      link1:"https://github.com/ankitachaudhari123/E-Commerce-Website.git",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
    {
      img:paraSponsiv,
      name:"Para Sponsive (E - commerace Website)",
      language1:"HTML |",
      language2:"CSS |",
      language3:"JavaScript |",
      language4:"MD Boostrap |",
      language5:"PHP |",
      language6:"Ajax",
      icon1:<FaGithub color='grey' size="22px"/>,
      icon2:"",
      link1:"https://github.com/ankitachaudhari123/Para_Sponsive.git",
      link2:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit sunt ab reprehenderit ipsam possimus itaque eum vero distinctio ipsum accusamus, voluptatibus animi. Cumque, mollitia quas blanditiis cum magni natus?",
    },
  ];
  return (
    <div className='card-main-div'>
      <div className='card-heading-div'>
        <h1 className='card-heading'>My All Project</h1>
      </div>
      {
        data.map((arrayData, index)=>{
          return <Card key={index} {...arrayData}/>
        })
      }
    </div>
  )
}

export default AllProject;