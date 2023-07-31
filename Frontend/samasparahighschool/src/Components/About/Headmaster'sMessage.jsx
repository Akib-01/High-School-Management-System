import React from "react";
import headmasterImage from "../Assets/Event/Event1.jpg"; // Replace with the actual path to the image

const HeadmastersMessage = () => {
  return (
    <div className="container mx-auto mt-8 py-10">
      <div className="flex flex-col px-24 pl-32">
        <div className="md:w-1/2 md:mr-8 mt-4 md:mt-0 border border-gray-400 p-4  py-10">
          <div className="p-6">
            <div className="md:w-[200px] md:h-[200]">
              <img
                src={headmasterImage}
                alt="Headmaster"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Headmaster's Message</h2>
          <p className="text-lg text-gray-600 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            est obcaecati dolorem nihil, quod temporibus hic mollitia deserunt?
            Ducimus dolor quae perspiciatis sequi, fugit cumque atque incidunt
            rem neque! Veritatis laboriosam quo magnam architecto, harum ipsa
            nihil desers quibusdam aspernatur inventore expedita nemo sunt
            labore? Hic dolorem corrupti deleniti sunt quod pariatur quo quas
            animi, quia quaerat dolorum eum ullam explicabo ducimus
            necessitatibus reiciendis in quos. Ut, ratione reiciendis deserunt
            harum aut cumque alias iste dignissimos reprehenderit fugit autem
            laborum ab impedit cupiditate repellat voluptatem voluptas. Et dolor
            perferendis distinctio quidem placeat consectetur facere sapiente
            ducimus ratione dolores soluta, illum, exercitationem magnam tempore
            dolorum natus. Asperiores delectus odio eius labore?
          </p>
          {/* Add more content of the headmaster's message */}
        </div>
      </div>
    </div>
  );
};

export default HeadmastersMessage;
