//連想配列で処理は可能か
//もっとマップを簡単にできないか
//let ch関数を汎用的にする

'use strict';

sessionStorage.clear();

//トップスセクションイベントハンドラー
let ibent_calc=(section_id)=>{
  section_id.addEventListener('change',()=>{
    let test_t=check_calc(document.getElementById('t_design'));
    let test2_t=check_calk2(document.getElementsByName("t_silhoette"));
    let test3_t=check_calk2(document.getElementsByName("t_color_c"));
    let test4_t=check_calk2(document.getElementsByName("t_color_f"));
    get_value_cals(document.getElementById('t_design'),dcb2.tops.elements.design_element.items,"tDesignKey");
    get_value_cals2(document.getElementsByName('t_silhoette'),dcb2.tops.elements.silhoette_element.size,"tSilhoetteKey");
    get_value_cals2(document.getElementsByName('t_color_c'),dcb2.tops.elements.color_c_element.color,"tColorCKey");
    get_value_cals2(document.getElementsByName('t_color_f'),dcb2.tops.elements.color_f_element.fublic,"tColorFKey");
    let ary_t=[test_t,test2_t,test3_t,test4_t];
    let result_t=ary_t.every(function(value,index,array){
      return value==true;
    });
    if(result_t==true){
      calc_t("tDesignKey","tSilhoetteKey","tColorCKey","tColorFKey","tops_v",document.getElementById("tops_comparison"));
    };
    let t=sessionStorage.getItem("tops_v");
    let b=sessionStorage.getItem("botoms_v");
    let s=sessionStorage.getItem("shoes_v");
    let o=sessionStorage.getItem("outer_v");
    let arry=[t,b,s,o];
    let ans=arry.every(function(value,index,array){
    return value!==null;
})
    if(ans==true){
      calc_toatl(document.getElementById("total_comparison"));
};  
  },false);
};
ibent_calc(document.getElementById("tops"));

//ボトムスセクションイベントハンドラー

let ibent_calc_b=(section_id)=>{
  section_id.addEventListener('change',()=>{
    let test1_b=check_calc(document.getElementById('b_design'));
    let test2_b=check_calk2(document.getElementsByName("b_silhoette"));
    let test3_b=check_calk2(document.getElementsByName("b_color_c"));
    let test4_b=check_calk2(document.getElementsByName("b_color_f"));
    get_value_cals(document.getElementById('b_design'),dcb2.botoms.elements.design_element.items,"bDesignKey");
    get_value_cals2(document.getElementsByName('b_silhoette'),dcb2.botoms.elements.silhoette_element.size,"bSilhoetteKey");
    get_value_cals2(document.getElementsByName('b_color_c'),dcb2.botoms.elements.color_c_element.color,"bColorCKey");
    get_value_cals2(document.getElementsByName('b_color_f'),dcb2.botoms.elements.color_f_element.fublic,"bColorFKey");
    let ary_b=[test1_b,test2_b,test3_b,test4_b];
    let result_b=ary_b.every(function(value,index,array){
      return value==true;
    });
    if(result_b===true){
      calc_t("bDesignKey","bSilhoetteKey","bColorCKey","bColorFKey","botoms_v",document.getElementById("botoms_comparison"));
    };
    let t=sessionStorage.getItem("tops_v");
    let b=sessionStorage.getItem("botoms_v");
    let s=sessionStorage.getItem("shoes_v");
    let o=sessionStorage.getItem("outer_v");
    let arry=[t,b,s,o];
    let ans=arry.every(function(value,index,array){
    return value!==null;
})
    if(ans==true){
      calc_toatl(document.getElementById("total_comparison"));
};  
  
  },false);
};
ibent_calc_b(document.getElementById("botoms"));

//シューズセクションイベントハンドラー
let ibent_calc_s=(section_id)=>{
  section_id.addEventListener('change',()=>{
    let test1_s=check_calc(document.getElementById('s_design'));
    let test2_s=check_calk2(document.getElementsByName("s_color_c"));
    let test3_s=check_calk2(document.getElementsByName("s_color_f"));
    get_value_cals(document.getElementById('s_design'),dcb2.shoes.elements.design_element.items,"sDesignKey");
    get_value_cals2(document.getElementsByName('s_color_c'),dcb2.shoes.elements.color_c_element.color,"sColorCKey");
    get_value_cals2(document.getElementsByName('s_color_f'),dcb2.shoes.elements.color_f_element.fublic,"sColorFKey");
    let ary_s=[test1_s,test2_s,test3_s];
    let result_s=ary_s.every(function(value,index,array){
      return value==true;
    });
    if(result_s===true){
      calc_t("sDesignKey","bSilhoetteKey","sColorCKey","sColorFKey","shoes_v",document.getElementById("shoes_comparison"));
    };
    let t=sessionStorage.getItem("tops_v");
    let b=sessionStorage.getItem("botoms_v");
    let s=sessionStorage.getItem("shoes_v");
    let o=sessionStorage.getItem("outer_v");
    let arry=[t,b,s,o];
    let ans=arry.every(function(value,index,array){
    return value!==null;
})
    if(ans==true){
      calc_toatl(document.getElementById("total_comparison"));
};  
  },false);
};
ibent_calc_s(document.getElementById("shoes"));

//アウターセクションイベントハンドラー

let ibent_calc_o=(section_id)=>{
  section_id.addEventListener('change',()=>{
    let test1_o=check_calc(document.getElementById('o_design'));
    let test2_o=check_calk2(document.getElementsByName("o_silhoette"));
    let test3_o=check_calk2(document.getElementsByName("o_color_c"));
    let test4_o=check_calk2(document.getElementsByName("o_color_f"));
    get_value_cals(document.getElementById('o_design'),dcb2.outer.elements.design_element.items,"oDesignKey");
    get_value_cals2(document.getElementsByName('o_silhoette'),dcb2.outer.elements.silhoette_element.size,"oSilhoetteKey");
    get_value_cals2(document.getElementsByName('o_color_c'),dcb2.outer.elements.color_c_element.color,"oColorCKey");
    get_value_cals2(document.getElementsByName('o_color_f'),dcb2.outer.elements.color_f_element.fublic,"oColorFKey");
    let ary_o=[test1_o,test2_o,test3_o,test4_o];
    let result_o=ary_o.every(function(value,index,array){
      return value==true;
    });
    if(result_o===true){
      calc_t("oDesignKey","oSilhoetteKey","oColorCKey","oColorFKey","outer_v",document.getElementById("outer_comparison"));
    };
    let t=sessionStorage.getItem("tops_v");
    let b=sessionStorage.getItem("botoms_v");
    let s=sessionStorage.getItem("shoes_v");
    let o=sessionStorage.getItem("outer_v");
    let arry=[t,b,s,o];
    let ans=arry.every(function(value,index,array){
    return value!==null;
})
    if(ans==true){
      calc_toatl(document.getElementById("total_comparison"));
};  
  },false);
};
ibent_calc_o(document.getElementById("outer"));

//セレクトボックスのチェック判定
let check_calc=(select_id)=>{
  let DesignVal = select_id.value;
  console.log(DesignVal);
  if (DesignVal!=="選択してください") {
    //いずれかを選択した場合はtrueを返す
    console.log("true");
    return true;
  }else{
    //初期値の場合（何も選択しない）はfalseを返す
    console.log("false");
    return false;
  }
};

//ラジオボタンのチェック判定
let check_calk2=(input_name)=>{
    for(let i = 0; i < input_name.length; i++) {
    const element = input_name[i];
    if(element.checked){
      //いずれかを選択した場合はtrueを返す
      console.log("true");
      return true;
    }else{
      //初期値の場合（何も選択しない）はfalseを返す
      //console.log(element);
      //console.log("false");
      //return false;
    }
  }
};

//セレクトボックスの値をセッションストレージに保管
let get_value_cals=(select_id,elements_pass,sessionStorage_key)=>{
  let DesignVal = select_id.value;
  let elements=elements_pass
    for(let key in elements){
        if(DesignVal==key){
            let element_v=elements[key];
            sessionStorage.setItem(sessionStorage_key,element_v);
        }}
};

//ラジオボタンの値をセッションストレージに保管
let get_value_cals2=(select_id,elements_pass,sessionStorage_key)=>{
  let html_element_lists=select_id;
  for (let i = 0; i < html_element_lists.length; i++) {
    let element = html_element_lists[i];
  let javas_elements=elements_pass;
  for(let val in javas_elements){
    let element_v=javas_elements[val];
    if (element.checked) {
      if(element.value==val){
        sessionStorage.setItem(sessionStorage_key,element_v);
      }
    }
  }
  }
};

//セッションストレージから値を取り出し,セクション内の計算を行う
let calc_t = (s_s_key_d,s_s_key_s,s_s_key_c,s_s_key_f,s_s_key_t,comparison_space_id)=> {
  let d=Number(sessionStorage.getItem(s_s_key_d));
  let s=Number(sessionStorage.getItem(s_s_key_s));
  let c=Number(sessionStorage.getItem(s_s_key_c));
  let f=Number(sessionStorage.getItem(s_s_key_f));
  let arr=[d,s,c,f];
  let ans=(Number(sessionStorage.getItem(s_s_key_d))+
            Number(sessionStorage.getItem(s_s_key_s))+
            Number(sessionStorage.getItem(s_s_key_c))+
            Number(sessionStorage.getItem(s_s_key_f)))/arr.length;
  sessionStorage.setItem(s_s_key_t,ans);
  let ans_fix=Number(ans.toFixed(0));
  let number_u_r=Math.floor((ans_fix/9.18));
  comparison_space_id.innerHTML=(number_u_r+':'+(10-number_u_r));;
};

//各セクションの総合数値がセッションストレージに格納されたかチェック
  let t=sessionStorage.getItem("tops_v");
  let b=sessionStorage.getItem("botoms_v");
  let s=sessionStorage.getItem("shoes_v");
  let o=sessionStorage.getItem("outer_v");
  let arry=[t,b,s,o];
  let ans=arry.every(function(value,index,array){
  return value!==null;
})

//トータルセクションの比率表示の計算
let calc_toatl=(comparison_space_id)=>{
 let ans=Number(sessionStorage.getItem("tops_v"))*0.15+
         Number(sessionStorage.getItem("botoms_v"))*0.4+
         Number(sessionStorage.getItem("shoes_v"))*0.15+
         Number(sessionStorage.getItem("outer_v"))*0.3;
 let ans_fix=Number(ans.toFixed(0));
 let number_u_r=Math.floor((ans_fix/9.18));
  comparison_space_id.innerHTML=(number_u_r+':'+(10-number_u_r));;
};


//htmlのツリー化
let dcb2 ={"tops":
                 {"name":"トップス",
                  "elements":
                             {"design_element":
                                               {"name":"デザイン",
                                                "items":
                                                        {"カットソー":80,"シャツ":100,"ニット":80,"ポロシャツ":70,"パーカー":10
                             }},
                               "silhoette_element":
                                                   {"name":"シルエット",
                                                    "size":
                                                           {"スリムサイズ":80,"ジャストサイズ":70,"オーバーサイズ":50
                             }},
                               "color_c_element":
                                                 {"name":"カラー(色)",
                                                  "color":
                                                         {"黒or白":100,"無彩色":90,"有彩色":50
                             }},
                               "color_f_element":
                                                 {"name":"カラー(素材)",
                                                  "fublic":
                                                           {"滑らか":100,"中間":50,"粗い":0
  }},}},
          "botoms":
                   {"name":"ボトムス",
                    "elements":
                               {"design_element":
                                                 {"name":"デザイン",
                                                  "items":
                                                        {"スラックス":100,"チノパンツ":50,"カーゴパンツ":0,"デニムパンツ":30
                             }},
                               "silhoette_element":
                                                   {"name":"シルエット",
                                                    "size":
                                                           {"スリムサイズ":80,"ジャストサイズ":70,"オーバーサイズ":50
                             }},
                               "color_c_element":
                                                 {"name":"カラー(色)",
                                                  "color":
                                                         {"黒or白":100,"無彩色":90,"有彩色":50
                            }},
                               "color_f_element":
                                                 {"name":"カラー(素材)",
                                                  "fublic":
                                                           {"滑らか":100,"中間":50,"粗い":0
  }},}},
          "shoes":
                  {"name":"シューズ",
                  "elements":
                             {"design_element":
                                               {"name":"デザイン",
                                                "items":
                                                        {"ブーツ":50,"スリッポン":50,"ドレスシューズ":100,"サンダル":0
                             }},
                               "color_c_element":
                                                {"name":"カラー(色)",
                                                 "color":
                                                         {"黒or白":100,"無彩色":90,"有彩色":50
                             }},
                               "color_f_element":
                                                 {"name":"カラー(素材)",
                                                  "fublic":
                                                           {"滑らか":100,"中間":50,"粗い":0
  }},}},
          "outer":
                  {"name":"アウター",
                  "elements":
                             {"design_element":
                                                 {"name":"デザイン",
                                                  "items":
                                                        {"ブルゾン":30,"パーカー":50,"シャツ":70,"コート":90,"カーディガン":70,"ジャケット":90
                             }},
                               "silhoette_element":
                                                   {"name":"シルエット",
                                                    "size":
                                                           {"スリムサイズ":80,"ジャストサイズ":70,"オーバーサイズ":50
                             }},
                               "color_c_element":
                                                 {"name":"カラー(色)",
                                                  "color":
                                                         {"黒or白":100,"無彩色":90,"有彩色":50
                             }},
                               "color_f_element":
                                                 {"name":"カラー(素材)",
                                                  "fublic":
                                                           {"滑らか":100,"中間":50,"粗い":0
  }},}}};