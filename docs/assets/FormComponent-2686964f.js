import{u as m,f as x,_ as d,o as n,g as i,w as p,a,h as s,i as c,j as f}from"./index-9ce7e9d6.js";import{S as r}from"./sweetalert2.all-7a835e31.js";const g={props:[],data(){return{userState:m(),user:{},selectedFacility:"",majorOpts:{plant:["การส่งเสริมและสื่อสารเกษตร","เกษตรเคมี","พืชไร่","พืชสวน","สาขาพืชผัก","พืชสวน","สาขาพืชสวนประดับ","พืชสวน","สาขาไม้ผล","วิทยาการสมุนไพร","อารักขาพืช","การส่งเสริมและสื่อสารเกษตร","พืชไร่"],sci:["วัสดุศาสตร์","คณิตศาสตร์","เคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ","เทคโนโลยีชีวภาพ เทคโนโลยีสารสนเทศ","ฟิสิกส์ประยุกต์","วิทยาการคอมพิวเตอร์","วิทยาศาสตรบัณฑิต","สาขาวิชาเคมี","สถิติ"]}}},methods:{async onSubmit(E){try{x.parse(E),await new Promise(e=>setTimeout(e,1e3)).then(()=>{this.userState.pushState(E),console.log(this.userState.getState),this.$formkit.reset("student-form"),this.user={},r.fire({icon:"success",title:"Submit succeed",text:"Push state successfully"})})}catch(e){r.fire({icon:"error",title:"Error while tried to push statement!",text:e,footer:'<a class="text-danger">We found something strange about how your input form, please try again </a>'});return}},invalidation(){r.fire({icon:"error",title:"Values are invalid!",text:"are your form values really valid?. Please checked your form again!"})},selectMajor(E){switch(E){case"sci":return this.majorOpts.sci;case"plant":return this.majorOpts.plant;default:return this.majorOpts.sci}}}},b=a("hr",null,null,-1),V=a("div",{class:"text-center"},null,-1),y={class:"grid sm:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-20 my-6"};function h(E,e,v,S,u,o){const l=f("FormKit");return n(),i(l,{type:"form",id:"student-form",onSubmitInvalid:o.invalidation,"submit-label":"Register","messages-class":"text-center",actions:!1,onSubmit:o.onSubmit},{default:p(({value:B})=>[b,V,a("div",y,[s(l,{modelValue:u.user.prefixName,"onUpdate:modelValue":e[0]||(e[0]=t=>u.user.prefixName=t),type:"select",name:"prefixName",label:"Prefix","inner-class":"text-xs lg:text-sm xl:text-base",placeholder:"คำนำหน้า",help:"นาย | นาง | นางสาว",options:["นาย","นางสาว","นาง"],validation:"required"},null,8,["modelValue"]),s(l,{modelValue:u.user.name,"onUpdate:modelValue":e[1]||(e[1]=t=>u.user.name=t),type:"text",name:"name",label:"Name","inner-class":"text-xs lg:text-sm xl:text-base",placeholder:"ชื่อ",help:"ชื่อเต็ม",validation:"required|length:5"},null,8,["modelValue"]),s(l,{modelValue:u.user.stuCode,"onUpdate:modelValue":e[2]||(e[2]=t=>u.user.stuCode=t),type:"text",name:"stuCode","inner-class":"text-xs lg:text-sm xl:text-base",label:"Student Code",validation:"required|length:10,10|number",placeholder:"เลขนักศีกษา",help:"640xxxxxxx"},null,8,["modelValue"]),s(l,{modelValue:u.user.tel,"onUpdate:modelValue":e[3]||(e[3]=t=>u.user.tel=t),type:"text",name:"tel","inner-class":"text-xs lg:text-sm xl:text-base",label:"Telephone",validation:"required|length:10,10|number",placeholder:"เบอร์โทรศัพท์",help:"065xxxxxxx"},null,8,["modelValue"]),s(l,{modelValue:u.user.civilId,"onUpdate:modelValue":e[4]||(e[4]=t=>u.user.civilId=t),type:"text",name:"civilId","inner-class":"text-xs lg:text-sm xl:text-base",label:"Citizen ID",placeholder:"เลขประจำตัวประชาชน",validation:"required|number|length:13,13",help:"150xxxxxxxxxx"},null,8,["modelValue"]),s(l,{modelValue:u.user.cSelection,"onUpdate:modelValue":e[5]||(e[5]=t=>u.user.cSelection=t),type:"select",name:"cSelection","inner-class":"text-xs lg:text-sm xl:text-base",label:"Course Selection",options:["4 - 5 ปี","4 ปีเทียบเข้าเรียน (2 ปี)"],placeholder:"เลือกหลักสูตร",validation:"required"},null,8,["modelValue","options"]),s(l,{modelValue:u.user.gpa,"onUpdate:modelValue":e[6]||(e[6]=t=>u.user.gpa=t),type:"text",name:"gpa","inner-class":"text-xs lg:text-sm xl:text-base",label:"GPA",placeholder:"ป้อนหน่วยกิต",validation:"required|number|length:1,4"},null,8,["modelValue"]),s(l,{type:"select",name:"facility",modelValue:u.user.facility,"onUpdate:modelValue":e[7]||(e[7]=t=>u.user.facility=t),"inner-class":"text-xs lg:text-sm xl:text-base",label:"Facility",options:{sci:"วิทยาศาสตร์",plant:"ผลิตกรรมการเกษตร์"},placeholder:"เลือกหลักสูตร",validation:"required"},null,8,["modelValue"]),u.user.facility?(n(),i(l,{key:0,modelValue:u.user.major,"onUpdate:modelValue":e[8]||(e[8]=t=>u.user.major=t),type:"select",name:"major","outer-class":"col-span-full lg:flex flex-col items-center justify-center grow",options:o.selectMajor(u.user.facility),"inner-class":" text-xs lg:text-sm xl:text-base",label:"Major",placeholder:"เลือกหลักสูตร",validation:"required"},null,8,["modelValue","options"])):c("",!0),s(l,{modelValue:u.user.annotation,"onUpdate:modelValue":e[9]||(e[9]=t=>u.user.annotation=t),type:"textarea",name:"annotation","outer-class":"col-span-full lg:flex flex-col items-center justify-center grow","inner-class":" text-xs lg:text-sm break-words",cols:"100",label:"Annotation",placeholder:"หมายเหตุ",validation:"required|length:10,50"},null,8,["modelValue"])]),s(l,{"input-class":"bg-accent",type:"submit",label:"Register","outer-class":"w-full flex justify-center"})]),_:1},8,["onSubmitInvalid","onSubmit"])}const A=d(g,[["render",h]]);export{A as default};
