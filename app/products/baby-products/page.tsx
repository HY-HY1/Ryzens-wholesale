import CatagoryLayout from "@/app/components/Sections/CatagoryLayout";
import React from "react";

const babyProducts = [
    "Diapers",
    "Feeding Bottles",
    "Baby Clothes",
    "Toys",
    "Baby Carriers",
  ]

const page = () => {
  return (
    <div>
      <div className="pt-4">
      <CatagoryLayout
        text="Explore our range of baby products designed to provide comfort, safety, and joy for your little one. From diapers and feeding essentials to toys and accessories, we have everything you need to care for your baby."
        heading="Baby Products"
        examples={babyProducts}
        image="/Baby.jpg"
      />
      </div>
    </div>
  );
};

export default page;
