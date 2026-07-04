import { Container } from "@/components/layout/Container";

export function IdentityStudio() {
  return (
    <section id="identity" className="boundary-glow relative overflow-hidden bg-[#dcd0ba] py-24 md:py-36">
      <div className="flow-orbit absolute -right-40 top-0 h-[620px] w-[620px] rounded-full border border-[#1e3a34]/10" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-7">01 / Human in the loop</p>
            <h2 className="section-title">A face behind<br /><em className="font-light text-[#b86b4b]">the systems.</em></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#1e3a34]/68">
              Technology is most useful when it stays grounded in people. I build at the meeting point of language, vision, and the physical world—turning research into systems that can be understood and used.
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[["Bengaluru", "Base"], ["ISE · 2027", "Formation"], ["AI + Edge", "Practice"]].map(([value, label]) => (
                <div key={label} className="border-t border-[#1e3a34]/20 pt-4">
                  <strong className="font-display text-lg">{value}</strong>
                  <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-[#1e3a34]/48">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2.5rem] border border-[#1e3a34]/15" />
            <div className="identity-frame relative flex h-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#1e3a34] shadow-[0_35px_90px_rgba(30,58,52,.24)]">
              <div className="relative grid h-56 w-56 place-items-center rounded-full border border-[#c49a57]/40 shadow-[0_0_70px_rgba(196,154,87,.12)]">
                <div className="absolute inset-6 rounded-full border border-[#c49a57]/20" />
                <span className="font-display text-6xl text-[#e7dcc8]">MA<span className="text-[#b86b4b]">.</span></span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-[#161815]/80 to-transparent p-7 pt-20 font-mono text-[9px] uppercase tracking-widest text-[#f5f1e8]/60">
                <span>Muhammad Ahmed</span><span>Portrait / 01</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
