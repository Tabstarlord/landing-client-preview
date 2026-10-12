import { CheckCircle, CrossCircle } from "./Icons";
import { WITHOUT_FLYRINZO, WITH_FLYRINZO } from "./pricing-data";

export default function WhyChoose() {
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Why Businesses Choose Flyrinzo</h2>
          <p className="mt-2 text-sm text-gray-500">Save time. Save money. Get better results.</p>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-red-50 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
                <CrossCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Without Flyrinzo</h3>
                <p className="text-xs text-gray-500">More tolls, more work, higher cost.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 rounded-xl bg-white/50 p-4">
              {WITHOUT_FLYRINZO.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <span className="mt-px inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <CrossCircle className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 shadow-md md:flex"
          >
            VS
          </span>

          <div className="rounded-2xl bg-yellow-50 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-white">
                <CheckCircle className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">With Flyrinzo</h3>
                <p className="text-xs text-gray-500">Everything you need in one place.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 rounded-xl bg-white/50 p-4">
              {WITH_FLYRINZO.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <CheckCircle className="mt-px h-4 w-4 shrink-0 text-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
