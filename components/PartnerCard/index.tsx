import { CustomLink } from "components/CustomLink"
import { BsTwitter, BsDiscord } from "react-icons/bs"
import { BiWorld } from "react-icons/bi"
import { FC } from "react"

interface IPartnerCardProps {
  name: string,
  description: string,
  banner: string,
  logo: string,
  socialNetworks: {
    name: string,
    url: string,
  }[],
}

enum SocialNetworkIndex {
  Web,
  Discord,
  Twitter,
}

export const PartnerCard: FC<IPartnerCardProps> = ({ name, description, banner, logo, socialNetworks }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative flex rounded-md bg-primary-gray h-60'>
        <div className='absolute left-0 right-0 mx-auto border-8 border-white border-solid rounded-full -bottom-10 h-44 w-44 bg-primary-red'></div>
      </div>
      <div className='flex flex-col items-center gap-10 m-20'>
        <span className='text-3xl font-bold text-white'>{name}</span>
        <p className='text-center text-white px-11'>{description}</p>
        <div className='grid grid-cols-3 gap-10'>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Web].url}
            className='duration-200 ease-in-out hover:scale-125'>
            <BiWorld className='text-white' size="1.6rem" />
          </CustomLink>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Discord].url}
            className='duration-200 ease-in-out hover:scale-125'>
            <BsDiscord className='text-white' size="1.6rem" />
          </CustomLink>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Twitter].url}
            className='duration-200 ease-in-out hover:scale-125'>
            <BsTwitter className='text-white' size="1.6rem" />
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
