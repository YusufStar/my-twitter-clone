import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-black'>
        <h1 className='text-4xl text-white text-bold'>
            Devam Edebilmek İçin Giriş Yapmalısınız
        </h1>
        <button onClick={() => navigate('/')} className="text-lg font-thin text-black mt-10 p-3 hover:scale-95 rounded-xl transition-all duration-150 bg-white">Giriş Sayfasına Git</button>
    </div>
  )
}

export default ErrorPage