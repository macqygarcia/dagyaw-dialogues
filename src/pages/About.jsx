import Logos from '../components/shared/Logos'

export default function About() {
  return (
    <section>
      <div className="relative pt-10 pb-40 bg-white">
        <div className="flex flex-col items-center justify-center gap-3 p-5 text-sm text-justify text-zinc-900 sm:p-7 md:mx-auto md:max-w-2xl lg:max-w-3xl lg:gap-7 lg:text-xl xl:max-w-4xl">
          <Logos />
          <h2 className="mb-5 text-4xl text-transparent bg-gradient-to-r from-[#EC6F43] to-[#E17D06] bg-clip-text md:text-5xl xl:text-6xl">
            About Us
          </h2>
          <p className="text-justify text-zinc-800 lg:text-xl">
            In partnership with the Presidential Communications Operations
            Office (PCOO), the Department of Budget and Management (DBM), Caucus
            of Development NGO Networks (CODE-NGO), and other development
            partners, the Department of the Interior and Local Government (DILG)
            launched the Dagyaw Open Government Town Hall Meetings. Dagyaw, a
            Hiligaynon word that directly translates to “togetherness”, provides
            a venue where citizens and their government can come together to
            engage in dialogue.
          </p>
          <p className="text-black ">
            As we progress and live in an era where technological advances are
            common, we now bring the Dagyaw to online spaces where it can
            influence the way individuals communicate, learn, and think about
            governance. The Dagyaw Dialogues online platform provides people
            opportunities to suggest and recommend topics that can be discussed
            both in the town hall meetings or in the e-Dagyaw mo! events.
          </p>
          <p className="text-black ">Click. Connect. Talk.</p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 p-5 text-sm text-justify text-zinc-900 sm:p-7 md:mx-auto md:max-w-2xl lg:max-w-3xl lg:gap-7 lg:text-xl xl:max-w-4xl">
          <h2 className="text-center w-full bg-gradient-to-r from-[#EC6F43] to-[#E17D06] bg-clip-text pb-2 text-4xl text-transparent md:text-5xl xl:text-6xl">
            Objectives
          </h2>
          <p className="text-justify text-zinc-800 lg:text-xl">
            The main goal of the "Dagyaw: Virtual Town Hall Meetings" is to
            build mutual trust between the government and the Filipino people by
            providing an open, neutral, and protected space for dialogue. As an
            access to information platform, it shall aim to boost confidence
            among CSOs and citizens in government programs that address their
            felt needs. The outputs from these dialogues shall then serve as key
            references of government in public decision-making, and in shaping
            and updating government policies that can lead to better public
            sector performance and service delivery.
          </p>
          <ul className="grid gap-2 p-5 font-light text-justify list-disc">
            <li>
              Conduct a series of Town Hall Meetings that will provide a
              platform for citizens and government to engage in dialogue.
            </li>
            <li>
              Co-create and launch the Town Hall Meetings with members of Civil
              Society Organizations.
            </li>
            <li>
              Make the documentation of the Town Halls, especially the open
              forum discussions, available to the public.
            </li>
            <li>
              Expand the conduct of the townhalls to the provincial level.
            </li>
          </ul>
          <a
            href="http://ogp.dbm.gov.ph/index.php/dagyaw#what-is-dagyaw-2020"
            className="inline-block w-full p-4 font-bold text-center bg-zinc-200 rounded-2xl active:scale-90"
          >
            View past episodes
          </a>
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-repeat -z-10 bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </section>
  )
}
