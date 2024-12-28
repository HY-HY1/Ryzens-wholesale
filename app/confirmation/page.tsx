    import { Button } from "@/components/ui/button";
    import { ArrowRight } from "lucide-react";
    import Link from "next/link";
    import React from "react";

    const page = () => {
    return (
        <div className="w-[70vw] m-auto h-full flex justify-center items-center content-center text-center mt-[30vh] ">
        <div>
            <h2>Thanks for sending an enquiry</h2>
            <p>We aim to respond within three (3) business days</p>
            <div className="py-2">
            <Link href="/">
                <Button variant={"default"}>
                {" "}
                Back to site{" "}
                <span>
                    {" "}
                    <ArrowRight />
                </span>
                </Button>
            </Link>
            </div>
        </div>
        </div>
    );
    };

    export default page;
