'use client';

import useCountries from "@/app/hooks/useCountry";
import { User } from "@prisma/client";
import Heading from "../Heading";
import { SafeUser } from "@/app/types";
import Image from "next/image";
import HeartButton from "../HeartButton";



interface IListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}



const ListingHead:React.FC<IListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
}) => {

    const { getByValue } = useCountries();

  const location = getByValue(locationValue);



    return ( 


        

        <>
        <Heading
        
         title={title}
        subtitle={`${location?.region}, ${location?.label}`}
        
        />

        <div className="
            w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
          ">
            <Image
                alt="Image"
                src={imageSrc}
                fill
                sizes="100%"
                className="object-cover w-full"
            />

            <div className="
            absolute 
            top-5 
            right-5
            ">
                 <HeartButton listingId={id} currentUser={currentUser} />

                 

            </div>



        </div>

        </>
     );
}
 
export default ListingHead;