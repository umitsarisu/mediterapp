(function(){"use strict";var e={606:function(e,t,a){var r=a(751),s=a(641);function n(e,t,a,r,n,i){const l=(0,s.g2)("NavBar"),o=(0,s.g2)("router-view"),c=(0,s.g2)("ContextVue"),d=(0,s.g2)("ModalVue");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l,{class:"navbar-position p-0"}),((0,s.uX)(),(0,s.Wv)(s.PR,null,[(0,s.bF)(o,{style:{"padding-left":"10px","align-content":"flex-start"}})],1024)),(0,s.bF)(d,null,{default:(0,s.k6)((()=>[(0,s.bF)(c)])),_:1})])}var i=a(33);const l={class:"nav flex-column ps-1"},o=(0,s.Lk)("i",{class:"fa fa-random fa-lg fa-fw ms-2 me-2"},null,-1),c=(0,s.Lk)("i",{class:"fa fa-search fa-lg fa-fw ms-2 me-2"},null,-1);function d(e,t,a,r,n,d){const u=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("aside",null,[(0,s.Lk)("ul",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.items,(e=>((0,s.uX)(),(0,s.Wv)(u,{"active-class":"active",exact:"",key:e.name,tag:"li",to:e.to,class:(0,i.C4)(e.linkClass)},{default:(0,s.k6)((()=>[(0,s.Lk)("a",{class:(0,i.C4)(n.aClasses)},[(0,s.Lk)("i",{class:(0,i.C4)([e.iClass]),"aria-hidden":"true"},null,2),(0,s.Lk)("span",{class:(0,i.C4)(e.spanClass)},(0,i.v_)(e.name),3)],2)])),_:2},1032,["to","class"])))),128)),(0,s.Lk)("li",null,[(0,s.Lk)("a",{"data-bs-toggle":"modal","data-bs-target":"#copyPasteModal",class:"nav-link text-white",onClick:t[0]||(t[0]=e=>d.setActiveComponent("RandomValueGenerator"))},[o,(0,s.eW)("Rastgele Değer Üretici")])]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{"data-bs-toggle":"modal","data-bs-target":"#copyPasteModal",class:"nav-link text-white",onClick:t[1]||(t[1]=e=>d.setActiveComponent("MagnifyingGlass"))},[c,(0,s.eW)("Büyüteç")])])])])}var u={data(){return{aClasses:"nav-link text-white",activeComponent:"MagnifyingGlass",items:[{to:"/",linkClass:"ms-0 mt-2 nav-item",iClass:"fas fa-home fa-2x fa-fw",spanClass:"fs-2",name:"Anasayfa"},{to:"/copy-paste",linkClass:"ms-2 nav-link text-white",iClass:"fa fa-copy fa-lg fa-fw ms-2",spanClass:"",name:"Kopyala Yapıştır"},{to:"/spare-parts-page",linkClass:"",iClass:"fa fa-wrench fa-lg fa-fw ms-2 me-2",spanClass:"",name:"Yedek Parçalar"},{to:"/current-codes-page",linkClass:"",iClass:"fa fa-vcard fa-lg fa-fw ms-2 me-2",spanClass:"",name:"Cari Kodlar"},{to:"/device-register-form",linkClass:"",iClass:"fa fa-file-text-o fa-lg fa-fw ms-2 me-2",spanClass:"",name:"Cihaz Kayıt Formu"},{to:"/run-in-form",linkClass:"",iClass:"fa fa-file-text-o fa-lg fa-fw ms-2 me-2",spanClass:"",name:"Run-In Formu"},{to:"/sign-up",linkClass:"",iClass:"fa fa-vcard fa-lg fa-fw ms-2 me-2",spanClass:"",name:"sign-up"}]}},methods:{setActiveComponent(e){this.$store.commit("setActiveModalComponent",e)}}},p=a(262);const m=(0,p.A)(u,[["render",d]]);var f=m,h={created(){},components:{NavBar:f}};const k=(0,p.A)(h,[["render",n]]);var v=k,g=a(220),L="data:image/png;base64,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";const C=e=>((0,s.Qi)("data-v-7348fabd"),e=e(),(0,s.jt)(),e),b={style:{"background-color":"#95afc0"},class:"text-center position-relative"},y=C((()=>(0,s.Lk)("img",{src:L,class:"nav-img"},null,-1))),x=C((()=>(0,s.Lk)("span",{class:"text-dark"},"Geri",-1))),P=[y,x],w=C((()=>(0,s.Lk)("h1",{style:{"line-height":"10vh"}},"Yedek Parçalar",-1))),U={class:"container"};function E(e,t,a,r,n,i){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("header",b,["spare-parts-page"!=this.$route.path.slice(1)?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=t=>e.$router.push("/spare-parts-page")),class:"nav-btn",id:"backwardButton"},P)):(0,s.Q3)("",!0),w]),(0,s.Lk)("div",U,[(0,s.bF)(l)])])}var A={data(){return{}},computed:{currentRouteName(){return this.$route.name}}};const X=(0,p.A)(A,[["render",E],["__scopeId","data-v-7348fabd"]]);var I=X;const j=e=>((0,s.Qi)("data-v-23598f6a"),e=e(),(0,s.jt)(),e),T={class:"mb-3"},V={class:"container"},S={class:"bar"},K={class:"input-group"},z=j((()=>(0,s.Lk)("span",{class:"input-group-text"},"Filtrele",-1))),N=j((()=>(0,s.Lk)("option",{selected:"",value:"Bütün Parçalar"},"Bütün Parçalar",-1))),O=["value"],R={class:"input-group mt-1"},q=j((()=>(0,s.Lk)("span",{class:"input-group-text"},"Arama",-1))),F={class:"d-flex justify-content-center"},G={class:"container d-flex flex-wrap justify-content-around mt-2"},Q={class:"card shadow"},B={class:"card-body"},Y={class:"text-center"},H=["src","alt"],M={class:"partName align-content-center text-dark"},W={class:"fw-bold",name:"ydkCode"},D=j((()=>(0,s.Lk)("hr",null,null,-1))),_={name:"ydkCode"},J={class:"card-footer d-flex justify-content-between",name:"ydkDefinition"},Z=j((()=>(0,s.Lk)("i",{class:"fa fa-edit",style:{cursor:"pointer"}},null,-1)));function $(e,t,a,n,l,o){const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",T,[(0,s.Lk)("div",V,[(0,s.Lk)("div",S,[(0,s.Lk)("div",K,[z,(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"filter","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedDefinition=e)},[N,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.definitions,(e=>((0,s.uX)(),(0,s.CE)("option",{value:e},(0,i.v_)(e),9,O)))),256))],512),[[r.u1,l.selectedDefinition]])]),(0,s.Lk)("div",R,[q,(0,s.bo)((0,s.Lk)("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>l.searchText=e),type:"search",id:"search",placeholder:"Search","aria-label":"Search",autocomplete:"off"},null,512),[[r.Jo,l.searchText]])]),(0,s.Lk)("div",F,[(0,s.bF)(c,{class:"btn btn-warning mt-2 text-center d-block",to:"/new-part"},{default:(0,s.k6)((()=>[(0,s.eW)("Yeni Parça Ekle")])),_:1})])])]),(0,s.Lk)("div",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.filteredSpareParts,(e=>((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.Lk)("div",B,[(0,s.Lk)("div",Y,[(0,s.Lk)("img",{src:e.imgUrl,class:"card-img-top img img-thumbnail",alt:e.alt},null,8,H),(0,s.Lk)("h3",M,(0,i.v_)(e.name),1),(0,s.Lk)("p",W,(0,i.v_)(e.code),1),D,(0,s.Lk)("p",_,(0,i.v_)(e.model),1),(0,s.Lk)("p",null,(0,i.v_)(e.explanation),1)])]),(0,s.Lk)("div",J,[(0,s.eW)((0,i.v_)(e.definition)+" ",1),(0,s.bF)(c,{to:`update/${e.id}`},{default:(0,s.k6)((()=>[Z])),_:2},1032,["to"])])])))),256))])])}var ee=a(223),te=a(430),ae=a(904),re=a(15);const se={apiKey:"AIzaSyBdcQMeLQJYxC66EmfeIaRrgc8g0PtVfng",authDomain:"meditera-app-6302e.firebaseapp.com",projectId:"meditera-app-6302e",storageBucket:"meditera-app-6302e.appspot.com",messagingSenderId:"19674520398",appId:"1:19674520398:web:c1f309351eddded46fdc1f"},ne=(0,ee.Wp)(se),ie=(0,te.aU)(),le=(0,ae.c7)(ne),oe=(0,te.rJ)(ie,"spare-parts"),ce=(0,te.rJ)(ie,"current-codes");(0,re.xI)();var de={data(){return{searchText:"",partList:[],spareParts:[],fixingPart:null,selectedDefinition:"Bütün Parçalar",definitions:["Kasalar","Vidalar","Kartlar","Etiketler","Kablolar","Diğer"]}},computed:{filteredSpareParts(){if(this.searchText){const e=this.searchText.toLocaleLowerCase("tr");return this.spareParts.filter((t=>{if(t.name.toLocaleLowerCase("tr").match(e)||t.code.toLocaleLowerCase("tr").match(e)||t.explanation.toLocaleLowerCase("tr").match(e))return t}))}if(this.selectedDefinition)return this.spareParts.filter((e=>"Bütün Parçalar"==this.selectedDefinition||e.definition==this.selectedDefinition?e:void 0))}},methods:{capitalized(e){let t=e.split(" "),a=t.map((e=>e.charAt(0).toLocaleUpperCase("tr")+e.slice(1)));return a.join(" ")}},watch:{searchText(){this.searchText=this.capitalized(this.searchText.toLocaleLowerCase("tr"))}},mounted(){(0,te.GG)(oe).then((e=>{const t=e.docs.length;e.docs.forEach(((e,a)=>{a!=t-1&&this.spareParts.push({...e.data(),id:e.id})}))}))}};const ue=(0,p.A)(de,[["render",$],["__scopeId","data-v-23598f6a"]]);var pe=ue;const me=e=>((0,s.Qi)("data-v-0b8fed02"),e=e(),(0,s.jt)(),e),fe={class:"container position-relative"},he={class:"row d-flex justify-content-center"},ke={class:"col-12 col-lg-8"},ve={key:0,class:"fa fa-wrench fa-5x text-center img-thumbnail shadow",style:{"line-height":"200px"}},ge=["src","alt"],Le={class:"row justify-content-center m-0 pb-3"},Ce={class:"col-10 col-md-8 col-lg-7 col-xl-6"},be={class:"input-group mt-2"},ye=["required"],xe={key:0,class:"alert alert-danger text-center mt-2",role:"alert"},Pe=me((()=>(0,s.Lk)("hr",null,null,-1))),we={class:"input-group justify-content-evenly"},Ue=me((()=>(0,s.Lk)("label",{class:"input-group-text",for:"name"},"Parça Adı: ",-1))),Ee={class:"input-group justify-content-evenly"},Ae=me((()=>(0,s.Lk)("label",{class:"input-group-text",for:"code"},"Stok Kodu: ",-1))),Xe={class:"input-group justify-content-evenly"},Ie=me((()=>(0,s.Lk)("label",{class:"input-group-text",for:"model"},"Cihaz Modeli: ",-1))),je=me((()=>(0,s.Lk)("option",{value:"Ortak"},"Ortak",-1))),Te=me((()=>(0,s.Lk)("option",{value:"Plum A"},"Plum A",-1))),Ve=me((()=>(0,s.Lk)("option",{value:"Plum 360"},"Plum 360",-1))),Se=[je,Te,Ve],Ke={class:"input-group justify-content-evenly"},ze=me((()=>(0,s.Lk)("label",{class:"input-group-text",for:"definition"},"Tanım: ",-1))),Ne=["value"],Oe={class:"input-group justify-content-evenly"},Re=me((()=>(0,s.Lk)("label",{class:"input-group-text",for:"explanation"},"Açıklama: ",-1))),qe={class:"list-group mt-2"},Fe={class:"list-group-item text-center"},Ge=me((()=>(0,s.Lk)("label",{class:"form-check-label pe-2",for:"test"}," Visual Inspection Parçası mı? ",-1))),Qe={key:0,class:"list-group-item text-center"},Be={key:0,class:"alert alert-warning",role:"alert"},Ye=me((()=>(0,s.Lk)("span",null,"Opsiyonel: ",-1))),He={class:"btn-group",role:"group"},Me=me((()=>(0,s.Lk)("label",{class:"btn btn-outline-danger",for:"122"},"122",-1))),We=me((()=>(0,s.Lk)("label",{class:"btn btn-outline-danger",for:"141"},"141",-1))),De=me((()=>(0,s.Lk)("div",{class:"d-flex justify-content-center"},[(0,s.Lk)("button",{type:"submit",class:"btn btn-success my-3 justify-content-center"},"Kaydet")],-1))),_e={class:"text-center"},Je={key:0,class:"row saveAlert"},Ze=me((()=>(0,s.Lk)("div",{class:"col-12 col-lg-8 m-auto d-flex justify-content-center"},[(0,s.Lk)("div",{class:"alert alert-primary m-0"},"Kayıt edildi")],-1))),$e=[Ze];function et(e,t,a,n,l,o){return(0,s.uX)(),(0,s.CE)("div",fe,[(0,s.Lk)("div",he,[(0,s.Lk)("div",ke,[(0,s.Lk)("form",{class:"pt-1",onSubmit:t[12]||(t[12]=(0,r.D$)((e=>this.id?o.updatePart():o.savePart()),["prevent"]))},[this.sparePart.imgUrl?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("i",ve)),this.sparePart.imgUrl?((0,s.uX)(),(0,s.CE)("img",{key:1,src:this.sparePart.imgUrl,alt:"("+l.sparePart.name+")",class:"rounded mx-auto d-block img-thumbnail shadow"},null,8,ge)):(0,s.Q3)("",!0),(0,s.Lk)("div",Le,[(0,s.Lk)("div",Ce,[(0,s.Lk)("div",be,[(0,s.Lk)("input",{type:"file",class:"form-control",ref:"file1",accept:[" image/jpeg","image/png"],onChange:t[0]||(t[0]=(...e)=>o.setImageUrl&&o.setImageUrl(...e)),onClick:t[1]||(t[1]=e=>l.error=""),required:!this.id},null,40,ye)]),l.error?((0,s.uX)(),(0,s.CE)("div",xe,(0,i.v_)(l.error),1)):(0,s.Q3)("",!0),Pe,(0,s.Lk)("div",we,[Ue,(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text",id:"name","onUpdate:modelValue":t[2]||(t[2]=e=>l.sparePart.name=e),required:""},null,512),[[r.Jo,l.sparePart.name,void 0,{trim:!0}]])]),(0,s.Lk)("div",Ee,[Ae,(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text",id:"code","onUpdate:modelValue":t[3]||(t[3]=e=>l.sparePart.code=e),required:"",onClick:t[4]||(t[4]=(...e)=>o.copy&&o.copy(...e))},null,512),[[r.Jo,l.sparePart.code,void 0,{trim:!0}]])]),(0,s.Lk)("div",Xe,[Ie,(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"model","onUpdate:modelValue":t[5]||(t[5]=e=>l.sparePart.model=e),required:""},Se,512),[[r.u1,l.sparePart.model]])]),(0,s.Lk)("div",Ke,[ze,(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"definition","onUpdate:modelValue":t[6]||(t[6]=e=>l.sparePart.definition=e),required:""},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.definitions,(e=>((0,s.uX)(),(0,s.CE)("option",{value:e},(0,i.v_)(e),9,Ne)))),256))],512),[[r.u1,l.sparePart.definition]])]),(0,s.Lk)("div",Oe,[Re,(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text",id:"explanation","onUpdate:modelValue":t[7]||(t[7]=e=>l.sparePart.explanation=e),required:""},null,512),[[r.Jo,l.sparePart.explanation,void 0,{trim:!0,capitalize:!0}]])]),(0,s.Lk)("ul",qe,[(0,s.Lk)("li",Fe,[Ge,(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox",value:"visual inspection",id:"test","onUpdate:modelValue":t[8]||(t[8]=e=>l.sparePart.test=e)},null,512),[[r.lH,l.sparePart.test,void 0,{capitalize:!0}]])]),l.sparePart.test?((0,s.uX)(),(0,s.CE)("li",Qe,[this.sparePart.viCode?((0,s.uX)(),(0,s.CE)("div",Be,(0,i.v_)(this.sparePart.viCode)+" seçildi! ",1)):(0,s.Q3)("",!0),Ye,(0,s.Lk)("div",He,[(0,s.Lk)("input",{type:"radio",class:"btn-check",name:"viCode",id:"122",onClick:t[9]||(t[9]=e=>this.sparePart.viCode=122)}),Me,(0,s.Lk)("input",{type:"radio",class:"btn-check",name:"viCode",id:"141",onClick:t[10]||(t[10]=e=>this.sparePart.viCode=141)}),We])])):(0,s.Q3)("",!0)]),De,(0,s.Lk)("div",_e,[(0,s.Lk)("a",{class:"text-danger",onClick:t[11]||(t[11]=(0,r.D$)(((...e)=>o.deletePart&&o.deletePart(...e)),["prevent"])),style:{cursor:"pointer"}},"Parçayı silmek için tıklayın!")])])])],32)])]),l.isAlert?((0,s.uX)(),(0,s.CE)("div",Je,$e)):(0,s.Q3)("",!0)])}var tt={data(){return{sparePart:{name:"",code:"",model:"",definition:"",explanation:"",imgUrl:"",test:"",viCode:""},imageUrl:"",error:"",isAlert:!1,id:"",docRef:"",definitions:["Kasalar","Vidalar","Kartlar","Etiketler","Kablolar","Diğer"]}},methods:{setImageUrl(e){const t=["image/png","image/jpeg"];if(this.imageUrl=e.target.files[0],!t.includes(this.imageUrl.type))return this.error="Jpeg ya da Png formatında bir resim seçin!";{let e=new FileReader;e.onload=e=>{this.sparePart.imgUrl=e.target.result},e.readAsDataURL(this.imageUrl)}},uploadImage(){const e=`assets/${this.sparePart.code}.jpg`,t=(0,ae.KR)(le,e);(0,ae.D)(t,this.imageUrl).then((e=>{})),setTimeout((()=>{(0,ae.qk)((0,ae.KR)(le,e)).then((e=>{this.sparePart.imgUrl=e}))}),2e3)},deleteImage(){if(this.sparePart.imgUrl){const e=(0,ae.c7)(),t=(0,ae.KR)(e,`assets/${this.sparePart.code}.jpg`);(0,ae.XR)(t).then((()=>{}))}},resetPart(){this.sparePart={name:"",code:"",model:"",definition:"",explanation:"",imgUrl:"",test:"",viCode:""},this.imageUrl="",this.$refs.file1.value=""},alert(){this.isAlert=!0,setTimeout((()=>{this.isAlert=!1,this.resetPart(),this.id&&fa.push("/spare-parts-page")}),1e3)},savePart(){this.uploadImage(),(0,te.gS)(oe,{...this.sparePart}),this.alert()},updatePart(){this.imageUrl&&this.uploadImage(),(0,te.mZ)(this.docRef,{...this.sparePart}),this.alert()},deletePart(){while(1){let e=prompt("Parolayı girin:");if(null==e)break;if(1234==e){(0,te.kd)(this.docRef),this.deleteImage(),setTimeout((()=>{fa.push("/spare-parts-page")}),1e3);break}}},capitalized(e){let t=e.split(" "),a=t.map((e=>e.charAt(0).toLocaleUpperCase("tr")+e.slice(1)));return a.join(" ")},copy(){let e=document.createElement("textarea");document.body.appendChild(e),e.value=this.sparePart.code+".jpg",e.select(),document.execCommand("copy"),document.body.removeChild(e)}},watch:{"sparePart.name"(){this.sparePart.name=this.capitalized(this.sparePart.name.toLocaleLowerCase("tr"))},"sparePart.code"(){this.sparePart.code=this.sparePart.code.toUpperCase()},"sparePart.explanation"(){this.sparePart.explanation=this.capitalized(this.sparePart.explanation.toLocaleLowerCase())}},created(){this.id=this.$route.params.partId,this.id&&(this.docRef=(0,te.H9)(ie,"spare-parts",this.id),(0,te.x7)(this.docRef).then((e=>{this.sparePart=e.data()})))}};const at=(0,p.A)(tt,[["render",et],["__scopeId","data-v-0b8fed02"]]);var rt=at;const st=e=>((0,s.Qi)("data-v-dca60124"),e=e(),(0,s.jt)(),e),nt={class:"col-11 col-md-6 col-lg-4 box pt-2 bg-light"},it={class:"text-center m-0 mt-1"},lt=st((()=>(0,s.Lk)("hr",null,null,-1))),ot={class:"px-4 d-flex flex-column justify-content-around"},ct=["on-keyup","placeholder"],dt=["on-keyup"],ut={key:0,type:"submit",class:"submit-button btn-primary"},pt=["disabled"],mt={class:"text-center mt-1"};function ft(e,t,a,n,l,o){return(0,s.uX)(),(0,s.CE)("form",{onSubmit:t[5]||(t[5]=(0,r.D$)((e=>o.onSubmit()),["prevent"])),class:"container d-flex justify-content-center align-items-center",autocomplete:"on"},[(0,s.Lk)("div",nt,[(0,s.Lk)("h3",it,(0,i.v_)(l.loginPageTexts.header),1),lt,(0,s.Lk)("div",ot,[(0,s.Lk)("div",null,[(0,s.bo)((0,s.Lk)("input",{type:"email",class:"text-input",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.user.email=e),placeholder:"usermail@email.com",autocomplete:"on"},null,512),[[r.Jo,l.user.email,void 0,{trim:!0}]]),(0,s.bo)((0,s.Lk)("input",{class:"text-input",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>l.user.password=e),"on-keyup":o.confirm(),placeholder:l.loginPageTexts.passwordText,type:"password",minlength:"6"},null,40,ct),[[r.Jo,l.user.password,void 0,{trim:!0}]]),l.isSignIn?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,class:"text-input",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>l.user.confirmPassword=e),"on-keyup":o.confirm,placeholder:"Şifreyi doğrulayın",type:"password",minlength:"6"},null,40,dt)),[[r.Jo,l.user.confirmPassword,void 0,{trim:!0}]]):(0,s.Q3)("",!0)]),l.isSignIn?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",ut,"Giriş")),l.isSignIn?((0,s.uX)(),(0,s.CE)("button",{key:1,type:"submit",class:"submit-button btn-primary",disabled:!o.confirm()},"Kaydet",8,pt)):(0,s.Q3)("",!0),l.isSignIn?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("a",{key:2,class:"text-center",onClick:t[3]||(t[3]=(0,r.D$)((e=>o.forgottenPassword()),["prevent"]))},"Şifremi unuttum!")),(0,s.Lk)("p",mt,[(0,s.eW)((0,i.v_)(l.loginPageTexts.text)+" ",1),(0,s.Lk)("a",{onClick:t[4]||(t[4]=(0,r.D$)((e=>l.isSignIn=!l.isSignIn),["prevent"]))},"Tıklayın!")])])])],32)}var ht={data(){return{user:{email:"",password:"",confirmPassword:""},isSignIn:!1,loginPageTexts:{header:"Giriş Yap",passwordText:"Şifre",text:"Yeni Hesap Oluşturmak için"}}},methods:{confirm(){if(""!=this.user.password&&this.user.password===this.user.confirmPassword&&this.user.password.length>=6)return!0},onSubmit(){localStorage.setItem("userEmail",this.user.email),this.$store.dispatch("login",{...this.user,isSignIn:this.isSignIn}).then((e=>{this.$router.push("/")}))},forgottenPassword(){console.log("şifreni mi unuttun sen")}},created(){this.user.email=localStorage.getItem("userEmail")},watch:{isSignIn(){this.isSignIn?this.loginPageTexts={header:"Hesap Oluştur",passwordText:"Şifre oluştur",text:"Giriş yapmak için"}:this.loginPageTexts={header:"Giriş Yap",passwordText:"Şifre",text:"Yeni Hesap Oluşturmak için"}}}};const kt=(0,p.A)(ht,[["render",ft],["__scopeId","data-v-dca60124"]]);var vt=kt;const gt=e=>((0,s.Qi)("data-v-2451cdba"),e=e(),(0,s.jt)(),e),Lt=gt((()=>(0,s.Lk)("header",{style:{"background-color":"#95afc0"},class:"text-center position-relative"},[(0,s.Lk)("h1",{style:{"line-height":"10vh"}},"Cari Kodlar")],-1))),Ct={class:"container"},bt={class:"bar"},yt={class:"input-group mt-1"},xt=gt((()=>(0,s.Lk)("span",{class:"input-group-text"},"Arama",-1))),Pt={class:"d-flex justify-content-center"},wt={key:0,class:"row mt-2"},Ut={class:"row justify-content-center m-0"},Et={class:"col-10 col-md-8 col-lg-7 col-xl-6 py-3 px-5 position-relative",style:{"background-color":"#e9ecef"}},At={class:"text-center"},Xt={class:"input-group justify-content-evenly"},It=gt((()=>(0,s.Lk)("label",{class:"input-group-text",for:"code"},"Cari Kodu: ",-1))),jt={class:"input-group justify-content-evenly mt-1"},Tt=gt((()=>(0,s.Lk)("label",{class:"input-group-text",for:"name"},"Hastane Adı: ",-1))),Vt={class:"input-group justify-content-evenly mt-1"},St=gt((()=>(0,s.Lk)("label",{class:"input-group-text",for:"location"},"Cari Bölgesi: ",-1))),Kt=gt((()=>(0,s.Lk)("option",{value:"İstanbul"},"İstanbul",-1))),zt=gt((()=>(0,s.Lk)("option",{value:"İzmir"},"İzmir",-1))),Nt=gt((()=>(0,s.Lk)("option",{value:"Ankara"},"Ankara",-1))),Ot=[Kt,zt,Nt],Rt=gt((()=>(0,s.Lk)("div",{class:"text-center mt-1"},[(0,s.Lk)("button",{class:"btn btn-success",type:"submit"},"Kaydet")],-1))),qt={key:0,class:"text-center"},Ft={class:"container"},Gt={key:0,class:"row",style:{top:"0"}},Qt={class:"col-12 col-lg-10 m-auto p-0"},Bt={key:0,class:"table-responsive-lg mt-2"},Yt={class:"table table-fixed"},Ht=gt((()=>(0,s.Lk)("tr",null,[(0,s.Lk)("td",{colspan:"4"},[(0,s.Lk)("h6",{class:"p-1 m-0"},"Sabitlenmiş Cari")])],-1))),Mt=gt((()=>(0,s.Lk)("th",{class:"text-center"},"1.",-1))),Wt={class:"table-responsive-lg mt-2"},Dt={class:"table table-fixed overflow-auto"},_t=gt((()=>(0,s.Lk)("tr",null,[(0,s.Lk)("th",{colspan:"7"},[(0,s.Lk)("h4",{class:"ps-3 m-0 text-start"},"Hastaneler")])],-1))),Jt={class:"text-center"},Zt=["onClick"],$t=["onClick"],ea={class:"ps-4",style:{"border-left":"#fff 3px solid"}},ta={class:"float-end"},aa=["onClick"],ra=["onClick"],sa={ref:"reference"},na={key:0,class:"row saveAlert"},ia=gt((()=>(0,s.Lk)("div",{class:"col-12 col-lg-8 m-auto d-flex justify-content-center"},[(0,s.Lk)("div",{class:"alert alert-primary m-0"},"Kayıt edildi")],-1))),la=[ia];function oa(e,t,a,n,l,o){return(0,s.uX)(),(0,s.CE)("div",null,[Lt,(0,s.Lk)("div",Ct,[(0,s.Lk)("div",bt,[(0,s.Lk)("div",yt,[xt,(0,s.bo)((0,s.Lk)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchText=e),type:"search",id:"search",placeholder:"Search","aria-label":"Search",autocomplete:"off"},null,512),[[r.Jo,l.searchText]])]),(0,s.Lk)("div",Pt,[(0,s.Lk)("button",{class:"btn btn-warning mt-2 text-center d-block",onClick:t[1]||(t[1]=(...e)=>o.addButton&&o.addButton(...e))},"Yeni Cari Ekle")])])]),(0,s.Lk)("form",{onSubmit:t[7]||(t[7]=(0,r.D$)((e=>l.isUpdate?o.updateCurrent():o.saveCurrent()),["prevent"])),class:"container"},[l.isNewCurrent?((0,s.uX)(),(0,s.CE)("div",wt,[(0,s.Lk)("div",Ut,[(0,s.Lk)("div",Et,[(0,s.Lk)("button",{type:"button",class:"btn-close position-absolute top-0 end-0 m-2","aria-label":"Close",onClick:t[2]||(t[2]=(...e)=>o.close&&o.close(...e))}),(0,s.Lk)("h3",At,(0,i.v_)(l.isUpdate?"Update":"Yeni Cari"),1),(0,s.Lk)("div",Xt,[It,(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text",id:"code",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=e=>l.current.code=e),required:""},null,512),[[r.Jo,l.current.code,void 0,{trim:!0}]])]),(0,s.Lk)("div",jt,[Tt,(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text",id:"name",autocomplete:"off","onUpdate:modelValue":t[4]||(t[4]=e=>l.current.name=e),required:""},null,512),[[r.Jo,l.current.name,void 0,{trim:!0}]])]),(0,s.Lk)("div",Vt,[St,(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"location","onUpdate:modelValue":t[5]||(t[5]=e=>l.current.location=e),required:""},Ot,512),[[r.u1,l.current.location]])]),Rt,l.isUpdate?((0,s.uX)(),(0,s.CE)("div",qt,[(0,s.Lk)("a",{class:"text-danger",onClick:t[6]||(t[6]=(0,r.D$)(((...e)=>o.deleteCurrent&&o.deleteCurrent(...e)),["prevent"])),style:{cursor:"pointer"}},"Parçayı silmek için tıklayın!")])):(0,s.Q3)("",!0)])])])):(0,s.Q3)("",!0)],32),(0,s.Lk)("div",Ft,[0!=l.currentCodes?((0,s.uX)(),(0,s.CE)("div",Gt,[(0,s.Lk)("div",Qt,[l.fixedCurrentCode?((0,s.uX)(),(0,s.CE)("div",Bt,[(0,s.Lk)("table",Yt,[Ht,(0,s.Lk)("tr",null,[Mt,(0,s.Lk)("td",null,[(0,s.Lk)("button",{type:"button",onClick:t[8]||(t[8]=e=>o.copy(l.fixedCurrentCode.code)),class:"btn btn-outline-primary"},"Copy")]),(0,s.Lk)("td",null,(0,i.v_)(l.fixedCurrentCode.code),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{type:"button",onClick:t[9]||(t[9]=e=>o.copy(l.fixedCurrentCode.name)),class:"btn btn-outline-danger"},"Copy")]),(0,s.Lk)("td",null,(0,i.v_)(l.fixedCurrentCode.name),1)])])])):(0,s.Q3)("",!0),(0,s.Lk)("div",Wt,[(0,s.Lk)("table",Dt,[_t,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.filteredCurrentCodes,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",null,[(0,s.Lk)("th",Jt,(0,i.v_)(t+1)+".",1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{type:"button",onClick:t=>o.copy(e.code),class:"btn btn-outline-primary"},"Copy",8,Zt)]),(0,s.Lk)("td",null,(0,i.v_)(e.code),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{type:"button",onClick:t=>o.copy(e.name),class:"btn btn-outline-danger"},"Copy",8,$t)]),(0,s.Lk)("td",null,(0,i.v_)(e.name),1),(0,s.Lk)("td",ea,(0,i.v_)(e.location),1),(0,s.Lk)("td",ta,[(0,s.Lk)("i",{class:"fa fa-edit",style:{cursor:"pointer"},onClick:t=>o.update(e)},null,8,aa),(0,s.Lk)("button",{type:"button",class:"btn btn-warning",onClick:t=>l.fixedCurrentCode=e},"Sabitle",8,ra)])])))),256))])]),(0,s.Lk)("div",sa,null,512)])])):(0,s.Q3)("",!0)]),l.isAlert?((0,s.uX)(),(0,s.CE)("div",na,la)):(0,s.Q3)("",!0)])}var ca={data(){return{currentCodes:[],searchText:"",fixedCurrentCode:"",docRef:"",current:{name:"",code:"",location:""},isNewCurrent:!1,isUpdate:!1,isAlert:!1}},computed:{filteredCurrentCodes(){const e=this.searchText.toLocaleLowerCase("tr");return this.currentCodes.filter((t=>{if(t.name.toLocaleLowerCase("tr").match(e)||t.code.toLocaleLowerCase("tr").match(e)||t.location.toLocaleLowerCase("tr").match(e))return t}))}},methods:{copy(e){const t=document.createElement("textarea");t.value=e,this.$refs.reference.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),this.$refs.reference.removeChild(t)},capitalized(e){let t=e.split(" "),a=t.map((e=>e.charAt(0).toLocaleUpperCase("tr")+e.slice(1)));return a.join(" ")},addButton(){this.isNewCurrent=!0,this.resetPart(),this.isUpdate=!1},resetPart(){this.current={name:"",code:"",location:""}},alert(){this.isAlert=!0,setTimeout((()=>{this.isAlert=!1,this.resetPart()}),1e3)},saveCurrent(){(0,te.gS)(ce,{...this.current}),this.alert(),this.reload()},update(e){this.isNewCurrent=!0,this.isUpdate=!0,window.scrollTo(0,0),this.docRef=(0,te.H9)(ie,"current-codes",e.id),(0,te.x7)(this.docRef).then((e=>{this.current=e.data()}))},updateCurrent(){(0,te.mZ)(this.docRef,{...this.current}),this.alert(),this.reload()},reload(){setTimeout((()=>{location.reload()}),300)},deleteCurrent(){while(1){let e=prompt("Parolayı girin:");if(null==e)break;if(1234==e){(0,te.kd)(this.docRef),this.reload();break}}},close(){this.isNewCurrent=!1,this.isUpdate=!1,this.resetPart()}},created(){(0,te.GG)(ce).then((e=>{e.docs.forEach((e=>{""!=e.data().name&&this.currentCodes.push({...e.data(),id:e.id})}))}))},watch:{"current.name"(){this.current.name=this.capitalized(this.current.name)},"current.code"(){this.current.code=this.capitalized(this.current.code)}}};const da=(0,p.A)(ca,[["render",oa],["__scopeId","data-v-2451cdba"]]);var ua=da;const pa=[{path:"",component:I},{path:"/sign-up",component:vt},{path:"/current-codes-page",component:ua},{path:"/spare-parts-page",component:I,children:[{path:"",component:pe},{path:"/update/:partId",component:rt},{path:"/new-part",component:rt}]}],ma=(0,g.aE)({history:(0,g.LA)("/mediterapp/"),routes:pa});var fa=ma,ha=a(414),ka=a.n(ha);(0,r.Ef)(v).use(ka()).use(fa).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,n){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,o=0;o<r.length;o++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,i=r[0],l=r[1],o=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(o)var d=o(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self["webpackChunkmeditera_app"]=self["webpackChunkmeditera_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(606)}));r=a.O(r)})();
//# sourceMappingURL=app.1b57dfe0.js.map