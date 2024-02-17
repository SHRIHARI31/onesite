import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, useLocation } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Home from '../home/Home'
import Error from '../error/Error'
import Software from '../dropdowns/serviceDropDown/softwareDevelopement/Software'
import Mobile from '../dropdowns/serviceDropDown/mobileappDevelopement/Mobile'
import Training from '../dropdowns/serviceDropDown/trainingandconsulting/Trainings'
import Webthree from '../dropdowns/serviceDropDown/web3developement/Webthree'
import Itconsulting from '../dropdowns/serviceDropDown/itconsulting/Itconsulting'
import Digitaltransformation from '../dropdowns/serviceDropDown/digitaltransformation/Digitaltransformation'
import Digitalmarketing from '../dropdowns/serviceDropDown/digitalMarketing/Digitalmarketing'
import WebdevelopementDrop from '../dropdowns/serviceDropDown/webDevelopement/WebdevelopementDrop'
import Erp from '../dropdowns/solutonDropDown/ERP/Erp'
import Hrm from '../dropdowns/solutonDropDown/HRM/Hrm'
import Enterprise from '../dropdowns/solutonDropDown/Enterprise/Enterprise'
import Dataanalysis from '../dropdowns/solutonDropDown/dataanalysis/Dataanalysis'
import Itsolution from '../dropdowns/solutonDropDown/itsolution/Itsolution'
import Ecommerce from '../dropdowns/solutonDropDown/e-commerce/Ecommerce'
import SupplyChain from '../dropdowns/solutonDropDown/supplychain/supplyChain'
import Webportals from '../dropdowns/solutonDropDown/webportals/Webportals'
import FrontEnd from '../dropdowns/technologyDropDown/FrontEnd'
import Backend from '../dropdowns/technologyDropDown/Backend'
import Crossplatform from '../dropdowns/technologyDropDown/Crossplatform'
import Fullstack from '../dropdowns/technologyDropDown/Fullstack'
import DevopsMl from '../dropdowns/technologyDropDown/DevopsMl'
import EcommerceCms from '../dropdowns/technologyDropDown/EcommerceCms'
import BlockChain from '../dropdowns/technologyDropDown/BlockChain'
import Mlm from '../dropdowns/IndustryDropDown/Mlm'
import AutomationSoftware from '../dropdowns/IndustryDropDown/AutomationSoftware'
import LogistcSoftware from '../dropdowns/IndustryDropDown/LogistcSoftware'
import Networking from '../dropdowns/IndustryDropDown/Networking'
import SocialMedia from '../dropdowns/IndustryDropDown/SocialMedia'
import ContactPage from '../contactUs/ContactPage'
import HireForm from '../contactUs/HireForm'
import Blog from '../blog/Blog'
import RealContact from '../realContact/RealContact'
import Service from '../service/Service'
import AboutUs from '../about/AboutUs'



const router = createBrowserRouter( //exported to main.jsx

    createRoutesFromElements(
        <>
            <Route path='' element={<Layout />}>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/service/software-development' element={<Software />}></Route>
                <Route path='/service/mobile-app-development' element={<Mobile />}></Route>
                <Route path='/service/web-development' element={<WebdevelopementDrop />}></Route>
                <Route path='/service/training-and-consulting' element={<Training />}></Route>
                <Route path='/service/modern-webthree-development' element={<Webthree />}></Route>
                <Route path='service/it-consulting' element={<Itconsulting />}></Route>
                <Route path='service/digital-transformation' element={<Digitaltransformation />}></Route>
                <Route path='service/digital-marketing' element={<Digitalmarketing />}></Route>
                <Route path='solution/erp-software-solutions' element={<Erp />}></Route>
                <Route path='solution/crm-software-solutions' element={<Hrm />}></Route>
                <Route path='solution/enterprise-software-solution' element={<Enterprise />}></Route>
                <Route path='solution/data-analysis-solution' element={<Dataanalysis />}></Route>
                <Route path='solution/it-solution-management' element={<Itsolution />}></Route>
                <Route path='solution/e-commerce-solution' element={<Ecommerce />}></Route>
                <Route path='solution/supply-chain-solution' element={<SupplyChain />}></Route>
                <Route path='solution/web-portals-solutions' element={<Webportals />}></Route>
                <Route path='technology/front-end' element={<FrontEnd />}></Route>
                <Route path='technology/back-end' element={<Backend />}></Route>
                <Route path='/technology/cross-platform' element={<Crossplatform />}></Route>
                <Route path='technology/full-stack' element={<Fullstack />}></Route>
                <Route path='technology/devops-and-ml' element={<DevopsMl />}></Route>
                <Route path='technology/e-commerce-cms' element={<EcommerceCms />}></Route>
                <Route path='technology/block-chain' element={<BlockChain />}></Route>
                <Route path='/industry/mlm' element={<Mlm />}></Route>
                <Route path='industry/automation' element={<AutomationSoftware />}></Route>
                <Route path='industry/logistic' element={<LogistcSoftware />}></Route>
                <Route path='industry/networking' element={<Networking />}></Route>
                <Route path='industry/social-media' element={<SocialMedia />}></Route>
                <Route path='recruitment-page' element={<ContactPage />}></Route>
                <Route path='blog' element={<Blog />}></Route>
                <Route path='contact-us' element={<RealContact />}></Route>
                <Route path='services' element={<Service />}></Route>
                <Route path='about-us' element={<AboutUs />}></Route>
                <Route path="*" element={<Error />} />

            </Route >


        </>
    )// using outlet as a layout check in layout component
)

export default router