import React, { useEffect, useState } from 'react'
import {GrTwitter} from "react-icons/gr"
import { ref, child, get, set } from "firebase/database";
import {database} from "../database"
import Modal from "@material-ui/core/Modal"

function Home({user, data, getData}) {
  const [imageAsFile, setImageAsFile] = useState('')
  const [comment, SetComment] = useState("")
  const [isopenModal, setisopenModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  function Tweet(e) {
    e.preventDefault()
      set(ref(database, 'tweets'),
        [...data, {
          porfileImage: user.picture,
          time: new Date().getHours(),
          comment: comment,
          email: user.email,
          profileName: user.given_name,
        }]
    )
    getData()
    }

  return (
    <div className={`h-screen overflow-y-scroll justify-center bg-black flex flex-row`}>
      {/* Tweet */}
      <Modal
        open={isopenModal}
        onClose={() => setisopenModal(false)}
      >
        <form onSubmit={(e) => Tweet(e)} className='w-[50%] h-[50%] absolute flex flex-col gap-3 items-center justify-center top-[25%] left-[25%] bg-gray-800 rounded-lg'>
        <textarea onChange={(e) => SetComment(e.target.value)} required className="w-[50%] h-[50%] bg-white rounded-lg text-black outline-none border-[3px] border-blue-800 resize-none" placeholder='Lütfen Bir Yorum Giriniz'></textarea>
        <input type="submit" className='cursor-pointer bg-blue-800 pr-10 p-3 pl-10 rounded-full text-white font-light '/>
        </form>
      </Modal>
      <div className="w-[50%] h-[100%] flex flex-row gap-3">
        <div className="w-[25%] mt-10 h-[250px]">
          <GrTwitter fill='white' size={35}/>
          <h1 className='cursor-pointer font-bold mt-7 text-white text-xl'>
            # Explore
          </h1>
          <button onClick={() => setisopenModal(true)} className='mt-7 bg-blue-600 w-[100%] rounded-full h-[50px] text-white font-bold text-xl hover:scale-90 transition-all duration-200'>Tweet</button>
        </div>
        <div className="w-[75%] h-[100%] mt-14">
          {data?.map((tweet, index) => (
            <>
            <div key={index} className='w-[90%] pb-3 flex items-center flex-col outline-none border-[1px] border-white/50'>
              <div className="w-[97%] h-[60px] flex items-center">
                <img src={tweet?.porfileImage} draggable="false" className="rounded-full w-[50px]"/>
                <h1 className='text-white font-bold ml-5'>{tweet.profileName}</h1>
                <h1 className='text-white/50 text-sm ml-3'>{Number(new Date().getHours()) - Number(tweet.time)}H</h1>
              </div>
              <div className="w-[97%] mt-[2px] flex flex-col h-[100%]">
                <h1 className='text-white/50 text-xs'>{tweet.email}</h1>
                <h1 className='text-white text-base mt-[2px]'>{tweet.comment}</h1>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home