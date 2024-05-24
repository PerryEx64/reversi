interface Props {
  title: string;
  subTitle: string;
}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-col mt-8 gap-4 justify-center  items-center">
        <h2 className="text-4xl max-w-[50%] text-white  font-press-start text-center">
          {props.title}
        </h2>
        <h3 className=" max-w-[60%] text-xl text-white  font-prosto-one ">
          {props.subTitle}
        </h3>
      </div>
    </header>
  );
};
