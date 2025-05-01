import { Typography, Button } from "@material-tailwind/react";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export function PageNotFound() {

  const navigate = useNavigate()
  
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <BiSolidMessageSquareError className="w-20 h-20 mx-auto" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404! <br /> Page Not Found
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Oops! It looks like you’ve lost your way.
          <br /> The page you’re looking for doesn’t exist or might have been
          moved..
        </Typography>
        <Button
          color="gray"
          className="w-full px-4 md:w-[8rem]"
          onClick={() => navigate("/")}
        >
          back home
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
