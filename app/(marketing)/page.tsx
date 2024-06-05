import Navbar from "@/components/shared/navbar";
import RecentListings from "./_components/recentListings";
import LastSectionOptions from "./_components/lastSectionOptions";
import AddressSearch from "./_components/addressSearch";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        className="relative flex items-center w-full h-[25rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')",
        }}>
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="w-full px-6 max-w-screen-sm mx-auto lg:mx-0 ">
            <h2 className="text-white text-5xl font-bold text-center lg:text-left lg:text-6xl lg:font-black">
              Agents. Tours. Loans. Homes.
            </h2>

            <AddressSearch />
          </div>
        </div>
      </div>

      <RecentListings />
      <LastSectionOptions />
    </main>
  );
}
