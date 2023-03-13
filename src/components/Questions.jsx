import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [ans, setAns] = useState(null);
  const [ans2, setAns2] = useState(null);
  const [ans3, setAns3] = useState(null);
  const [ans4, setAns4] = useState(null);
  const [ans5, setAns5] = useState(null);
  const [ans6, setAns6] = useState(null);
  const [ans7, setAns7] = useState(null);
  const [ans8, setAns8] = useState(null);
  const [ans9, setAns9] = useState(null);
  const [finalAns, setFinalAns] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    let text;
    let error;
    let color;
    let textColor;
    let titleColor;
    let lastAns = ans + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9;
    if (
      ans == null ||
      ans2 == null ||
      ans3 == null ||
      ans4 == null ||
      ans5 == null ||
      ans6 == null ||
      ans7 == null ||
      ans8 == null ||
      ans9 == null
    ) {
      setFormError("Please fill in the fields correctly");
      error = "Please fill in the fields correctly";
    } else if (lastAns <= 4) {
      setFinalAns("သင့်မှာ Depression problem မရှိပါဘူး");
      text = "သင့်မှာ Depression problem မရှိပါဘူး";
      color = "#DDF7E3";
      error = null;
      titleColor = "#444444";
      textColor = "#444444";
    } else if ((lastAns >= 5) & (lastAns <= 9)) {
      text =
        "သတိထားပြီးစောင့်ကြည့်ရမယ့်အခြေ‌နေဖြစ်ပါတယ်၊ စောင့်ကြည့်နေတဲ့ကာလအတွင်းမှာ မေးခွန်းပါအချက်အလက်များမပြုလုပ်မိအောင်သတိပြုပါ";
      color = "#2B3467";
      textColor = "#FFFFFF";
      titleColor = "#FFFFFF";
      error = null;
    } else if ((lastAns >= 10) & (lastAns <= 14)) {
      text =
        "သင်ဟာ family members ၊counselor ၊  friends တွေနဲ့သင်ခံစားနေရတယ့် ပြဿနာတွေကိုရင်ဖွင့် ဆွေးနွေးရမယ့် အခြေနေဖြစ်ပါတယ်";
      color = "#5463FF";
      textColor = "#FFFFFF";
      titleColor = "#FFFFFF";
      error = null;
    } else if ((lastAns >= 15) & (lastAns <= 19)) {
      text =
        "သင်ဟာ သက်ဆိုင်ရာ Professionals, Therapists တွေဆီမှာ စိတ်ပိုင်းဆိုင်ရာကုထုံးတွေနဲ့ မိမိရဲ့ Depression ကို လျှော့ချရမှာပဲဖြစ်ပါတယ်";
      color = "#FFD93D";
      textColor = "#FFFFFF";
      titleColor = "#FFFFFF";
      error = null;
    } else if ((lastAns >= 20) & (lastAns <= 28)) {
      text =
        "သင်ဟာ အချိန်ဆွဲတာမျိုးမလုပ်တော့ဘဲ ချက်ချင်း စိတ်ပိုင်းဆိုင်ရာကုထုံးတွေရဲ့ အကူအညီကိုယူရမှာဖြစ်ပါတယ်၊ အကယ်၍သာ ကိုယ့်ရဲ့ Depression က ကျမလာဘူးဆိုရင်တော့ Mental health specialist တွေနဲ့ တိုင်ပင်ပြီးတော့ ဆေးဝါးအကူအညီနဲ့ အကောင်းဆုံးလုပ်ဆောင်ရမှာပဲဖြစ်ပါတယ်";
      color = "#EB5353";
      textColor = "#FFFFFF";
      titleColor = "FFFFFF";
      error = null;
    }

    console.log(color);
    if (error !== "Please fill in the fields correctly") {
      navigate("/getsupport", {
        state: {
          result: text,
          color: color,
          textColor: textColor,
          titleColor: titleColor,
        },
      });
    }
  };
  return (
    <>
      <div className="px-6 mt-5 lg:px-40 mb-10">
        <p className="mt-2 text font-normal mb-2">
          Original Check Post:{" "}
          <a className="underline text-green" href="https://m.facebook.com/story.php?story_fbid=pfbid02wZ3NEWkM6U5Acsy9vsEFPM481zsgDAmYw3sAiawXA1GKPMGGNQ9XGquw7M1zBaBNl&id=105381104674944&mibextid=Nif5oz">
            Click here
          </a>
        </p>
        <h2 className="text-xl mb-6">
          ပြီးခဲ့တဲ့၂ပတ်အတွင်း ဖော်ပြပါအချက်တွေကို မည်ကဲ့သို့ကြုံတွေ့ရပါသလဲ
        </h2>
        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow">
          <h3 className="text-lg text-bold mb-2">
            ဘာပဲလုပ်လုပ် အရင်ကလို မပျော်ဘူး
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans === 0}
              onChange={() => {
                setAns(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans === 1}
              onChange={() => {
                setAns(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans === 2}
              onChange={() => {
                setAns(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans === 3}
              onChange={() => {
                setAns(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            ဝမ်းနည်းနေတယ်၊ မျှော်လင့်ချက်မဲ့သလို ဖြစ်နေတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans2 === 0}
              onChange={() => {
                setAns2(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans2 === 1}
              onChange={() => {
                setAns2(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans2 === 2}
              onChange={() => {
                setAns2(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans2 === 3}
              onChange={() => {
                setAns2(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            ကောင်းကောင်းအိပ်လို့မပျော်ဘူး (သို့) အမြဲလိုလိုအိပ်နေတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans3 === 0}
              onChange={() => {
                setAns3(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans3 === 1}
              onChange={() => {
                setAns3(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans3 === 2}
              onChange={() => {
                setAns3(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans3 === 3}
              onChange={() => {
                setAns3(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            အားအင်တွေကုန်ခမ်းနေတယ်၊ မလန်းဆန်းဘူးလို့ခံစားရတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans4 === 0}
              onChange={() => {
                setAns4(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans4 === 1}
              onChange={() => {
                setAns4(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans4 === 2}
              onChange={() => {
                setAns4(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans4 === 3}
              onChange={() => {
                setAns4(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            အစာ စားချင်စိတ်မရှိဘူး (သို့) အလွန်အကျွံစားဖြစ်တယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans5 === 0}
              onChange={() => {
                setAns5(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans5 === 1}
              onChange={() => {
                setAns5(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans5 === 2}
              onChange={() => {
                setAns5(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans5 === 3}
              onChange={() => {
                setAns5(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            ကိုယ့်ကိုကိုယ် အရှုံးသမားတစ်ယောက်လို ခံစားရတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans6 === 0}
              onChange={() => {
                setAns6(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans6 === 1}
              onChange={() => {
                setAns6(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans6 === 2}
              onChange={() => {
                setAns6(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans6 === 3}
              onChange={() => {
                setAns6(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            ဘာပဲလုပ်လုပ် အာရုံစူးစိုက်မှု့ မလုပ်နိုင်ဘူး
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans7 === 0}
              onChange={() => {
                setAns7(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans7 === 1}
              onChange={() => {
                setAns7(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans7 === 2}
              onChange={() => {
                setAns7(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans7 === 3}
              onChange={() => {
                setAns7(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            သူများတွေသတိထားမိလောက်အောင် စကားပြောတာတွေ၊ အလုပ်လုပ်တာတွေက
            ပျင်းတွဲတွဲဖြစ်လာတယ် (သို့) နားချိန်မရှိအောင်ကို အလုပ်တွေလုပ်နေတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans8 === 0}
              onChange={() => {
                setAns8(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans8 === 1}
              onChange={() => {
                setAns8(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans8 === 2}
              onChange={() => {
                setAns8(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans8 === 3}
              onChange={() => {
                setAns8(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>

        <div className="w-full bg-gray-100 text-lg px-4 py-2 rounded-xl shadow mt-3">
          <h3 className="text-lg text-bold mb-2">
            သေလိုက်တာမှ ကောင်းဦးမယ်ဆိုတဲ့အတွေးမျိုး၊ ကိုယ့်ကိုကိုယ် နာကျင်စေမယ့်
            အတွေးမျိုးတွေ တွေးမိနေတယ်
          </h3>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans9 === 0}
              onChange={() => {
                setAns9(0);
              }}
            />
            <label className="text-lg">မဖြစ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans9 === 1}
              onChange={() => {
                setAns9(1);
              }}
            />
            <label className="text-lg">တစ်ပတ်၂_၃ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans9 === 2}
              onChange={() => {
                setAns9(2);
              }}
            />
            <label className="text-lg">တစ်ပတ်၄ ကြိမ်</label>
          </div>
          <div>
            <input
              className="input mr-2"
              type="checkbox"
              checked={ans9 === 3}
              onChange={() => {
                setAns9(3);
              }}
            />
            <label className="text-lg">နေ့တိုင်းနီးပါး</label>
          </div>
        </div>
        <button
          className="bg-[#007E46] text-white hover:bg-green-900 mt-4 rounded-lg py-2 px-6 text-md"
          onClick={() => {
            submitHandler();
          }}
        >
          Check
        </button>

        {formError ? (
          <h3 className="text-gray-900 mb-10 text-center text-xl md:3xl">
            {formError}
          </h3>
        ) : null}
      </div>
    </>
  );
};

export default Questions;
