import Download from "./Download";

export default function DownloadList() {
  return (
    <section className="py-20 px-2">
      <h2 className="py-10 text-center mb-5 text-4xl text-transparent bg-gradient-to-r from-[#EC6F43] to-[#E17D06] bg-clip-text md:text-5xl xl:text-6xl">
        Reference Materials
      </h2>
      <div className="grid gap-2 sm:grid-cols-2 sm:justify-center lg:grid-cols-3 xl:mx-auto xl:max-w-7xl">
        <Download
          subTitle="Nasaan na ba tayo"
          title="Usapang Bakuna at Herd Immunity sa COVID-19"
          date="October 15, 2021"
          briefer="https://drive.google.com/uc?export=download&id=17nBuwD-cXUMQ85rs4yN5CJe-gw7Ekwih"
          documentation="https://drive.google.com/uc?export=download&id=1DMuWu8v269nNA7VQMl5FPoY3BmR-Dyt4"
        />
        <Download
          subTitle="Okay na ba talagang lumabas?"
          title="Usapang Citizen Mobility sa COVID-19"
          date="November 5, 2021"
          briefer="https://drive.google.com/uc?export=download&id=1ulf0N1-6ZiVC2iNHt7hFkX5nxDXMfPhA"
          documentation="https://drive.google.com/uc?export=download&id=1HOW8_9-q8Hr7Cu_Tt_XhMmd1Mou2151Y"
        />
        <Download
          subTitle="Serbisyong Medikal, paano matatanggap ng bawat Pilipino?"
          title="Usapang Public Health"
          date="November 26, 2021"
          briefer="https://drive.google.com/uc?export=download&id=1BWcMNy3I5fCgMLdfJd05l7twIn3_pLxh"
          documentation="https://drive.google.com/uc?export=download&id=1wgr4uJ3mMr-KH8TA3-0nnHR7MWkIFM7P"
        />
      </div>
    </section>
  );
}
