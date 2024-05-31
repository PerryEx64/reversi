interface Props {
  title: string;
  subTitle: string;
}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-col mt- gap-4 justify-center  items-center font-press-start-2p">
        <h2 className="text-4xl  ml-auto mr-auto max-sm:text-lg  max-sm:px-5  mt-10  text-white  font-press-start text-center">
          {props.title}
        </h2>
        <h3 className=" text-xl max-sm:text-base max-sm:px-5 text-white  font-prosto-one ">
          {props.subTitle}
        </h3>
      </div>
    </header>
  );
};
