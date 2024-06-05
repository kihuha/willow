"use client";

import { FunctionComponent } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import { Search } from "lucide-react";

interface AddressSearchProps {}

const AddressSearch: FunctionComponent<AddressSearchProps> = () => {
  return (
    <div className="relative text-center mt-4">
      <AddressAutofill
        accessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        options={{
          language: "en",
        }}>
        <input
          placeholder="Address, neighbourhood, city, ZIP"
          className="w-full px-4 py-4 rounded-lg text-base"
        />
        <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 size-5" />
      </AddressAutofill>
    </div>
  );
};

export default AddressSearch;
