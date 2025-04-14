import ImageCarousel from "./ImageCarousel.js";

export default function PresentationCard(props) {

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 p-6 bg-white mb-4 rounded-2xl shadow-xl max-w-4xl w-full mx-auto">

      <div className="w-full md:w-1/2 flex items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
            {props.screen.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: props.screen.description }} />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <ImageCarousel images={props?.screen?.images} />
      </div>

    </div>
  );
};