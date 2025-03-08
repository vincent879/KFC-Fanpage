import React from 'react';

const KFC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 space-y-8 py-8">
      <div className="flex gap-8 flex-wrap md:flex-nowrap justify-center">
        <div className="border-4 border-[#2c3e50] p-6 rounded-xl w-[500px] h-[500px] flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-4">KFC Founders</h1>
            <p className="text-xl mb-4">Colonel Sanders and Pete Harman</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://pbs.twimg.com/media/A48REcPCEAAAVAb.png"
              alt="KFC Founders"
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Starting from the vision of Colonel Sanders turned into a partnership with Pete Harman, creating the world's most popular fried chicken.
            </p>
          </div>
        </div>

        <div className="border-4 border-[#2c3e50] p-6 rounded-xl w-[500px] h-[500px] flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-4">Achievement</h1>
            <p className="text-xl mb-4">KFC won Gold: Restaurant & Fast Food category.</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://kfc.com.my/media/wysiwyg/2019-img-1.png?auto=webp&format=png&quality=85"
              alt="KFC Achievement"
              className="w-[500px] h-[250px] object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              KFC has earned numerous awards for its quality and its amazing menu options you can choose from.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/C5612AQESZh-txW3ZXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1643851235026?e=2147483647&v=beta&t=e_3Y_VOalq1J2tHI5QmcldKG9RXdHwVwNk5TnOiIOJo"
            alt="kfc fans"
            className="w-[800px] h-[300px] object-cover"
          />
          <p className="text-center text-lg text-gray-700 mt-2">"KFC is most delicous when gaming"</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[500px] h-[300px]">
            <iframe
              src="https://www.youtube.com/embed/QQ-97nj29Ow?si=-3sAXoQgocGjQxc-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <p className="text-center text-lg text-gray-700 mt-2">"If Speed loves KFC, you should too"</p>

          
        </div>
      </div>
    </div>
  );
};

export default KFC;





