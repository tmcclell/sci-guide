"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[977],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:2},i="API Based",c={unversionedId:"E/APIBased",id:"E/APIBased",title:"API Based",description:"What are some of the available APIs that can be used for calculation of energy ?",source:"@site/docs/E/APIBased.md",sourceDirName:"E",slug:"/E/APIBased",permalink:"/E/APIBased",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/E/APIBased.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Energy",permalink:"/E/"},next:{title:"Performance Engineering techniques",permalink:"/E/PerformanceEngineeringBased"}},s={},u=[{value:"What are some of the available APIs that can be used for calculation of energy ?",id:"what-are-some-of-the-available-apis-that-can-be-used-for-calculation-of-energy-",level:3}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-based"},"API Based"),(0,a.kt)("h3",{id:"what-are-some-of-the-available-apis-that-can-be-used-for-calculation-of-energy-"},"What are some of the available APIs that can be used for calculation of energy ?"),(0,a.kt)("p",null," The API-based technique is one of the simplest options to get energy consumption for the hardware resources running your application. We have providers like Climatiq - ",(0,a.kt)("a",{parentName:"p",href:"https://www.climatiq.io/docs"},"https://www.climatiq.io/docs"),"\nwhich provides APIs to get CO2e for the power consumption for computing (CPU), storage and memory.\nThe API documentation is available at - ",(0,a.kt)("a",{parentName:"p",href:"https://www.climatiq.io/docs#cpu"},"https://www.climatiq.io/docs#cpu")),(0,a.kt)("p",null," Following is a sample request and response to get energy consumption for a CPU with 1 hr utilization\nrunning in the uk_west region."),(0,a.kt)("h1",{id:"request"},"Request:"),(0,a.kt)("p",null," curl --request POST \\\n--url ",(0,a.kt)("a",{parentName:"p",href:"https://beta3.api.climatiq.io/compute/azure/cpu"},"https://beta3.api.climatiq.io/compute/azure/cpu"),' \\\n--header \'Authorization: Bearer API_KEY\' \\\n--data \'{\n"cpu_count": 1,\n"region": "uk_west",\n"cpu_load": 1,\n"duration": 1,\n"duration_unit": "h"\n}\''),(0,a.kt)("h1",{id:"response"},"Response:"),(0,a.kt)("p",null,'{\n"co2e": 0.00057841,\n"co2e_unit": "kg",\n"co2e_calculation_method": "ar4",\n"co2e_calculation_origin": "source",\n"emission_factor": {\n"activity_id": "cpu-provider_azure-region_uk_west",\n"uuid": "be353893-f270-43a3-9d0f-82b2a6c8b46c",\n"id": "cpu-provider_azure-region_uk_west",\n"access_type": "public",\n"source": "CCF",\n"year": "2021",\n"region": "GB-CDF",\n"category": "Cloud Computing - CPU",\n"lca_activity": "use_phase",\n"data_quality_flags": []\n},\n"constituent_gases": {\n"co2e_total": 0.00057841,\n"co2e_other": null,\n"co2": null,\n"ch4": null,\n"n2o": null\n}\n}'))}p.isMDXComponent=!0}}]);