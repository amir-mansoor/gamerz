import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileInput, Image } from "lucide-react";
import { useRef } from "react";

const CreatePost = () => {
  const imageRef = useRef();

  const handleImageUploadClick = () => {
    imageRef.current?.click();
  };

  return (
    <div className="backdrop-brightness-150 p-2 rounded">
      <div className="flex flex-row space-x-2">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Ac</AvatarFallback>
        </Avatar>
        <form className="w-full">
          <input
            className="rounded  outline-none p-2 bg-gray-600 text-white"
            type="text"
            placeholder="What's Happening?"
          />
        </form>
      </div>

      <div
        className=" text-white mt-2  backdrop-brightness-150 w-fit p-2 rounded-full cursor-pointer"
        ref={imageRef}
      >
        <div className="space-x-2 flex" onClick={handleImageUploadClick}>
          <Image /> <span>Photo</span>
        </div>

        <input ref={imageRef} type="file" style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default CreatePost;
