import React from 'react'
import { useForm } from 'react-hook-form'
import { TbSocial } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {TextInput, CustomButton } from './index'
import {BsMoon, BsSunFill} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {Logout} from '../redux/userSlice'
import {SetTheme} from '../redux/theme'

const NavBar = () => {
    const { theme } = useSelector((state) => state.theme)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: {errors} } = useForm()

    const handleTheme = () => {
      const themeValue = theme === "light" ? "dark" : "light";
      dispatch(SetTheme(themeValue))
    }

    const handleSearch = async(data) => {}
      return (
        <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary '>
            <Link to='/' className='flex gap-2 items-center'>
              <div className='p-1 md:p-2 bg-[#065ad8] rounded text-white'>
                  <TbSocial />
              </div>
                <span className='text-xl md:text-2xl text-[#065ad8] font-semibold' >
                  FunBook
                </span>
            </Link>
            <form 
                className='hidden md:flex items-center justify-center'
                onSubmit={handleSubmit(handleSearch)}
            >
                <TextInput 
                    placeholder='Search...'
                    styles='w-[18rem] lg:w-[38rem] rounded-l-full py-3'
                    register={register("search")}
                />
                <CustomButton
                    titie='Search'
                    type='submit'
                    containerStyle='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full'
                />
            </form>

            {/* ICONS */}
            <div className='flex gap-4 items-center text-ascent-1 text-md md:text-sl'>
                <button onClick={()=> handleTheme()}> {theme ? <BsMoon /> : <BsSunFill />}</button>
                <div>
                  <IoMdNotificationsOutline />
                </div>
            </div>
            <div>
              <CustomButton 
                onClick={() => dispatch(Logout())}
                titie='Logout'
                containerStyle='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full'
              />
            </div>
        </div>
      )
}

export default NavBar