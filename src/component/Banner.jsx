import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d4t4n6x-5c7d8cf3-0ace-415b-ae53-2bf895f06321.jpg/v1/fill/w_1024,h_400,q_75,strp/__the_avengers___banner_3_by_andrewss7_d4t4n6x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kNHQ0bjZ4LTVjN2Q4Y2YzLTBhY2UtNDE1Yi1hZTUzLTJiZjg5NWYwNjMyMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HceDboxVGK1DhZ3khh5Orp8PpGUpBXCw--CPqjEL2hk)`,
      }}
    >
        <div className="text-white text-2xl text-center w-full bg-gray-900/60 p-4">
            Avengers
        </div>
    </div>
  );
}

export default Banner;
