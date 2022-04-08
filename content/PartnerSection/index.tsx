import { PartnerCard } from "components/PartnerCard"
import { usePartner } from "hooks/usePartner"
import { v4 as uuidv4 } from "uuid"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { splitArrayIntoChunks } from "utils"
import { useWindowSize } from "react-use"

export const PartnerSection = () => {
  const { data } = usePartner()
  const { width } = useWindowSize()
  const isMobile = width <= 640

  return (
    <section className='flex flex-col gap-16'>
      <h1 className="text-4xl font-bold text-center text-white">
        <span className='text-white'>Our</span>
        <span className='text-primary-yellow'> Partners</span>
      </h1>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        useKeyboardArrows={true}
      >
        {
          data && splitArrayIntoChunks(data, isMobile ? 1 : 2).map((chunks) => (
            <div key={uuidv4()} className='grid grid-cols-2 gap-20 xs:grid-cols-1'>
              {
                chunks?.map((partner) => (
                  <PartnerCard key={uuidv4()} {...partner} />
                ))
              }
            </div>
          ))}
      </Carousel>
    </section>
  )
}
