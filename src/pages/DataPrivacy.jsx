export default function DataPrivacy() {
  return (
    <section className="py-10 h-screen grid place-items-center px-5">
      <div className="grid gap-5 border-4 border-zinc-800 bg-black p-5 text-justify rounded text-sm sm:p-7 md:mx-auto md:max-w-2xl lg:p-12 lg:py-16 lg:max-w-3xl lg:gap-7 lg:text-xl xl:max-w-4xl">
        <h2 className="bg-gradient-to-r from-[#00959F] to-[#67A464] bg-clip-text pb-2 text-center text-4xl text-transparent md:text-5xl xl:text-6xl">
          Data Privacy Notice
        </h2>
        <p className="text-justify text-zinc-400 lg:text-lg">
          In line with the requirements set out by the{" "}
          <a
            className="text-blue-800"
            href="https://www.privacy.gov.ph/data-privacy-act/"
          >
            Data Privacy Act of 2012 (R.A. 10173)
          </a>
          , we keep the information you share with us as safe as possible. By
          proceeding with the inquiries relative to Dagyaw, you agree that
          information you shared with us may be used for administrative and
          documentation purposes only. The organizers fully respect your right
          to privacy. If you think that your personal data was mishandled in
          terms of confidentiality or integrity, or if someone tampered with
          your personal data without your consent, please do not hesitate to
          contact our Data Protection Officer through - Tel. No. (02) 8925-0357
          or dagyawdialogues@gmail.com
        </p>
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
