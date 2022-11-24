"use client";

import { useState } from "react";
import Badge from "../components/Badge";

export default function Docs() {
  const [badgeColor, setBadgeColor] = useState<String>("primary");

  return (
    <main className="max-w-screen-xl mx-auto py-4">
      <h2 className="text-textDefault-l dark:text-textDefault-d">
        Tailwindcss
      </h2>
      <hr className="divide-solid mt-4 mb-8 border-gray200-l dark:border-gray300-l" />

      <div className="flex flex-row items-center gap-10">
        <Badge color={badgeColor} label="Badge component" />

        <div className="w-60">
          <label
            htmlFor="badge-color"
            className="block mb-2 text-sm font-medium text-textDefault-l dark:text-textDefault-d"
          >
            Badge color
          </label>
          <select
            name="badge-color"
            id="badge-color"
            onChange={(event) => setBadgeColor(event.currentTarget.value)}
            className="mb-4 outline-none bg-gray50-l border border-gray100-l text-textDefault-l text-sm rounded-lg focus:ring-cyan300-l focus:border-cyan300-l block w-full p-2.5 dark:bg-gray50-d dark:border-gray100-d dark:placeholder-gray200-l dark:text-textDefault-d dark:focus:ring-cyan300-d dark:focus:border-cyan300-d"
            defaultValue="primary"
          >
            <option value="primary">Primary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
          </select>
        </div>
      </div>
    </main>
  );
}
