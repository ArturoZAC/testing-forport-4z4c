import { MainContainer } from "../responsive/MainContainer";
import { Connect } from "./Connect";
import { Form } from "./Form";

export const BodyContact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainContainer className="flex flex-row max-md:flex-col-reverse justify-center items-stretch gap-x-10 max-md:gap-y-10">
        <Form />
        <Connect/>
      </MainContainer>
    </div>
  );
};
