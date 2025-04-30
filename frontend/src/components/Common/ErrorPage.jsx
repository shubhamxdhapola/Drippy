import { Typography } from "@material-tailwind/react";
import { MdOutlineWifiTetheringError } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="mx-auto grid place-items-center text-center px-8" data-aos="zoom-in">
      <div>
        <MdOutlineWifiTetheringError size={50} className="mx-auto mt-10" />
        <Typography
          variant="h1"
          className="mt-4 !text-2xl !leading-snug md:!text-3xl text-gray-800"
        >
            It looks like something went wrong!
        </Typography>
        <Typography className="mt-2 mb-14 text-[18px] font-normal text-gray-600 mx-auto">
          Please check you internet connection or try again later
        </Typography>
      </div>
    </div>
  );
};
export default ErrorPage;
