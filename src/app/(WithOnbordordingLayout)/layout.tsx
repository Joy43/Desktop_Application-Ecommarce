import Onboarding from "./(onbording)/page";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Onboarding />
      <div className="">{children}</div>
    </>
  );
};

export default CommonLayout;
