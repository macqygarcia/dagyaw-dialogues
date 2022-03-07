import Logos from "../components/shared/Logos";

export default function About() {
  return (
    <section>
      <div className="relative pt-10 pb-40 bg-white">
        <div className="flex flex-col items-center justify-center gap-3  p-5 text-justify text-sm text-zinc-900 sm:p-7 md:mx-auto md:max-w-2xl lg:max-w-3xl lg:gap-7 lg:text-xl xl:max-w-4xl">
          <Logos />
          <h2 className="mb-5 text-4xl text-transparent bg-gradient-to-r from-[#EC6F43] to-[#E17D06] bg-clip-text md:text-5xl xl:text-6xl">
            About Us
          </h2>
          <p className="text-justify text-zinc-800 lg:text-xl">
            The Philippines is in the midst major upheavals. The COVID-19
            Pandemic continues to ravage the world and threaten lives and
            livelihood of citizens. The country also faces the ever-present
            threat posed by natural disasters like earthquakes, volcanic
            eruptions, and typhoons. Meanwhile, in a bid to improve local
            service delivery, the government is currently in a transition
            towards greater devolution of services as a result of the
            Mandanas-Garcia SC Ruling.
          </p>
          <p className="text-black ">
            With all the flux and uncertainty faced by Filipinos, it is the duty
            of the Government to keep its citizens informed and updated with the
            affairs of state. The government should strive to secure the trust
            of citizens and assure them that their government is doing its best
            to serve the country. Therefore, it is imperative for programs like
            the Dagyaw Open Government Town Halls, to continue.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            Dagyaw, a Hiligaynon word that directly translates to
            “togetherness”, provides a venue wherein citizens and their
            government can come together to engage in discourse. In these Town
            Halls, citizens can ask questions from the government and provide
            feedback to public programs and services. Likewise, government
            agencies benefit from the town hall as it provides them a platform
            to promote and explain government initiatives as well as get a feel
            of the pulse of the people on important issues. In the past, the
            Town Halls have been conducted both at the National and Regional
            Level.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            The Dagyaw Town Hall Meetings are also anchored on the mandates of
            the Participatory Governance Cabinet Cluster (PGC) to (i) promote
            and ensure the direct participation of various stakeholders in the
            crafting and formulation of policies and programs to address
            emergent governance issues and concerns at the grassroots level and;
            (ii) initiate programs and projects that will facilitate citizen
            empowerment and participation in governance at the national,
            regional and local levels. Moreover, the continuing conduct of town
            hall meetings in the country is a commitment of the Philippine
            government to the international Open Government Partnership (OGP).
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            The Town Hall Meetings are spearheaded by the Department of the
            Interior and Local Government (DILG), Presidential Communications
            Operations Office (PCOO) and the Department of Budget and Management
            (DBM). It is also supported by the Office of the President (OP);
            Office of the Cabinet Secretary (OCS) and various national
            government agencies.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            In 2020, the Town Hall Meetings went virtual in consideration to the
            threat posed by the COVID-19 Pandemic. Furthermore, a co-creation
            process was implemented wherein Civil Society Organizations were
            invited to participate in the process of developing Dagyaw from the
            onset of the preparations up to the conduct and assessment of the
            townhalls.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            The Philippines rated highly in the 2020 COVID-19 Global Scorecard
            on Accountability which was conducted by the International Budget
            Partnership (IBP) due in large part to Dagyaw which was cited as an
            avenue for continuing public dialogues during the COVID crisis on
            government response policies.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            For this year, Dagyaw shall focus on topics and issues surrounding
            local service delivery, in the context of the COVID-19 Recovery
            Efforts of the country as well as the changes being implemented
            under the SC ruling on the Mandanas-Garcia Ruling. Another key
            change for this year is the emphasis towards localization of the
            Town Halls; Provincial Governments shall be encouraged to conduct
            their own Dagyaw Town Hall Meetings with guidance from the Regional
            TWGs. This is in line with DILG Memorandum Circular 2019-56 wherein
            all LGUs are enjoined to conduct town hall meetings every quarter,
            to serve as a platform in informing citizens of the state of local
            governance in their respective LGUs.
          </p>
          <p className="text-justify text-zinc-800 lg:text-xl">
            Considering the continuing threat posed by COVID-19, the National
            Town Hall Meetings will still be conducted virtually. Regional and
            Provincial Town Halls are also recommended to be held virtually, but
            areas that face minimal threat from COVID-19 will be allowed to hold
            mixed-townhalls wherein a limited audience may be invited to
            participate. However, the townhalls should still be broadcast online
            and/or through other platforms such as radio or television.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 p-5 text-justify text-sm text-zinc-900 sm:p-7 md:mx-auto md:max-w-2xl lg:max-w-3xl lg:gap-7 lg:text-xl xl:max-w-4xl">
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
          <ul className="grid list-disc gap-2 p-5 text-justify font-light">
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
            className="inline-block bg-zinc-200 rounded-2xl text-center p-4 w-full font-bold active:scale-90"
          >
            View past episodes
          </a>
        </div>
      </div>
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </section>
  );
}
