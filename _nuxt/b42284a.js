(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("03174e0c",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";n(232)},235:function(t,e,n){var o=n(129)(!1);o.push([t.i,"\n.phoneix_box[data-v-8ee2be3e] {\n  position: relative;\n}\n.phoneix_input[data-v-8ee2be3e] {\n  position: relative;\n  background: transparent;\n  font-size: 1em;\n  text-align: left;\n  border: none;\n  outline: none;\n  width: 10em;\n  font-weight: inherit;\n}\n.phoneix_input.placeholder[data-v-8ee2be3e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n",""]),t.exports=o},236:function(t,e,n){"use strict";n.r(e);n(31),n(62),n(37),n(48);var o={name:"Phoneix",props:{value:String,color:{type:String,default:"#e7e7e7"},color_ph:{type:String,default:"#595959"},base:{type:String,default:"7"}},data:function(){return{phone:"+".concat(this.base," ("),ideal:"+".concat(this.base," (000) 000-00-00"),phone_history:["+".concat(this.base," (")],history_position:0,old_position:4,selection_start:4}},methods:{onSelect:function(t){this.selection_start=t.target.selectionStart,this.selection_length=t.target.selectionEnd-t.target.selectionStart,this.selection_start<4&&(this.selection_length-=4+this.selection_start,this.selection_start=4,t.target.selectionStart=this.selection_start)},selectionReplace:function(source,t,e,n){return source.substr(0,t)+n+source.substr(t+e)},input:function(t){var e=this,n=this.$refs.phoneix_input.selectionStart,o={data:t.data,input_type:t.inputType};if("insertFromPaste"===o.input_type&&!o.data){var h=this.phone.length-this.old.length;o.data=this.phone.substr(this.old_position,h)}if("insertText"===o.input_type||"insertFromPaste"===o.input_type&&1===o.data.length)isNaN(o.data)||" "===o.data||1!==o.data.length?(isNaN(o.data)&&1===o.data.length||" "===o.data)&&(n-=1,this.phone=this.old):(console.log("->",n),n=this.transform_position(n),console.log(n,"->"));else if("insertFromPaste"===o.input_type){var r=o.data.replace(/\D+/g,"");if(/[78]?9[0-9]{9}/gm.test(r))this.phone=["8"].includes(r.substr(0,1))?this.base+r.substr(1):r;else if(/[0-9()\- ]{1,17}/gm.test(o.data)){this.phone=this.old;var l=o.data.replace(/\D+/g,"");this.phone=this.selectionReplace(this.phone,this.selection_start,this.selection_length,l)}}else"deleteContentBackward"===o.input_type?[7,8].includes(n)&&4===this.raw.length&&") "!==this.old.substr(8,2)?(this.phone=this.formatted_phone({raw:this.raw.substr(1,2)}),n=7):"+7 ("!==this.phone.substr(0,4)?this.phone.length?this.phone=this.old:(this.phone="+7 (",n=4):"-"===this.old.substr(-1)||")"===this.old.substr(-1)?this.phone=this.phone.substr(0,this.phone.length-1):") "===this.old.substr(-2)&&(this.phone=this.phone.substr(0,this.phone.length-2)):o.input_type;this.$nextTick((function(){e.$refs.phoneix_input.setSelectionRange(n,n)})),this.phone=this.formatted_phone(),this.old_position=n,this.phone_history.push(this.phone),this.history_position+=1},transform_position:function(t){return 7===t?9:8===t||9===t?10:12===t?13:13===t&&"-"!==this.phone.substr(-1)?14:15===t?16:16===t&&"-"!==this.phone.substr(-1)?17:t},formatted_phone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.adding,n=void 0===e||e,o=t.raw,h=void 0!==o&&o,r=(h=h||this.raw).substr(1,3),l=h.substr(4,3),c=h.substr(7,2),d=h.substr(9,2),f="+".concat(this.base," (");return r.length&&(f="+".concat(this.base," (").concat(r).concat(n&&3===r.length?") ":"")),l.length&&(f="+".concat(this.base," (").concat(r,") ").concat(l).concat(n&&3===l.length?"-":"")),c.length&&(f="+".concat(this.base," (").concat(r,") ").concat(l,"-").concat(c).concat(n&&2===c.length?"-":"")),d.length&&(f="+".concat(this.base," (").concat(r,") ").concat(l,"-").concat(c,"-").concat(d)),f}},computed:{placeholder:function(){return this.phone+this.ideal.substr(this.phone.length)},raw:function(){return this.phone.replace(/\D+/g,"")},old:function(){return this.phone_history[-1]}}},h=(n(234),n(54)),component=Object(h.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phoneix_box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.placeholder,expression:"placeholder"}],staticClass:"phoneix_input placeholder",style:{color:t.color_ph},attrs:{type:"text"},domProps:{value:t.placeholder},on:{focus:function(e){return t.$refs.phoneix_input.focus()},input:function(e){e.target.composing||(t.placeholder=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],ref:"phoneix_input",staticClass:"phoneix_input",style:{color:t.color},attrs:{type:"tel",value:"+7 (",autofocus:""},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.input],select:t.onSelect}})])}),[],!1,null,"8ee2be3e",null);e.default=component.exports}}]);