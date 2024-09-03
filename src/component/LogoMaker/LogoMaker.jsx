import React from 'react'
import { useTranslation } from 'react-i18next'

const LogoMaker = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className=" text-black p-8 md:p-16 rounded-lg container my-20" style={{background:"#FFF6F2"}}>
    <div className="md:flex items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl font-bold">fiverr <span className="font-normal">logo maker</span></h2>
        <h3 className="text-6xl font-normal my-4">
       {t("Make an incredible logo ")} <span className="font-normal text-orange-500">{t("in seconds")}</span>
        </h3>
        <p className="mt-10 mb-6 text-gray-500 text-xl"> {t(" Pre-designed by top talent. Just add your touch")}
        </p>
        <button className="bg-gray-900  text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700">
        {t("Try Fiverr Logo Maker")}
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./src/assets/Png/logo-maker-lohp.png"
          alt="logo-maker-lohp"
          className="rounded-lg "
        />
      </div>
    </div>
  </section>
  )
}

export default LogoMaker