import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const Home = async () => {
  const dummyPlaylists = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        {/* carousel */}
        <PlayListCarousel
          playlistArray={dummyPlaylists}
          Thumbnail={
            <div>
              <UserIcon size={"lg"} />
            </div>
          }
          title="다시 듣기"
          subTitle="하이"
        />
      </div>
    </PagePadding>
  );
};

export default Home;
