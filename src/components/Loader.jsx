import { loader } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="text-2xl font-bold text-white mt-2">{title || "Loading..."}</h1>
    </div>
  )
};

export default Loader;
