import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/landing_page_banner_lakme_big_beauty_sale_fbba1b5f-bed2-414e-9acd-b45d38605899_1169x.gif?v=1669286019"},
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/Wet_dry_compact_HPbanner_desktop_ac43fc27-4229-4ec3-95c3-8f7125ff13b0_1800x.jpg?v=1667980219" },
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/p_m_foundation_desktop_banner_1800x.jpg?v=1669025890" },
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/HP_desktopbanner_amigos_875c406d-1f92-4034-ae59-871430b7968e_1800x.jpg?v=1667557458" },
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/Homepage_banner_new_serum_1800x.jpg?v=1669185884" },
  { url: "https://cdn.shopify.com/s/files/1/0014/3514/0183/files/Homepage_banner_desktop__power_of_vit_c_23cc289b-d767-400c-b422-07f488d9a601_1800x.jpg?v=1663070888" },
 
];
const ImgSlider = () => {
  return (
    <div>
         <SimpleImageSlider
        width={"100%"}
        height={"100vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    </div>
  )
}

export default ImgSlider
