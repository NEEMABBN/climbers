import React from "react";
import Images from "../../../Setting/Images";
import EachSelectedDestinations from "../../../Components/EachSelectedDestinations";

export default function SelectedDestinations() {
  const destinationData = [
    {
      image: Images.MahmudabadBeaches,
      name: "سواحل محمودآباد",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MountDamavand,
      name: "دماوند",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MasalCity,
      name: "ماسال",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.BandarAbbasCity,
      name: "بندرعباس",
      activeTour: "(25 تور فعال)",
    },
  ];

  return (
    <div className="w-full bg-[#EAEAEA87] py-12">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <h2 className="md:text-3xl text-2xl text-Secoundray">مقصدهای منتخب</h2>
        <div className="flex items-center gap-3">
          {destinationData.map((item, index) => (
            <EachSelectedDestinations
              key={index}
              image={item.image}
              imageAlt={item.name}
              locationName={item.name}
              activeTour={item.activeTour}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
