import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FunctionComponent } from "react";

interface LastSectionOptionsProps {}

const LastSectionOptions: FunctionComponent<LastSectionOptionsProps> = () => {
  return (
    <section className="h-full md:h-96 lg:h-[26rem] bg-slate-100/90">
      <div className="max-w-screen-xl mx-auto w-10/12 md:w-full py-6">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-6">
          <Card>
            <CardContent>
              <Image
                width={220}
                height={300}
                src="/three.svg"
                alt="illustration three"
                className="mx-auto"
              />
              <p className="text-center text-sm mb-4 px-4 text-muted-foreground">
                Find a place to call your own. Browse through the largest array
                of homes with various options including listings found nowhere
                else.
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="outline">
                  Browse homes
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                width={220}
                height={300}
                src="/two.svg"
                alt="illustration two"
                className="mx-auto"
              />
              <p className="text-center text-sm mb-4 px-4 text-muted-foreground">
                Looking for a prospective buyer, we can help with that. All we
                need are some photos, some details and voila! Your listing is
                ready
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="outline">
                  See your options
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                width={220}
                height={300}
                src="/one.svg"
                alt="illustration one"
                className="mx-auto"
              />
              <p className="text-center text-sm mb-4 px-4 text-muted-foreground">
                We create a smooth experience for users to find a suitable place
                for them. The whole process is smooth, easy and secure for both
                sellers and rentors
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="outline">
                  Find rentals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LastSectionOptions;
