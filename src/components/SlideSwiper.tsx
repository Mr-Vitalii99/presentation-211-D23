// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { contendData } from "@/moks/slideData";

export default function SlideSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {contendData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className=" w-[80%] h-[580px] p-6">
              <h2 className="mb-3 text-4xl font-bold">{data.title}</h2>
              <div className="flex items-center justify-center text-left h-full">
                {data.image && data.imagePosition !== "right" ? (
                  <div className="w-[40%]  p-4">
                    <img
                      className="object-cover h-full w-full max-w-full"
                      src={data.image}
                      alt="slide"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="w-[60%]">
                  {data.text ? (
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                  ) : (
                    ""
                  )}
                  {data.listName ? (
                    <p className="mt-2 font-bold">{data.listName}</p>
                  ) : (
                    ""
                  )}
                  <ul className="indent-7">
                    {data.list
                      ? data.list.map((item, index) => (
                          <li
                            key={index}
                            className="text-left p-1"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))
                      : ""}
                  </ul>
                </div>
                {data.image && data.imagePosition === "right" ? (
                  <div className="w-[40%] p-4">
                    <img
                      className="object-cover h-full w-full max-w-full"
                      src={data.image}
                      alt="slide"
                    />
                  </div>
                ) : (
                  ""
                )}
                {data.youTubeLink ? (
                  <div className="w-[40%] p-4">
                    <ReactPlayer width="460px" url={data.youTubeLink} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
