import React from "react";
import { useForm } from "react-hook-form";
import { useSpotifyData } from "./SpotifyProvider";

function SearchBar() {
  const { register, handleSubmit } = useForm();
  const [{ input }, dispatch] = useSpotifyData();
  console.log(input);
  return (
    <div className=" relative text-xs h-10 w-4/6 md:w-5/12 2xl:w-4/12 2xl:h-14 items-center 2xl:text-lg">
      <form
        onChange={handleSubmit((data, e) => {
          dispatch({
            type: "SET_INPUT",
            input: data.artist,
          });
          // e.target.reset();
        })}
        className="h-full w-full "
      >
        <input
          name="artist"
          className="w-full border h-full text-xs lg:text-sm px-12 md:p-2 md:px-20 outline-none rounded-full"
          type="text"
          ref={register({ required: true })}
          placeholder="Search for songs, Artists etc.."
        />
        <button
          type="submit"
          className="ml-5 absolute left-1 top-0 mt-3 mr-4 2xl:mt-5 2xl:mr-6"
        >
          <svg
            className="text-gray-400 h-4 w-4 fill-current outline-none"
            viewBox="0 0 56.966 56.966"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
