import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RemoteOrCeefax from "@/components/RemoteOrCeefax";
import { Room } from "./Room";
import Test from "@/components/Test";
import SubHeading from "@/components/SubHeading";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <Room>
        <RemoteOrCeefax>
          <Header />

          <div className="grow">
            <SubHeading>Subheading 1</SubHeading>

            <Test />

            <hr
              className="my-2"
              style={{ borderTop: "2px solid rgb(117, 251, 76)" }}
            />

            <p className="text-teletext-lightblue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              eaque officia saepe, quos ipsa ullam, modi quae recusandae error
              neque deleniti cumque tempora vitae ex esse distinctio assumenda!
              Temporibus, saepe.
            </p>
            <SubHeading>Subheading 2</SubHeading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              eaque officia saepe, quos ipsa ullam, modi quae recusandae error
              neque deleniti cumque tempora vitae ex esse distinctio assumenda!
              Temporibus, saepe.
            </p>
          </div>
          <Footer />
        </RemoteOrCeefax>
      </Room>
    </div>
  );
}
