import { CheckCircle, CrossCircle, SocialBadge } from "./Icons";
import { COMPARISON_ROWS, type Cell } from "./pricing-data";

const COLUMNS = ["Starter", "Growth", "Scale", "API"];

function renderCell(cell: Cell) {
  if (cell === "platforms") {
    return (
      <span className="inline-flex items-center gap-1">
        <SocialBadge name="instagram" size={18} />
        <SocialBadge name="facebook" size={18} />
        <SocialBadge name="tiktok" size={18} />
      </span>
    );
  }
  if (cell === true) {
    return (
      <>
        <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (cell === false) {
    return (
      <>
        <CrossCircle className="mx-auto h-4 w-4 text-red-500" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return cell;
}

export default function FeatureComparison() {
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Features Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[720px] border-collapse text-center text-xs text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="w-[28%] px-5 py-5 text-left text-base font-semibold text-gray-900">
                  Features
                </th>
                {COLUMNS.map((name) => (
                  <th
                    key={name}
                    scope="col"
                    className={`relative border-l border-gray-200 px-3 py-5 text-sm font-semibold text-gray-900 ${
                      name === "Growth" ? "bg-yellow-50" : ""
                    }`}
                  >
                    {name === "Growth" && (
                      <span className="absolute right-0 top-0 rounded-bl bg-yellow-400 px-1.5 py-px text-[8px] font-semibold text-white">
                        Most Popular
                      </span>
                    )}
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-gray-200 last:border-b-0">
                  <th scope="row" className="px-5 py-4 text-left text-xs font-normal text-gray-600">
                    {row.label}
                  </th>
                  {row.values.map((cell, i) => (
                    <td
                      key={COLUMNS[i]}
                      className={`border-l border-gray-200 px-3 py-4 font-medium ${
                        i === 1 ? "bg-yellow-50" : ""
                      }`}
                    >
                      {renderCell(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
