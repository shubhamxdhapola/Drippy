const GoogleSignInButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button className=" w-full p-2 border flex justify-center items-center gap-6 font-semibold rounded-lg text-gray-800  bg-gray-200 hover:bg-gray-300 duration-300">
        <img
          className="w-5 h-5"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleSignInButton;
