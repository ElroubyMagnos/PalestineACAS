import{a as oe}from"./chunk-IVF7VZXB.js";import{a as te,b as ne,c as ie,d as ue,e as re,i as le,j as ae,m as de}from"./chunk-62ZDVLRL.js";import{$ as N,D as E,E as l,F as V,Ha as ee,K as C,M as a,O as z,P as W,Q as t,R as e,S as u,T as h,U as f,V as g,W as S,X as i,Y as _,_ as k,aa as A,ca as T,d as w,da as H,ea as U,g as M,m as j,ma as G,na as J,oa as Y,p as b,pa as K,q,s as B,u as c,v as p,va as Q,w as v,x as y,xa as X,ya as Z,za as $}from"./chunk-A55Y5X4C.js";var se=()=>["/db/Dads"],ce=()=>["/db/Now"],pe=()=>["/db/New"],F=class m{static \u0275fac=function(n){return new(n||m)};static \u0275cmp=b({type:m,selectors:[["app-editstudents"]],decls:13,vars:6,consts:[[1,"m-5"],[1,"bg-blue-600","text-white","px-4","py-2","flex","items-center","justify-between"],[1,"text-lg","font-bold"],["href","/",1,"hover:text-red-500","fw-bolder"],["width","50","height","50","src","id.png","alt",""],[1,"space-x-3","d-flex"],["routerLinkActive","bg-red-500",1,"p-2","rounded-lg","hover:bg-red-500","fw-bolder","text-light","no-underline",3,"routerLink"]],template:function(n,o){n&1&&(t(0,"article",0)(1,"nav",1)(2,"div",2)(3,"a",3),u(4,"img",4),e()(),t(5,"div",5)(6,"a",6),i(7,"\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0648\u0644\u064A\u0627\u0621 \u0627\u0644\u0627\u0645\u0648\u0631"),e(),t(8,"a",6),i(9,"\u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646"),e(),t(10,"a",6),i(11,"\u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062C\u062F\u062F"),e()()(),u(12,"router-outlet"),e()),n&2&&(l(6),a("routerLink",T(3,se)),l(2),a("routerLink",T(4,ce)),l(2),a("routerLink",T(5,pe)))},dependencies:[Q,X,Z]})};var P=class m{transform(d){if(!d)return"";let n=new Date(d),o=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0");return`${o}-${r}-${s}`}static \u0275fac=function(n){return new(n||m)};static \u0275pipe=B({name:"dateFormat",type:m,pure:!0})};function fe(m,d){if(m&1){let n=h();t(0,"tr",18),f("click",function(){let r=c(n).$implicit,s=g();return p(s.SelectedStudent=r)}),t(1,"td",19)(2,"button",20),f("click",function(){let r=c(n).$implicit,s=g();return p(s.Delete(r))}),i(3," \u062D\u0630\u0641 "),e(),t(4,"button",21),f("click",function(){let r=c(n).$implicit,s=g();return p(s.ShowDad(r))}),i(5," \u0648\u0644\u064A \u0627\u0644\u0627\u0645\u0631 "),e(),t(6,"button",22),i(7," \u0646\u0642\u0644 "),e()(),t(8,"td",23),i(9),e(),t(10,"td",23),i(11),e(),t(12,"td",23),i(13),e(),t(14,"td",23),i(15),e(),t(16,"td",23),i(17),e()()}if(m&2){let n=d.$implicit,o=d.index,r=g();z("hoverbg-gray-200 cursor-pointer hover:bg-gray-300 "+(n==r.SelectedStudent?"bg-gray-300":"")),l(9),_(n.phoneNumber),l(2),_(n.grandName),l(2),_(n.dadName),l(2),_(n.firstName),l(2),_(o+1)}}function Se(m,d){if(m&1){let n=h();t(0,"button",24),f("click",function(){c(n);let r=g();return p(r.SelectedStudent=null)}),i(1,"\u062A\u062C\u0627\u0647\u0644"),e()}}function xe(m,d){if(m&1){let n=h();t(0,"div",25)(1,"label",26),i(2,"\u0627\u0644\u062A\u062E\u0635\u0635"),e(),u(3,"input",27),e(),t(4,"div",25)(5,"label",28),i(6,"\u0627\u0644\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0631\u064A"),e(),u(7,"input",29),e(),t(8,"div",25)(9,"label",30),i(10,"\u0627\u0644\u0625\u0639\u0627\u0642\u0629"),e(),u(11,"input",31),e(),t(12,"div",25)(13,"label",32),i(14,"\u0648\u0641\u0627\u0629 \u0627\u0644\u0623\u0628"),e(),u(15,"input",33),e(),t(16,"div",25)(17,"label",34),i(18,"\u0631\u0642\u0645 \u0627\u0644\u0648\u0644\u0627\u064A\u0629"),e(),u(19,"input",35),e(),t(20,"div",25)(21,"label",36),i(22,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629"),e(),u(23,"input",37),e(),t(24,"div",25)(25,"label",38),i(26,"\u0627\u0633\u0645 \u0627\u0644\u062C\u062F"),e(),u(27,"input",39),e(),t(28,"div",25)(29,"label",40),i(30,"\u0627\u0633\u0645 \u0627\u0644\u0623\u0628"),e(),u(31,"input",41),e(),t(32,"div",25)(33,"label",42),i(34,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644"),e(),u(35,"input",43),e(),t(36,"div",25)(37,"label",44),i(38,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629)"),e(),u(39,"input",45),e(),t(40,"div",25)(41,"label",46),i(42,"\u0627\u0633\u0645 \u0627\u0644\u062C\u062F (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629)"),e(),u(43,"input",47),e(),t(44,"div",25)(45,"label",48),i(46,"\u0627\u0633\u0645 \u0627\u0644\u0623\u0628 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629)"),e(),u(47,"input",49),e(),t(48,"div",25)(49,"label",50),i(50,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629)"),e(),u(51,"input",51),e(),t(52,"div",25)(53,"label",52),i(54,"\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629"),e(),u(55,"input",53),e(),t(56,"div",25)(57,"label",54),i(58,"\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e(),u(59,"input",55),e(),t(60,"div",25)(61,"label",56),i(62,"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e(),u(63,"input",57),H(64,"dateFormat"),e(),t(65,"div",25)(66,"label",58),i(67,"\u0627\u0644\u062C\u0646\u0633"),e(),t(68,"select",59)(69,"option",60),i(70,"\u0630\u0643\u0631"),e(),t(71,"option",60),i(72,"\u0627\u0646\u062B\u064A"),e()()(),t(73,"div",25)(74,"label",61),i(75,"\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0627\u0642\u0629"),e(),u(76,"input",62),e(),t(77,"div",25)(78,"label",63),i(79,"\u0627\u0644\u062F\u064A\u0627\u0646\u0629"),e(),u(80,"input",64),e(),t(81,"div",25)(82,"label",65),i(83,"\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628"),e(),u(84,"input",66),e(),t(85,"div",25)(86,"label",67),i(87,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"),e(),u(88,"input",68),e(),t(89,"div",25)(90,"label",69),i(91,"\u0645\u0643\u0627\u0646 \u0627\u0644\u0646\u0632\u0647\u0629"),e(),u(92,"input",70),e(),t(93,"div",25)(94,"label",71),i(95,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),e(),u(96,"input",72),e(),t(97,"div",25)(98,"label",73),i(99,"\u0627\u0644\u0648\u0644\u0627\u064A\u0629"),e(),u(100,"input",74),e(),t(101,"div",25)(102,"label",75),i(103,"\u0633\u0646\u0629 \u0627\u0644\u062D\u0635\u0648\u0644"),e(),u(104,"input",76),e(),t(105,"div",25)(106,"label",77),i(107,"\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629"),e(),u(108,"input",78),e(),t(109,"div",25)(110,"label",79),i(111,"\u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629"),e(),u(112,"input",80),e(),t(113,"div",81)(114,"label",82),i(115,"\u0627\u0644\u0634\u0647\u0627\u062F\u0629"),e(),t(116,"img",83,1),f("click",function(){c(n);let r=S(119);return p(r.click())}),e(),t(118,"input",84,2),f("change",function(){c(n);let r=S(117),s=S(119),x=g();return p(x.PictureChanged(s,r))}),e()(),t(120,"div",81)(121,"label",85),i(122,"\u0635\u0648\u0631\u0629 \u0627\u0644\u0647\u0648\u064A\u0629"),e(),t(123,"img",83,3),f("click",function(){c(n);let r=S(126);return p(r.click())}),e(),t(125,"input",84,4),f("change",function(){c(n);let r=S(124),s=S(126),x=g();return p(x.PictureChanged(s,r))}),e()(),t(127,"div",81)(128,"label",86),i(129,"\u0635\u0648\u0631\u0629 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e(),t(130,"img",83,5),f("click",function(){c(n);let r=S(133);return p(r.click())}),e(),t(132,"input",84,6),f("change",function(){c(n);let r=S(131),s=S(133),x=g();return p(x.PictureChanged(s,r))}),e()(),t(134,"div",81)(135,"label",87),i(136,"\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629"),e(),t(137,"img",83,7),f("click",function(){c(n);let r=S(140);return p(r.click())}),e(),t(139,"input",84,8),f("change",function(){c(n);let r=S(138),s=S(140),x=g();return p(x.PictureChanged(s,r))}),e()(),t(141,"div")(142,"button",88),i(143,"\u062D\u0641\u0638"),e()()}if(m&2){let n=g();l(3),a("value",n.SelectedStudent.takhsos),l(4),a("value",n.SelectedStudent.earned),l(4),a("value",n.SelectedStudent.disability),l(4),a("value",n.SelectedStudent.dadDeath),l(4),a("value",n.SelectedStudent.stateNumber),l(4),a("value",n.SelectedStudent.familyName),l(4),a("value",n.SelectedStudent.grandName),l(4),a("value",n.SelectedStudent.dadName),l(4),a("value",n.SelectedStudent.firstName),l(4),a("value",n.SelectedStudent.familyNameEnglish),l(4),a("value",n.SelectedStudent.grandNameEnglish),l(4),a("value",n.SelectedStudent.dadNameEnglish),l(4),a("value",n.SelectedStudent.firstNameEnglish),l(4),a("value",n.SelectedStudent.merry),l(4),a("value",n.SelectedStudent.birthPlace),l(4),a("value",U(64,32,n.SelectedStudent.birthDate)),l(6),a("selected",n.SelectedStudent.boy),l(2),a("selected",!n.SelectedStudent.boy),l(5),a("value",n.SelectedStudent.disabilityType),l(4),a("value",n.SelectedStudent.religion),l(4),a("value",n.SelectedStudent.whatsNumber),l(4),a("value",n.SelectedStudent.phoneNumber),l(4),a("value",n.SelectedStudent.nzohPlace),l(4),a("value",n.SelectedStudent.address),l(4),a("value",n.SelectedStudent.state),l(4),a("value",n.SelectedStudent.yearTaken),l(4),a("value",n.SelectedStudent.secondaryMark),l(4),a("value",n.SelectedStudent.typeOfSecondary),l(4),a("src","data:image/png;base64,"+n.SelectedStudent.certificate,E),l(7),a("src","data:image/png;base64,"+n.SelectedStudent.identityPicture,E),l(7),a("src","data:image/png;base64,"+n.SelectedStudent.bornPicture,E),l(7),a("src","data:image/png;base64,"+n.SelectedStudent.selfPicture,E)}}function be(m,d){if(m&1){let n=h();t(0,"div",89)(1,"div",90)(2,"div",91)(3,"h2",92),i(4,"\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0644\u064A \u0627\u0644\u0623\u0645\u0631"),e(),t(5,"button",93),f("click",function(){c(n);let r=g();return p(r.closeModal())}),v(),t(6,"svg",94),u(7,"path",95),e()()(),y(),t(8,"div",96)(9,"div",97)(10,"div",98),v(),t(11,"svg",99),u(12,"path",100),e()(),y(),t(13,"input",101),A("ngModelChange",function(r){c(n);let s=g();return N(s.CurrentDad.dadName,r)||(s.CurrentDad.dadName=r),p(r)}),e(),t(14,"p"),i(15,"\u0627\u0633\u0645 \u0627\u0644\u0627\u0628"),e()(),t(16,"div",97)(17,"div",102),v(),t(18,"svg",103),u(19,"path",104),e()(),y(),t(20,"input",105),A("ngModelChange",function(r){c(n);let s=g();return N(s.CurrentDad.dadPhone,r)||(s.CurrentDad.dadPhone=r),p(r)}),e(),t(21,"p"),i(22,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"),e()(),t(23,"div",97)(24,"div",106),v(),t(25,"svg",107),u(26,"path",108),e()(),y(),t(27,"input",105),A("ngModelChange",function(r){c(n);let s=g();return N(s.CurrentDad.dadSocialState,r)||(s.CurrentDad.dadSocialState=r),p(r)}),e(),t(28,"p"),i(29,"\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629"),e()(),t(30,"div",97)(31,"div",109),v(),t(32,"svg",110),u(33,"path",111),e()(),y(),t(34,"input",105),A("ngModelChange",function(r){c(n);let s=g();return N(s.CurrentDad.dadJob,r)||(s.CurrentDad.dadJob=r),p(r)}),e(),t(35,"p"),i(36,"\u0639\u0645\u0644 \u0627\u0644\u0648\u0627\u0644\u062F"),e()()(),t(37,"div",112)(38,"button",113),f("click",function(){c(n);let r=g();return p(r.closeModal())}),i(39," \u0625\u063A\u0644\u0627\u0642 "),e(),t(40,"button",114),f("click",function(){c(n);let r=g();return p(r.SaveDad())}),i(41," \u062D\u0641\u0638 "),e()()()()}if(m&2){let n=g();l(13),k("ngModel",n.CurrentDad.dadName),l(7),k("ngModel",n.CurrentDad.dadPhone),l(7),k("ngModel",n.CurrentDad.dadSocialState),l(7),k("ngModel",n.CurrentDad.dadJob)}}var L=class m{constructor(d,n,o){this.http=d;this.linker=n;this.toast=o;this.http.get("/Students/GetNewStudents/").subscribe(r=>this.AllStudentsRequests=r),this.Loading()}TakhsosListOf=[];AllStudentsRequests=[];CurrentDad;ShowDad(d){this.CurrentDad=d.studentDadClass,this.CurrentDad?this.openModal():this.toast.error("\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0639\u0631\u0641 \u0639\u0644\u064A \u0648\u0644\u064A \u0627\u0644\u0627\u0645\u0631 \u0647\u0630\u0627")}SaveDad(){return w(this,null,function*(){var d=yield M(this.http.post("/Students/UpdateStudentDadInfo/",this.CurrentDad));d?this.toast.success("\u062A\u0645 \u062A\u063A\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D"):this.toast.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u063A\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A")})}Delete(d){return w(this,null,function*(){var n=yield M(this.http.delete(`/Students/DeleteRequestedStudent/${d.id}/`));n?(this.AllStudentsRequests.splice(this.AllStudentsRequests.indexOf(d),1),this.toast.success("\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0628\u0646\u062C\u0627\u062D")):this.toast.error("\u0644\u0627 \u0627\u0633\u062A\u0637\u064A\u0639 \u062D\u0630\u0641 \u0647\u0630\u0627")})}PictureChanged(d,n){d.files&&d.files.length>0&&(n.src=URL.createObjectURL(d.files[0]))}UpdateSelected(d){return w(this,null,function*(){if(d.valid&&this.SelectedStudent){var n=yield M(this.http.put("/Students/EditStudentRequest/",this.SelectedStudent));alert(n)}else this.toast.error("\u0644\u0627 \u064A\u0645\u0643\u0646 \u062D\u0641\u0638 \u0634\u0626")})}SelectedStudent;Loading(){return w(this,null,function*(){this.TakhsosListOf=yield this.linker.GetListOf("Takhsos")})}isModalOpen=!1;openModal(){this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}static \u0275fac=function(n){return new(n||m)(V(K),V(oe),V(ee))};static \u0275cmp=b({type:m,selectors:[["app-new-students"]],decls:24,vars:4,consts:[["f","ngForm"],["imgofcertificate",""],["certificatepic",""],["imgofidentity",""],["identitypic",""],["imgofborn",""],["bornpic",""],["imgofself",""],["selfpic",""],[1,"bg-white","rounded-lg","shadow-md","p-4"],[1,"overflow-x-auto"],[1,"table-auto","w-full","border-collapse","border","border-gray-200"],[1,"bg-gray-100"],[1,"border","border-gray-200","px-4","py-2","text-left","font-medium","text-gray-600"],[3,"class","click",4,"ngFor","ngForOf"],["class","btn btn-danger form-control mt-1",3,"click",4,"ngIf"],["ngNativeValidate","",1,"py-4","text-end","d-flex","flex-col","gap-2",3,"ngSubmit"],["class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",4,"ngIf"],[3,"click"],[1,"border","border-gray-200","px-4","py-2","d-flex","gap-1"],[1,"bg-red-500","text-white","px-3","py-1","rounded-md","hoverbg-red-600",3,"click"],[1,"bg-blue-500","text-white","px-3","py-1","rounded-md","hoverbg-blue-600",3,"click"],[1,"bg-blue-500","text-white","px-3","py-1","rounded-md","hoverbg-blue-600"],[1,"border","border-gray-200","px-4","py-2"],[1,"btn","btn-danger","form-control","mt-1",3,"click"],[1,"d-flex","flex-col"],["for","takhsos"],["type","text","id","takhsos","name","takhsos",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","earned"],["type","text","id","earned","name","earned",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","disability"],["type","text","id","disability","name","disability",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","dadDeath"],["type","text","id","dadDeath","name","dadDeath",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","stateNumber"],["type","number","id","stateNumber","name","stateNumber",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","familyName"],["type","text","id","familyName","name","familyName",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","grandName"],["type","text","id","grandName","name","grandName",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","dadName"],["type","text","id","dadName","name","dadName",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","firstName"],["type","text","id","firstName","name","firstName",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","familyNameEnglish"],["type","text","id","familyNameEnglish","name","familyNameEnglish",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","grandNameEnglish"],["type","text","id","grandNameEnglish","name","grandNameEnglish",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","dadNameEnglish"],["type","text","id","dadNameEnglish","name","dadNameEnglish",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","firstNameEnglish"],["type","text","id","firstNameEnglish","name","firstNameEnglish",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","merry"],["type","text","id","merry","name","merry",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","birthPlace"],["type","text","id","birthPlace","name","birthPlace",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","birthDate"],["type","date","id","birthDate","name","birthDate",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","boy"],["name","boy","id","boy",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","m-1","text-end"],["value","boy",3,"selected"],["for","disabilityType"],["type","text","id","disabilityType","name","disabilityType",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","religion"],["type","text","id","religion","name","religion",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","whatsNumber"],["type","text","id","whatsNumber","name","whatsNumber",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","phoneNumber"],["type","text","id","phoneNumber","name","phoneNumber",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","nzohPlace"],["type","text","id","nzohPlace","name","nzohPlace",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","address"],["type","text","id","address","name","address",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","state"],["type","text","id","state","name","state",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","yearTaken"],["type","number","id","yearTaken","name","yearTaken",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","secondaryMark"],["type","text","id","secondaryMark","name","secondaryMark",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],["for","typeOfSecondary"],["type","text","id","typeOfSecondary","name","typeOfSecondary",1,"p-2","rounded-lg","bg-gray-300","outline-none","border-black","text-end","m-1",3,"value"],[1,"d-flex","flex-col","align-items-end"],["for","certificate"],["width","200","height","200","alt","",3,"click","src"],["type","file","hidden","","name","","id","",3,"change"],["for","identityPicture"],["for","bornPicture"],["for","selfPicture"],["type","submit",1,"btn","btn-primary","m-1"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-black","bg-opacity-50","z-50"],[1,"relative","bg-white","rounded-lg","shadow-lg","w-full","max-w-md","p-6","sm:p-8"],[1,"flex","items-center","justify-between","border-b","pb-4"],[1,"text-xl","font-semibold","text-gray-800"],[1,"text-gray-400","hover:text-red-500","transition",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"mt-4","space-y-4"],[1,"flex","items-center","space-x-3","justify-between"],[1,"p-2","bg-blue-100","rounded-full"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-blue-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 11c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm-5 8c0 1.105 3-3.5 5-3.5s5 4.605 5 3.5-2.105 3.5-5 3.5-5-.395-5-3.5z"],["type","text",1,"text-gray-600","text-sm","text-center",3,"ngModelChange","ngModel"],[1,"p-2","bg-green-100","rounded-full"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-green-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 10h11M9 21V3M4 17h16"],[1,"text-gray-600","text-sm","text-center",3,"ngModelChange","ngModel"],[1,"p-2","bg-yellow-100","rounded-full"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-yellow-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 7l6 6-6 6M9 3l6 6-6 6m6-6h6"],[1,"p-2","bg-purple-100","rounded-full"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-purple-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 13l4 4L19 7"],[1,"mt-6","flex","justify-end","space-x-4"],[1,"px-4","py-2","text-sm","font-medium","text-gray-700","bg-gray-100","rounded-lg","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-300",3,"click"],[1,"px-4","py-2","text-sm","font-medium","text-white","bg-blue-600","rounded-lg","hover:bg-blue-700","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"click"]],template:function(n,o){if(n&1){let r=h();t(0,"div",9),u(1,"div",10),t(2,"table",11)(3,"thead",12)(4,"tr")(5,"th",13),i(6,"\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"),e(),t(7,"th",13),i(8,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"),e(),t(9,"th",13),i(10,"\u0627\u0633\u0645 \u0627\u0644\u062C\u062F"),e(),t(11,"th",13),i(12,"\u0627\u0633\u0645 \u0627\u0644\u0627\u0628"),e(),t(13,"th",13),i(14,"\u0627\u0644\u0627\u0633\u0645"),e(),t(15,"th",13),i(16,"#"),e()()(),t(17,"tbody"),C(18,fe,18,7,"tr",14),e()(),C(19,Se,2,0,"button",15),t(20,"form",16,0),f("ngSubmit",function(){c(r);let x=S(21);return p(o.UpdateSelected(x))}),C(22,xe,144,34),e()(),C(23,be,42,4,"div",17)}n&2&&(l(18),a("ngForOf",o.AllStudentsRequests),l(),a("ngIf",o.SelectedStudent!=null),l(3),W(o.SelectedStudent?22:-1),l(),a("ngIf",o.isModalOpen))},dependencies:[G,J,le,ae,te,ne,ie,re,ue,P]})};var O=class m{static \u0275fac=function(n){return new(n||m)};static \u0275cmp=b({type:m,selectors:[["app-now-students"]],decls:115,vars:0,consts:[[1,"m-2","d-flex","flex-col","gap-5"],[1,"d-flex","justify-between"],[1,"d-flex","gap-1"],[1,"d-flex","flex-col","text-end"],["for",""],["type","text","name","","id","",1,"form-control"],["minlength","11","maxlength","11","type","number","name","","id","",1,"form-control"],[1,"d-flex","flex-col","gap-1","justify-center"],[1,"text-center"],[1,"d-flex","align-items-center"],["type","text","name","","id","",1,"form-control","flex-grow-1"],["for","",1,"form-label","text-end",2,"width","100px"],["width","300","height","300","src","profile.webp","alt","",1,"bg-gray-100"],[1,"d-flex","flex-column","gap-3"],[1,"d-flex","gap-3","align-items-center"],["for","",1,"form-label","text-end",2,"width","120px"],["type","date","name","","id","",1,"form-control","flex-grow-1"],[1,"d-flex","flex-col","gap-3"],[1,"d-flex","flex-col"],["for","",1,"text-center"],["type","tel","name","","id","",1,"form-control"],["type","email","name","","id","",1,"form-control"],[1,"flex","flex-col"],["width","300","height","300","src","","alt","",1,"bg-gray-200"]],template:function(n,o){n&1&&(t(0,"article",0)(1,"section",1)(2,"section",2)(3,"div",3)(4,"label",4),i(5,"\u0627\u0644\u0641\u0631\u0639"),e(),u(6,"input",5),e(),t(7,"div",3)(8,"label",4),i(9,"\u0641\u0635\u0644 \u0627\u0644\u0627\u0644\u062A\u062D\u0627\u0642"),e(),u(10,"input",5),e(),t(11,"div",3)(12,"label",4),i(13,"\u0627\u0644\u062A\u062E\u0635\u0635"),e(),u(14,"input",5),e()(),t(15,"div",3)(16,"label",4),i(17,"\u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0644\u0628"),e(),u(18,"input",6),e()(),t(19,"section",1)(20,"div",7)(21,"p",8),i(22,"\u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629"),e(),t(23,"div",9),u(24,"input",10),t(25,"label",11),i(26,"\u0627\u0644\u0627\u0648\u0644"),e()(),t(27,"div",9),u(28,"input",10),t(29,"label",11),i(30,"\u0627\u0644\u0627\u0628"),e()(),t(31,"div",9),u(32,"input",10),t(33,"label",11),i(34,"\u0627\u0644\u062C\u062F"),e()(),t(35,"div",9),u(36,"input",10),t(37,"label",11),i(38,"\u0627\u0644\u0639\u0627\u0626\u0644\u0629"),e()()(),t(39,"div",7)(40,"p",8),i(41,"\u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628"),e(),t(42,"div",9),u(43,"input",10),t(44,"label",11),i(45,"\u0627\u0644\u0627\u0648\u0644"),e()(),t(46,"div",9),u(47,"input",10),t(48,"label",11),i(49,"\u0627\u0644\u0627\u0628"),e()(),t(50,"div",9),u(51,"input",10),t(52,"label",11),i(53,"\u0627\u0644\u062C\u062F"),e()(),t(54,"div",9),u(55,"input",10),t(56,"label",11),i(57,"\u0627\u0644\u0639\u0627\u0626\u0644\u0629"),e()()(),u(58,"img",12),e(),t(59,"section",1)(60,"section",13)(61,"div",14),u(62,"input",10),t(63,"label",15),i(64,"\u0627\u0644\u062C\u0646\u0633"),e()(),t(65,"div",14),u(66,"input",10),t(67,"label",15),i(68,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629"),e()(),t(69,"div",14),u(70,"input",16),t(71,"label",15),i(72,"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e()(),t(73,"div",14),u(74,"input",10),t(75,"label",15),i(76,"\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e()(),t(77,"div",14),u(78,"input",10),t(79,"label",15),i(80,"\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),e()(),t(81,"div",14),u(82,"input",10),t(83,"label",15),i(84,"\u0627\u0644\u062F\u064A\u0627\u0646\u0629"),e()(),t(85,"div",14),u(86,"input",10),t(87,"label",15),i(88,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),e()()(),t(89,"section",17)(90,"div",18)(91,"label",19),i(92,"\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646"),e(),u(93,"input",20),e(),t(94,"div",18)(95,"label",19),i(96,"\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"),e(),u(97,"input",20),e(),t(98,"div",18)(99,"label",19),i(100,"\u0627\u064A\u0645\u064A\u0644"),e(),u(101,"input",21),e()()(),t(102,"section",1)(103,"div",22)(104,"p",8),i(105,"\u0635\u0648\u0631\u0629 \u0627\u0644\u0647\u0648\u064A\u0629"),e(),u(106,"img",23),e(),t(107,"div",22)(108,"p",8),i(109,"\u0635\u0648\u0631\u0629 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629"),e(),u(110,"img",23),e(),t(111,"div",22)(112,"p",8),i(113,"\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u064A\u0644\u0627\u062F"),e(),u(114,"img",23),e()()())}})};var I=class m{static \u0275fac=function(n){return new(n||m)};static \u0275cmp=b({type:m,selectors:[["app-dads-of-students"]],decls:2,vars:0,template:function(n,o){n&1&&(t(0,"p"),i(1,"dads-of-students works!"),e())}})};var me=class m{static \u0275fac=function(n){return new(n||m)};static \u0275mod=q({type:m});static \u0275inj=j({imports:[Y,de,$.forChild([{path:"",component:F,children:[{path:"New",component:L},{path:"Now",component:O},{path:"Dads",component:I}]}])]})};export{me as DashboardModule};
